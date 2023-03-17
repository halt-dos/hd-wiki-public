---
sidebar_position: 1
---
# Security Profile

Create different security profiles for different sub-sections of your website

---

## Overview

When a Listener is created, a new default profile is created which is visible on the Security Profiles screen. Users can further go and create new profiles with different configurations for a particular URI in that Listener.

### How to Use:

1. Go to **WAF > Zones > Listeners > Profiles**

2. Click **Add Profile**.

3. Configure your settings.

4. Click **Save Changes**. 

| PARAMETERS       | ACCEPTED VALUES | DEFAULT     |
|------------------|-----------------|-------------|
| Profile Name     | String          | Blank       |
| Profile Priority | Integer         | 0           |
| Countries        | String          | Blank       |
| IP Prefixes      | String          | Blank       |
| Ports            | Integer         | Blank       |
| URI Pattern      | URI             | Empty field |
| Reference        | Dropdown        | None        |

### Description

**Profile Name** 

This field specifies the name of the security profile. By default, a profile with 'Default' name is already created upon adding a listener.

**Profile Priority**

This field specifies the priority of the profile for deciding which profile will be used first to match the request and accordingly take action.

**Countries**

This field specifies the countries for the profile. Requests coming from the specified country will be matched with this profile.

**IP Prefixes**

This field specifies the IP Prefixes for the profile. Requests coming from specified IP Prefixes will be matched with this profile.

**Ports**

This field specifies the ports for the profile. Requests coming from specified ports will be matched with this profile.

**URI Pattern**

This field specifies the URI pattern for the profile. Request send to specified URI pattern will be matched with this profile.

**References**

This dropdown is used to clone an existing profile with the same configuration to a new profile.

Note: User can clone existing profile with the same configuration to a new profile on the new user-specified URI.

Following configurations are present under Security Profile
