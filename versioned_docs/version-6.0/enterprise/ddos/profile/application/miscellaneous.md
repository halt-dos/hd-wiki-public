---
sidebar_position: 3
---

# Miscellaneous

It helps in stopping different kinds of SMTP flood attack.

---

![miscellaneous_settimgs](\img\ddos\v6\docs\ddos17.png)

### **How to Go:**

1. **Stack > Resource > DDoS > Profile > Application > Miscellaneous Settings**

2. Configure the settings 

3. Click on Save Changes.

| Parameter                               | Accepted Values  | Default |
|-----------------------------------------|------------------|---------|
| Allow Inbound NTP Monlist               | Boolen           | 0       |
| Allow Outbound NTP Monlist              | Boolen           | 0       |
| Enter failed FTP login attempts per IP  | Integer          | 0       |
| Enter failed SMTP login attempts per IP | Integer          | 0       |

### **Description:**

##### **Allow Inbound NTP Monlist**

This option allow accepting NTP monito list from Internet.

##### **Allow Outbound NTP Monlist**

This option allow accepting NTP monito list to be sent to Internet.

##### **Enter failed FTP login attempts per IP**

This mitigation limits failed FTP login attempt allowed by an IP

##### **Enter failed SMTP login attempts per IP**

This mitigation limits failed SMTP login attempt allowed by an IP