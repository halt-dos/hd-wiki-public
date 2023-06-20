---
sidebar_position: 2
sidebar_label: Installation
---

# Haltdos PE WAF Setup

### Step 1: Installation

Download and install Haltdos Professional WAF edition using the installation script

```
curl -s -k -o setup.sh https://binary.haltdos.com/professional/waf/setup.sh
```

```
chmod +x setup.sh
```

```
sudo ./setup
```

The script will automatically download and prepare the system to run Haltdos Professional WAF.

### Step 2: Setup Verification

After successful installation, you can verify the services by running the commands below:

```
sudo service controller status
```

![haltdos](/img/pro-waf/docs/controller.png)


```
$ sudo service offloader status
```

![haltdos](/img/pro-waf/docs/offloader.png)


### Step 3: Account Registration

After completing the setup verification step, you will be able to access the Haltdos Professional GUI at https://IP:9000.

After navigating to the IP, the below page will be displayed, where the user needs to enter their Email ID and click on the **Next** button.

![step 1](/img/pro-waf/docs/step1.png)

After entering their email ID and clicking on the **Next** button, an OTP (One-Time Password) will be sent to user email address. User need to enter the six-digit code they received and click on the **Next** button to proceed.

![step 2](/img/pro-waf/docs/step2.png)

Once the OTP verification process is complete, the below page will be displayed, where the user is required to enter their details such as full name, organization, etc., and click on the **Next** button.

:::note Note 
**Haltdos WAF PE** can be configured in multiple instances.
If the user is configuring another instance, they will be redirected to the Login Setup page, instead of the User Details Page, since their account already exists.
:::

![step 3](/img/pro-waf/docs/step3.png)

After the user has entered their details, the payment page below will be displayed. On this page, the user needs to enter their card details and click on the **Save Card** button.

![payment page](/img/pro-waf/docs/payment.png)

Once the payment procedure is completed, the user will be prompted to enter their login details, which will enable them to access their account.

![step 4](/img/pro-waf/docs/step4.png)

You have successfully subscribed to **Haltdos Professional WAF**.

### Step 4: Accesing Haltdos Professional GUI

Login to the Haltdos Professional GUI using the credentials provided during step 4 of the registration process.

![login](/img/pro-waf/docs/login.png)

If the entered login credentials are correct, the overview page below will be visible to you.

![overview](/img/pro-waf/docs/overview.png)