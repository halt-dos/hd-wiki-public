# Security Policy
 
## What is this?
 
**Security Policy** is a gate that every device must pass through before it is allowed to connect to the VPN network. It checks the device's security posture — operating system status and antivirus status — and only allows connection if the device meets the configured requirements.
 
This ensures that even if a user has valid credentials, they cannot connect from a compromised, outdated, or unprotected device.
 
---
 
## Where to find it
 
**Management Console → Stack → VPN → Networks → [Network Name] → Security Policy**
 
---
 
## How it works
 
When a user tries to connect:
 
```
1. User opens Haltdos RAG Client and clicks Connect
2. RAG Client collects device information:
   - OS name, version, kernel version
   - Whether OS is up to date
   - Number of pending updates
   - Antivirus name, status, last scan date
3. This data is sent to the VPN server
4. Server checks it against Security Policy
5. If device PASSES all checks → tunnel is created, user connects
6. If device FAILS any check → connection is blocked, user sees an error
```
 
---
 
## Operating System Security Check
 
### Enable OS Security Check (master toggle)
 
Turns the entire OS check section on or off. When OFF, none of the OS fields below are evaluated — all devices are allowed regardless of OS status.
 
```
Default:  OFF
```
 
---
 
### OS Name
 
Only allow devices running specific operating systems. If the device's OS does not match, it is blocked.
 
```
Default:   Blank (no restriction)
Example:   Ubuntu
           macOS
           Windows
           android
Type:      Text — must match exactly what the RAG Client reports
           (check the Peers page OS_NAME field for exact values)
```
 
**Example use case:** An organisation wants to ensure only company-issued Ubuntu machines can connect. Set OS Name to `Ubuntu`. Android phones and Windows laptops will be blocked.
 
---
 
### Kernel Version
 
The minimum kernel/OS version a device must have. Devices with an older version are blocked.
 
```
Default:   Blank (no restriction)
Example:   Linux 6.17.0-29-generic
Type:      Text — must match the format shown in Peers page KERNEL_VERSION
```
 
---
 
### OS Up To Date
 
When enabled, only devices where the OS is fully updated are allowed to connect.
 
```
Default:  OFF
```
 
**What "up to date" means:** The RAG Client checks whether the OS has all available updates installed and reports `IS_UP_TO_DATE: true` or `false`. If this policy is ON and `IS_UP_TO_DATE` is false, the device is blocked.
 
---
 
### Pending Updates
 
The maximum number of pending OS updates a device is allowed to have. Devices with more pending updates than this number are blocked.
 
```
Default:  0
Range:    0 and above
Example:  0  = device must have zero pending updates (strictest)
          5  = up to 5 pending updates allowed
          99 = effectively no restriction on updates
```
 
**Example:** Your organisation allows up to 3 pending updates (patch window). Set this to `3`.
 
---
 
## Antivirus Security Check
 
### Enable Antivirus Security Check (master toggle)
 
Turns the antivirus check section on or off.
 
```
Default:  OFF
```
 
---
 
### Antivirus Required
 
When enabled, devices with no antivirus software detected are blocked from connecting.
 
```
Default:  OFF
```
 
---
 
### Enabled
 
When enabled, only devices where the antivirus protection is actively running (not just installed but disabled) are allowed.
 
```
Default:  OFF
```
 
---
 
### Updated
 
When enabled, only devices with up-to-date antivirus definitions are allowed. A device with outdated virus definitions is considered a risk.
 
```
Default:  OFF
```
 
---
 
### Last Scanned
 
The maximum number of days since the device's last antivirus scan. Devices that have not been scanned within this window are blocked.
 
```
Default:  0
Range:    0 and above (days)
Example:  7   = device must have been scanned in the last 7 days
          30  = scan within the last 30 days
          0   = no scan restriction
```
 
---
 
## Practical examples
 
**Example 1 — Strict corporate policy:**
```
OS Security Check:     ON
OS Name:               Ubuntu
OS Up To Date:         ON
Pending Updates:       0
Antivirus Check:       ON
Antivirus Required:    ON
Enabled:               ON
Updated:               ON
Last Scanned:          7
```
Result: Only fully-updated Ubuntu machines with active, updated antivirus scanned within 7 days can connect.
 
**Example 2 — Relaxed policy (development team):**
```
OS Security Check:     ON
Pending Updates:       10
Antivirus Check:       OFF
```
Result: Any OS with fewer than 10 pending updates can connect. No antivirus requirement.
 
**Example 3 — No restrictions:**
```
OS Security Check:     OFF
Antivirus Check:       OFF
```
Result: Any device with valid credentials can connect.
 
---
 
## What users see when blocked
 
The Haltdos RAG Client displays an error message when a device fails the security policy check. The error indicates that the device does not meet the security requirements but may not specify exactly which check failed. Users should:
1. Ensure their OS is fully updated
2. Ensure antivirus is installed, running, and updated
3. Run a manual antivirus scan
4. Try connecting again
Support teams can check the Peers page and backend logs to identify the exact reason for failure.
 
 
 
---