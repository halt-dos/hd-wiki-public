## Installation Steps

In this step, you'll pull Haltdos packages from the official software repository. SSH to your server and run the commands below


```
$ sudo apt-get update
```

```
sudo apt-get install -y curl
```

### Step 1: Installing 

Download and install the latest Haltdos Professional WAF edition installtion script

```
$ curl -s -k -o setup.sh https://binary.haltdos.com/professional/waf/setup.sh
```

```
$ sudo chmod +x setup.sh
```

```
$ sudo bash setup.sh
```

The script will automatically download and prepare the system to run Haltdos Professional WAF.

### Step 2: Verification

After successfull installation, you can verify the services by running the commands below:

```
$ sudo service controller status
```

![haltdos](/img/pro-waf/docs/v7/controllerstatus.png)


```
$ sudo service offloader status
```

![haltdos](/img/pro-waf/docs/v7/offloaderprof.png)

<br />
You can access Haltdos Professional GUI from https://IP:9000. 
<br /><br />

![haltdos](/img/pro-waf/docs/v7/prof1.png)  


### Step 3: License Registration

Next, after verification, to start using our Professional WAF Solution, you will require a License to enable the WAF Solution.

Fill in the details to request for Haltdos Professional WAF license. License verification code will be sent via mail. Check your spam / junk if you cannot find the mail in inbox.

<br />
Post OTP Verification, your Professional WAF license will be activated.


![signup](/img/pro-waf/docs/v7/prof2.png)

![signup](/img/pro-waf/docs/v7/prof3.png)

You have successfully subscribed to Haltdos Professional WAF.

### Step 4: Accesing Haltdos Professional UI

Login in to Haltdos Professional WAF UI with the credentials provided during the signup.

![login](/img/ce-waf/docs/setup/login.png)

![overview](/img/ce-waf/docs/setup/overview.jpeg)