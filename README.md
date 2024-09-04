# Block Tabs - A Security-Focused Browser Extension

Block Tabs [AMO Signed] is a lightweight browser extension designed to enhance security by controlling the browsing environment. It restricts the opening of multiple tabs, disables right-click, and prevents access to Developer Tools (Inspect) on webpages containing password fields. This extension is ideal for environments where data security is critical, such as corporate intranets, financial services, or any situation requiring strict browsing policies.

## Features:

- **Tab Limitation:** Prevents users from opening more than one tab at a time, ensuring focused browsing and reducing the risk of distractions or unintended data leaks. A beep sound notifies the user when a new tab is blocked.
  
- **Right-Click Restriction:** Disables the right-click context menu on webpages containing password fields, preventing unauthorized actions such as copying or inspecting sensitive information.

- **Developer Tools Prevention:** Blocks access to Developer Tools (Inspect) when a password field is detected on the page, safeguarding against attempts to view or manipulate source code or hidden fields.

## How It Works: 
The extension operates through background and content scripts:
- **Background Script:** Monitors tab creation and closes any additional tabs beyond the first one, triggering an audible alert.
- **Content Script:** Detects password fields on a webpage and, if present, disables right-click and the ability to open Developer Tools.

## Use Cases:

- **Corporate Security:** Ideal for companies looking to enforce strict browsing policies on internal systems.
- **Public Access Terminals:** Ensures that users cannot open multiple tabs or inspect sensitive information on shared computers.
- **Financial Services:** Prevents unauthorized access to sensitive data by restricting common browser functionalities.

## Installation:
Official Mozilla Add-On Link: <a>https://shorturl.at/ghrF4</a>
