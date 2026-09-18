# Voltio on Proxmox (LXC 102)

What Voltio needs **on top of** the homelab runbook
[`add-a-site.md`](https://github.com/eliya-amanoeel/homelab/blob/main/docs/runbooks/add-a-site.md).
Follow the runbook with CT ID `102`, hostname `voltio`, IP `192.168.68.22`, with
these differences:

- **Step 4:** use [`Caddyfile`](Caddyfile) from this folder instead of amaeli's.
- **After step 5:** do the form service steps below **before** running the
  workflow.
- **Step 6:** the workflow already exists: `.github/workflows/deploy-linux.yml`.

| File here | Goes to |
|---|---|
| `Caddyfile` | `/etc/caddy/Caddyfile` |
| `voltio-form.service` | `/etc/systemd/system/voltio-form.service` |

## Form service (container, as root)

### 1. ASP.NET Core runtime, from Microsoft's repository

```bash
curl -sSLo /tmp/ms.deb https://packages.microsoft.com/config/debian/13/packages-microsoft-prod.deb
dpkg -i /tmp/ms.deb && rm /tmp/ms.deb
apt update && apt install -y aspnetcore-runtime-10.0
dotnet --list-runtimes          # must list Microsoft.AspNetCore.App 10.0.x
```

Let `unattended-upgrades` patch the runtime too:

```bash
cat > /etc/apt/apt.conf.d/52unattended-upgrades-microsoft <<'EOF'
// Let unattended-upgrades apply .NET security updates from Microsoft's repository.
Unattended-Upgrade::Origins-Pattern {
    "site=packages.microsoft.com";
};
EOF
unattended-upgrade --dry-run --debug 2>&1 | grep -i "allowed origins"   # must include site=packages.microsoft.com
```

### 2. Service user, folders, password

```bash
useradd --system --no-create-home --shell /usr/sbin/nologin voltio-form
mkdir -p /opt/voltio-form /etc/voltio-form
chown runner:runner /opt/voltio-form

# Typed, not pasted into a command line, so it stays out of shell history.
read -rsp "One.com SMTP password: " P && echo
printf 'Smtp__Password=%s\n' "$P" > /etc/voltio-form/env && unset P
chown root:voltio-form /etc/voltio-form/env && chmod 640 /etc/voltio-form/env
```

The password never goes into the repo, GitHub or the web root.

### 3. systemd unit and restart permission for the runner

Copy `voltio-form.service` to `/etc/systemd/system/`, then:

```bash
systemctl daemon-reload && systemctl enable voltio-form

apt install -y sudo    # not in the Debian 13 LXC template
echo 'runner ALL=(root) NOPASSWD: /usr/bin/systemctl restart voltio-form' > /etc/sudoers.d/runner-voltio-form
chmod 440 /etc/sudoers.d/runner-voltio-form && visudo -cf /etc/sudoers.d/runner-voltio-form
```

It won't start until the first workflow run has put the app in `/opt/voltio-form`.

### 4. Run the workflow, then test from the Mac

**Actions → Build & Deploy (Proxmox) → Run workflow.**

```bash
H=http://192.168.68.22
curl -s -o /dev/null -w "home:      %{http_code}\n" $H/                 # 200
curl -s -o /dev/null -w "unknown:   %{http_code}\n" $H/does-not-exist   # 200 (same as IIS)
curl -s -o /dev/null -w "form GET:  %{http_code}\n" $H/send.ashx        # 302
curl -s -H 'Accept: application/json' $H/send.ashx -d firstName=a; echo  # {"ok":false,"error":"validation"}
```

Then send one real message through the form on `http://192.168.68.22/kontakt`
and check it arrives in `info@voltioel.se`, with Reply-To set to the address you
entered.

Errors go to the journal: `journalctl -u voltio-form -n 50`.
