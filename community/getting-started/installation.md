---
sidebar_position: 1
sidebar_label: Installation
---

# Installation Steps

Before we start, kindly update your system and install curl, if not installed.

For **Debian-based distributions**, execute below commands:

```
sudo apt-get update
```
```
sudo apt-get install -y curl
```
For **Red Hat-based Linux distributions**, execute below commands:

```
sudo dnf update
```
```
sudo dnf install -y curl
```

### Step 1: Installing 

Download and install the latest Haltdos Community WAF edition installtion script

```
curl -s -k -o setup.sh https://binary.haltdos.com/community/waf/setup.sh
```

```
chmod +x setup.sh
```

```
sudo ./setup.sh
```

The script will automatically download and prepare the system to run Haltdos Community WAF.

### Step 2: Verification

After successfull installation, you can verify the services by running the commands below:

```
sudo service controller status
```

![haltdos](/img/ce-waf/docs/status/controller.png)


```
sudo service offloader status
```

![haltdos](/img/ce-waf/docs/status/offloader.png)

:::note Note 
- **Haltdos Community WAF Service** at start will be at loaded state. It will be in active and running state, once the whole registration of the instance is done.

- Haltdos Community WAF listens on ports 80 and 443 and the Community GUI opens at port 9000 by default. Instead of disabling the firewall, users should allow these specific ports to enable proper functionality. Use the following command:
```
sudo firewall-cmd --permanent --add-port=80/tcp
  
sudo firewall-cmd --permanent --add-port=443/tcp
  
sudo firewall-cmd --permanent --add-port=9000/tcp
```
- After allowing the specified ports, reload the firewall using the following command:
```
sudo firewall-cmd --reload
```
:::

You can access **Haltdos Community GUI** from **https://SERVER_IP_ADDRESS:9000**

![haltdos](/img/ce-waf/docs/setup/setup.png)  

### Step 3: License Registration

Next, after verification, to start using our Community WAF Solution, you will require a License to enable the WAF Solution.

Fill in the details to request for Haltdos Community WAF license. License verification code will be sent via mail. Check your spam / junk if you cannot find the mail in inbox.

<br />
Post OTP Verification, your Haltdos Community WAF license will be activated.


![signup](/img/ce-waf/docs/setup/otp.png)

You have successfully subscribed to Haltdos Community WAF.

:::info CAUTION
If the Community WAF service is still shown as loaded and inactive, or if you face any other kind of issue, please contact [**Haltdos Support**](mailto:support@haltdos.com)
:::

### Step 4: Accesing Haltdos Community GUI

Login in to Haltdos Community GUI with the credentials provided during the signup.

![login](/img/ce-waf/docs/setup/login.png)

![overview](/img/ce-waf/docs/setup/overview.jpeg)
