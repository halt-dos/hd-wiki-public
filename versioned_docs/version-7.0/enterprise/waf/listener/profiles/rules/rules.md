---
sidebar_position: 6
---

# Rules

### Configure custom rules for your website

Haltdos WAF comes with a pre-configured, platform-managed rule set that offers protection from many types of attacks. These attacks include cross-site scripting, SQL injection, and others. With these managed rules, you can quickly get started and protect your web application or APIs against common threats like the OWASP Top 10 security risks, threats specific to Content Management Systems (CMS) like WordPress or Joomla, or even emerging Common Vulnerabilities and Exposures (CVE).
However, there are instances where you might want to write your own rules to augment platform-managed rule set rules. With custom rules, you can create your own rules, which are evaluated for each request that passes through WAF. These rules hold a higher priority than the rest of the rules in the managed rule sets. The custom rules contain a rule name, a rule priority, and an array of matching conditions. If these conditions are met, the specified action will be taken on the request.

Custom rules support using compounding logic to make more advanced rules that address your security needs. For example, "Condition 1 and Condition 2 or Condition 3" means that if Condition 1 and Condition 2 are met, or if Condition 3 is met, WAF should take the action that's specified in the custom rule. Different matching conditions within the same rule are always compounded by using 'and'. For example, a rule that uses 'and' might specify to block traffic from a certain IP address, and only if a certain browser is being used.

### How to Use:
1. Log onto the Haltdos Enterprise WAF portal.
2. Follow the links: **WAF** > **Listener** > **Profiles** > **Rules**.
3. Click on **Save changes**.

Unlike other WAFs, Haltdos WAF has multiple types of Rules designed to target specific use cases.

1. [**Error Rules**](/v7/enterprise/waf/listener/profiles/rules/error_rules)
2. [**Form Rules**](/v7/enterprise/waf/listener/profiles/rules/form_rules)
3. [**Firewall Rules**](/v7/enterprise/waf/listener/profiles/rules/firewall_rules)
4. [**Rate Limit Rules**](/v7/enterprise/waf/listener/profiles/rules/ratelimit_rules)
5. [**Whitelist Rules**](/v7/enterprise/waf/listener/profiles/rules/whitelist_rules)
6. [**Response Rules**](/v7/enterprise/waf/listener/profiles/rules/response_rules)
7. [**Behavior Rules**](/v7/enterprise/waf/listener/profiles/rules/behavior_rules)
8. [**Tamper Rules**](/v7/enterprise/waf/listener/profiles/rules/tamper_rules)
9. [**Correlation Rules**](/v7/enterprise/waf/listener/profiles/rules/correlation_rules)
10. [**Deception Rules**](/v7/enterprise/waf/listener/profiles/rules/deception_rules)
11. [**Script Rules**](/v7/enterprise/waf/listener/profiles/rules/script_rules)
12. [**Log Rules**](/v7/enterprise/waf/listener/profiles/rules/log_rules)
