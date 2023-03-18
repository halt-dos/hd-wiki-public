---
sidebar_position: 3
---

# Miscellaneous Settings

It helps in stopping different kinds of SMTP flood attack.

---

![miscellaneous_settimgs](\img\ddos\v7\docs\mis.png)

### How to Use

1. Go to **Apps > DDoS > Profile > Application Layer**

2. Scroll to **Miscellaneous Settings**

3. Configure the settings.

4. Click on **Save Changes**.

| Parameter                               | Accepted Values  | Default |
|-----------------------------------------|------------------|---------|
| Allow Inbound NTP Monlist               | Boolen           | 0       |
| Allow Outbound NTP Monlist              | Boolen           | 0       |
| Enter failed FTP login attempts per IP  | Integer          | 0       |
| Enter failed SMTP login attempts per IP | Integer          | 0       |

### Description

#### Allow Inbound NTP Monlist

This option allow accepting NTP monito list from Internet.

#### Allow Outbound NTP Monlist

This option allow accepting NTP monito list to be sent to Internet.

#### Enter failed FTP login attempts per IP

This mitigation limits failed FTP login attempt allowed by an IP

##### Enter failed SMTP login attempts per IP

This mitigation limits failed SMTP login attempt allowed by an IP