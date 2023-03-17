---
sidebar_position: 1
---

# Access Control

Permissions given to different users

---

Haltdos Cloud provides multi-level RBAC access control over Stack. This allows owners to assign users with respective permissions on Haltdos Cloud.

![control](/img/platform/v6/docs/access_control1.png)


**Different Membership Levels**

Haltdos supports access control levels as follows:

1. **STACK**: Member of a stack can perform operations on and below stack level as per user permissions on the stack.
2. **APP**: Member of an app can perform operations on and below app level as per user permission.
3. **LISTENER**: Member of a listener can perform operations on listener level as per user permission.

**Different User Permissions**

Haltdos supports three types of user permissions as follows:

1. OWNER: Has the privilege to perform all the operations (add, edit and delete) on the stack, app, listener, and members in the stack, app, listener i.e. Owner, Member, Observer.
2. MEMBER: Has the privilege to perform operations (add, edit and delete) on the stack, app, listener, and delete self membership from the stack/app/listener wherever membership is given.
3. OBSERVER: Has the privilege to only view the stack, app, listener and delete self membership from the stack/app/listener wherever membership is given.

You can send an invitation to any user irrespective of whether he/she is already a registered user on Haltdos or not.

**How to add members to your stack?**

When the admin creates a stack, he can add a user as an Owner. Then the owner will have the privilege to add, edit, delete members in the specific stack, app, listener  as owner, member, and observer respectively.
The owner can add/edit/delete one or more owners within the stack with the same privilege.


![addmember](/img/platform/v6/docs/access_control2.png)

**To add a member to a Stack, App, Zone**

1. Login to your Haltdos account.
2. Click on the stack/app/zone name in which you want to add members.
3. Click on Members in the sidebar.
4. Click on the Invite Members button.
5. Enter the email address of the member you want to add in the Email input field.
6. Click on the Access drop-down to select permission for the user.
7. Click on the Save Changes button.

Members have the right to accept/reject the invitation and remove membership if the invitation is already accepted.

:::info
**Operations allowed are specific on membership levels for different user permissions.**

If owner delete itself from the stack, and stack exists without OWNER authority. Please contact support to grant user access as OWNER. 
:::