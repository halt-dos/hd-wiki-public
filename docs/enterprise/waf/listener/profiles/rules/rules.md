---
sidebar_position: 6
---

# Rules

### Configure custom rules for your website

Haltdos WAF comes with a pre-configured, platform-managed rule set that offers protection from many different types of attacks. These attacks include cross-site scripting, SQL injection, and others. With these managed rules, you can quickly get started and protect your web application or APIs against common threats like the OWASP Top 10 security risks, threats specific to Content Management Systems (CMS) like WordPress or Joomla, or even emerging Common Vulnerabilities and Exposures (CVE).
However, there are instances where you might want to write your own rules to augment platform-managed ruleset rules. With custom rules, you can create your own rules, which are evaluated for each request that passes through WAF. These rules hold a higher priority than the rest of the rules in the managed rule sets. The custom rules contain a rule name, a rule priority, and an array of matching conditions. If these conditions are met, the specified action will be taken on the request.

Custom rules support using compounding logic to make more advanced rules that address your security needs. For example, "Condition 1 and Condition 2 or Condition 3" means that if Condition 1 and Condition 2 are met, or if Condition 3 is met, WAF should take the action that's specified in the custom rule. Different matching conditions within the same rule are always compounded by using 'and'. For example, a rule that uses 'and' might specify to block traffic from a certain IP address, and only if a certain browser is being used.

Unlike other WAFs, Haltdos WAF has multiple types of Rules designed to target specific use cases.

1. **Error Rules**
2. **Form Rules**
3. **Firewall Rules**
4. **Rate Limit Rules**
5. **Whitelist Rules**
6. **Response Rules**
7. **Behavior Rules**
8. **Tamper Rules**
9. **Correlation Rules**
10. **Deception Rules**
11. **Script Rules**
12. **Log Rules**
