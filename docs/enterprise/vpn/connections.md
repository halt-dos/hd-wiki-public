---
sidebar_position: 6
---

# Connections

---

VPN group feature is used to add a VPN group. A user can be a part of one VPN group. Each VPN Group has its unique group ID.  

![vpnusers](/img/vpn/v8/docs/connections.png)  

### How to Use:

1. First go to **Stack** > **SSL VPN** > **Connections**.
2. Click on **Add User** and fill all the information.
3. After adding the user configuration click on **Save Changes**

### Description:

#### **Connection Name**
Name of the connection 

    Accepted Value: String

    Default: Blank
```


#### **Protocol Type**

Select TYpe of Protocol

    Accepted Value: SSH / VNC / RDP / TELNET / KUBERNETES

    Default: SSH
```


#### **Host Name**

Enter the host name

    Accepted Value: Password / Radius / (Active Directory / LDAP) / TACACS  

    Default: Blank
```


#### **PORT**

Enter Port

    Accepted Value: Integer

    Default: 22
```


#### **USERNAME**

This option allows user to enter username
  
    Accepted Value: String

    Default: Blank
```


#### **PASSWORD**

This option allows user to enter password
  
    Accepted Value: String

    Default: Blank
```


#### **ENABLE HOST KEY VERIFICATION**

This option allows user to Enable / Disable the host key verification

    Accepted Value: Enable / Disable

    Default: Disable
```


#### **AUTHENTICATION TYPE**

Select the authentication type

    Accepted Value: Password / Private Key / Encrypted Private Key

    Default: Password
```

