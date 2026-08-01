# Peers
 
## What is this?
 
The **Peers** page shows every device that has connected (or is currently connected) to a VPN network. For each device, it shows:
- The VPN IP address assigned to it
- Technical details about the device (OS, version, architecture)
- Security posture information (antivirus status, pending updates)
Administrators use this page to monitor what devices are on the VPN, verify device compliance, and remove devices if needed.
 
---
 
## Where to find it
 
**Management Console → Stack → VPN → Networks → [Network Name] → Peers**
 
---
 
## What you see on this page
 
Each row is one device (peer). The columns are:
 
| Column | What it means |
|---|---|
| **Peer Name** | The device's hostname as reported by the Haltdos RAG Client |
| **User** | The VPN username that connected this device |
| **IP Address** | The VPN IP assigned to this device from the lease pool |
| **Peer Configuration** | Device details collected by the RAG Client |
| **Device Configuration** | Antivirus and security posture information |
| **Action** | Delete this peer |
 
---
 
## Peer Configuration details
 
| Field | What it means |
|---|---|
| CLIENT_VERSION | Version of the Haltdos RAG Client installed on the device |
| OS_NAME | Operating system (e.g., Ubuntu, macOS, Windows, android) |
| OS_VERSION | OS version number |
| KERNEL_VERSION | Kernel/OS build version |
| IS_UP_TO_DATE | Whether the OS has all updates installed (true/false) |
| PENDING_UPDATES | Number of OS updates waiting to be installed |
| ARCHITECTURE | CPU architecture (e.g., x86_64, arm64-v8a) |
| HOSTNAME | Device hostname |
| DEVICEID | Unique device identifier (mobile devices) |
| DEVICEMODEL | Device model name (mobile devices) |
 
---
 
## Device Configuration details
 
| Field | What it means |
|---|---|
| ANTIVIRUS_NAME | Name of antivirus software detected (or "None Detected") |
| IS_ENABLED | Whether antivirus protection is currently active |
| IS_UPDATED | Whether antivirus definitions are up to date |
| LAST_SCANNED | Number of days since last antivirus scan (0 = never or scan data unavailable) |
| VERSION | Antivirus software version |
| LAST_UPDATED | When antivirus definitions were last updated |
 
---
 
## Deleting a peer
 
Clicking the delete icon removes the peer record. The next time that device tries to connect, it must re-authenticate and will be registered as a new peer.
 
**When to delete a peer:**
- An employee's device was lost or stolen
- A device is no longer in use
- You want to force a device to re-register with fresh security posture data
- Troubleshooting a connection issue
> ⚠️ Deleting a peer does not block the user from reconnecting. To prevent a user from connecting, disable their account in **VPN Users**.
 
---
 
## Relationship with Security Policy
 
The data shown on this page is exactly what the **Security Policy** evaluates. If you want to understand why a device was blocked, compare its peer data against the active Security Policy settings.
 
For example, if Security Policy requires `PENDING_UPDATES = 0` but a peer shows `PENDING_UPDATES: 3`, that device will be blocked until it installs its updates.
 
 
 
---