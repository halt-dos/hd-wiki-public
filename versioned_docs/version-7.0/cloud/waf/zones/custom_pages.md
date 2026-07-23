---
sidebar_position: 2
title: "Custom Pages | Haltdos Cloud WAF"
description: "Create and customize error pages, block pages, and challenge pages for a consistent user experience."
---
# Custom Pages

---

## **Overview**

Custom pages are user-customized error pages that can be used with Error Rules to show the end-user this custom Html page whenever a user receives responses with HTTP status codes such as 400, 404, 500, etc.

### **How to Use:**

1. Go to **WAF** > **Pages**

2. Click on **Add Page** button.

3. Configure your page. 

4. Click **Save Changes**. 

| SETTINGS         | ACCEPTED VALUES | DEFAULT |
|------------------|-----------------|---------|
| Html Page Name   | String          | Blank   |
| Add Html Content | String          | Blank   |

#### **Description**

**Html Page Name**: Enter the name for HTML Page. The name field takes alphanumeric input.

**Add Html Content**: Enter the HTML content to be displayed whenever a user receives an error in response.