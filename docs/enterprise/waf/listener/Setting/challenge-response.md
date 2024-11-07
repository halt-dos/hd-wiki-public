---
sidebar_position: 5
---
# Challenge
Configure Javascript challenge settings

---

### Overview 
Haltdos provides you the ability to send Javascript challenge at client side by either throwing a Captcha Challenge or a Crypto
Challenge.
![Challenge](/img/waf/v8/docs/WAFchallengeResponse.png)

# How to Use :
1. Go to **WAF** > **Listeners** > **Advance Settings** > **Challenge**
2. Perform changes to default configuration. 
3. Click **Save Changes**
    

### Description 

##### **Captcha Failed Threshold**

Specify the captcha failed threshold count i.e maximum attempts given to client for completing the captcha challenge

```
    Accepted values: Integer

    Default: 3 
```


##### **Captcha Unanswered Threshold**

Specify the captcha unanswered threshold i.e maximum attempts given to client for refresing the captcha challenge

```
    Accepted values: Integer

    Default: 3 
```


##### **Crypto Failed Threshold**

Specify the captcha failed threshold count i.e maximum attempts given to client for completing the crypto challenge

```
    Accepted values: Integer

    Default: 3 
```


##### **Crypto Unanswered Threshold**

Specify the captcha unanswered threshold i.e maximum attempts given to client for refresing the crypto challenge

```
    Accepted values: Integer

    Default: 3 
```


##### **Crypto Challenge difficulty**

Specify the Crypto challenge difficulty i.e the level of crypto challange that will be sent to the client.The range is 1 - 9.

```
    Accepted values: Integer

    Default: 1
```



