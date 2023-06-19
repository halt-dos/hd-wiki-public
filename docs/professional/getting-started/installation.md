---
sidebar_position: 1
sidebar_label: Installation
---

# Haltdos PE WAF Setup

### Step 1: Installation

Download and install Haltdos Professional WAF edition using the installation script

```
$ curl -s -k -o setup.sh https://binary.haltdos.com/professional/waf/setup.sh
```

```
$ chmod +x setup.sh
```

```
$ sudo ./setup
```

The script will automatically download and prepare the system to run Haltdos Professional WAF.

### Step 2: Setup Verification

After successful installation, you can verify the services by running the commands below:

```
$ sudo service controller status
```

![haltdos](/img/ce-waf/docs/status/controller.png)


```
$ sudo service offloader status
```

![haltdos](/img/ce-waf/docs/status/offloader.png)

<br />
You can access Haltdos Professional GUI from https://IP:9000. 
<br /><br />

![haltdos](/img/ce-waf/docs/setup/setup.png)  


### Step 3: License Registration

Next, after verification, to start using our Professional WAF Solution, you will require a License to enable the WAF Solution.

Fill in the details to request for Haltdos Professional WAF license. License verification code will be sent via mail. Check your spam / junk if you cannot find the mail in inbox.

Post OTP Verification, your Professional WAF license will be activated.  

![signup](/img/ce-waf/docs/setup/otp.png)

You have successfully subscribed to Haltdos Professional WAF.

### Step 4: Accesing Haltdos Professional GUI

Login in to Haltdos Professional GUI with the credentials provided during the sign-up.

![login](/img/ce-waf/docs/setup/login.png)

![overview](/img/ce-waf/docs/setup/overview.jpeg)
