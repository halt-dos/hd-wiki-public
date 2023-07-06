---
sidebar_position: 2
sidebar_label: Installation
hide-version-badge: true
---

import ProductBadge from '@site/src/components/ProductBadge';

# Haltdos PE WAF Setup

<ProductBadge />
<br />
<br />

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
sudo service offloader status
```

:::note Note 
**Haltdos Professional WAF Service** at start will be at loaded state. It will be in active and running state, once the whole registration of the instance is done
:::

![haltdos](/img/pro-waf/docs/offloader_status.png)


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

After the user has entered their details, user will be redirected to a payment gateway. A minimal amount transaction will take place to save the card, which will be refunded back by the card provider/bank. Card must be saved because Haltdos Professional WAF follows a usage based pricing. User will be charged at the end of the monthly billing period, based on the no. of requests that was processed by WAF in that billing period. User has to enter their credit card details and click on the **Save Card** button of the payment gateway.

:::note Note
Kindly only save Credit Cards. Any other form of cards can be saved, but these won't be processed and will lead to failure of registration of Professional WAF.
:::

![payment page](/img/pro-waf/docs/payment.png)

Once the payment procedure is completed, the user will be prompted to enter their login details, which will enable them to access their account.

![step 4](/img/pro-waf/docs/step4.png)

You have successfully subscribed to **Haltdos Professional Edition** and have registered your instance. You can verify your registration by checking if the Haltdos Professional WAF service is running.

```
sudo service offloader status
```

![haltdos](/img/pro-waf/docs/offloader.png)

:::info CAUTION
If the service is still shown as loaded and inactive, or if you face any other kind of issue, please contact [**Haltdos Support**](mailto:support@haltdos.com)
:::

### Step 4: Accesing Haltdos Professional GUI

Login to the **GUI Console**, at **https://<SERVER_IP>:9000** using the credentials provided during the step 4 of the registration process.

![login](/img/pro-waf/docs/login.png)

If provided login credentials are correct, you will be redirected to the Overview page, as visible below. Now you can start exploring **Haltdos Professional WAF**.  

![overview](/img/pro-waf/docs/overview.png)

:::note Note
Professional WAF Billing is a Monthly Subscription, whose billing period will start on the day of registering your first instance.
:::