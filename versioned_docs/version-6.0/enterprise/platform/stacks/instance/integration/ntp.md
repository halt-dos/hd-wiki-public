---
sidebar_position: 2
---

# NTP

---

Network Time Protocol (NTP) is a protocol that provides a very reliable way of transmitting and receiving an accurate time source over TCP/IP-based networks.

![ntp](/img/platform/v6/docs/ntp1.png)

### How to Use:

1. Go to **Stack > Instances > (Select Instance) > Network > NTP**
2. Configure your settings.
3. Click on save changes.

| SETTINGS     | ACCEPTED VALUES | DEFAULT |
|--------------|-----------------|---------|
| NTP Servers  | String          | Blank   |
| NTP Auth     | Drop Down       | None    |
| NTP Key      | Integer         | 1       |
| NTP Hash     | Drop Down       | MD5     |
| NTP Password | String          | Blank   |

### Description:

**NTP Server**

User can specify the NTP server details.

**NTP Auth**

Users can specify the NTP authentication type.

**NTP Key**

Users can specify the NTP Key number that is used for NTP authentication

**NTP Hash**

User can specify the NTP hash used for authentication.

**NTP Password**

Users can spcify the password