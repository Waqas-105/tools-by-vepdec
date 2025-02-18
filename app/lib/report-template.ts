// export const reportTemplates = {
//   clickjacking: (website: string, vulnerable: string, user: string, role: string) => `Hello Team,

// My name is ${user}, and I am a ${role} at VepDec. Our security team has identified some vulnerabilities on your ${website}, and we would like to report them so that you can take the necessary actions to resolve these issues. We kindly request that you keep us informed once the fixes have been implemented.

// Vulnerability: Clickjacking | UI Redressing

// Introduction:
// A vulnerability called clickjacking enables attackers to deceive users into clicking a link or button that executes an unwanted activity. We will go over clickjacking's definition, mechanism, and preventative measures in this report.

// What is Clickjacking?
// Clickjacking, sometimes known as a UI (User Interface) redressing attack, is a sort of attack that takes advantage of users' trust in a website's or application's user interface. The way the attack operates is by concealing a harmful link or button behind a seemingly trustworthy one. The user unknowingly takes a step they did not plan to take when they click on the seemingly trustworthy link or button, such as downloading malware, disclosing private information, or granting the attacker access to their device.

// How Does Clickjacking Work?
// The malicious link or button on a website or application is covered up with a transparent layer in clickjacking. The user won't notice they are clicking on anything other than the correct link or button because this layer is designed to be invisible to them. The malicious link or button can then be made to react to the user's click using a variety of methods, such as CSS (Cascading Style Sheets), JavaScript, or iFrames (Inline Frames).

// POC:
// I found ${website}.${vulnerable} vulnerable to a Clickjacking attack.

// Fix:
// Please implement the appropriate X-Frame-Options header or Content Security Policy to prevent clickjacking attacks.

// Please feel free to contact me to discuss this matter further. Your prompt attention to these security concerns would be greatly appreciated. Thank you for your time, and I look forward to hearing from you soon.

// Best regards,
// ${user}`,

//   "dmarc-red": (website: string, vulnerable: string, user: string, role: string) => `Hello Team,

// My name is ${user}, and I am a ${role} at VepDec. Our security team has identified some vulnerabilities on your ${website}, and we would like to report them so that you can take the necessary actions to resolve these issues. We kindly request that you keep us informed once the fixes have been implemented.

// Vulnerability: DMARC Record Missing

// Vulnerability Overview:
// DMARC is an email authentication protocol that works in conjunction with SPF and DKIM (DomainKeys Identified Mail) to prevent email spoofing and ensure the legitimacy of incoming emails. When misconfigured, DMARC leaves the domain vulnerable to spoofed emails, as it fails to enforce proper email authentication.

// I discovered that anyone can send emails from: ${website}.${vulnerable} to other users.

// DMARC record:
// No DMARC record found for ${website}

// I successfully sent a manipulated email to my own address, just for testing purposes.

// Impact and Risk Assessment:
// The misconfigured DMARC record significantly increases the likelihood of successful phishing attacks and email spoofing. Potential consequences include:
// 1. Unauthorized access to sensitive information.
// 2. Malware distribution and propagation.
// 3. Damage to the domain's reputation due to involvement in spam campaigns.
// 4. Loss of customer trust and credibility.
// 5. Financial losses resulting from fraudulent activities.

// Fix:
// Please implement a proper DMARC record for your domain to prevent email spoofing and phishing attacks.

// Please feel free to contact me to discuss this matter further. Your prompt attention to these security concerns would be greatly appreciated. Thank you for your time, and I look forward to hearing from you soon.

// Best regards,
// ${user}`,

//   "dmarc-yellow": (website: string, vulnerable: string, user: string, role: string) => `Hello Team,

// My name is ${user}, and I am a ${role} at VepDec. Our security team has identified some vulnerabilities on your ${website}, and we would like to report them so that you can take the necessary actions to resolve these issues. We kindly request that you keep us informed once the fixes have been implemented.

// Vulnerability: DMARC Quarantine/Reject Policy Not Enabled

// Vulnerability Overview:
// DMARC is an email authentication protocol that works in conjunction with SPF and DKIM (DomainKeys Identified Mail) to prevent email spoofing and ensure the legitimacy of incoming emails. When misconfigured, DMARC leaves the domain vulnerable to spoofed emails, as it fails to enforce proper email authentication.

// I discovered that anyone can send emails from: ${website}.${vulnerable} to other users.

// DMARC record:
// Here you can see that the Quarantine/Reject Policy is not enabled for ${website}.

// I successfully sent a manipulated email to my own address, just for testing purposes.

// Impact and Risk Assessment:
// The misconfigured DMARC record significantly increases the likelihood of successful phishing attacks and email spoofing. Potential consequences include:
// 1. Unauthorized access to sensitive information.
// 2. Malware distribution and propagation.
// 3. Damage to the domain's reputation due to involvement in spam campaigns.
// 4. Loss of customer trust and credibility.
// 5. Financial losses resulting from fraudulent activities.

// Fix:
// Please update your DMARC record to include a quarantine or reject policy to enhance email security.

// Please feel free to contact me to discuss this matter further. Your prompt attention to these security concerns would be greatly appreciated. Thank you for your time, and I look forward to hearing from you soon.

// Best regards,
// ${user}`,

//   tls: (website: string, vulnerable: string, user: string, role: string) => `Hello Team,

// My name is ${user}, and I am a ${role} at VepDec. Our security team has identified some vulnerabilities on your ${website}, and we would like to report them so that you can take the necessary actions to resolve these issues. We kindly request that you keep us informed once the fixes have been implemented.

// Vulnerability: Outdated TLS Version

// Overview:
// Transport Layer Security (TLS) is a crucial protocol for securing internet connections, ensuring encrypted data transmission between clients and servers. However, like any technology, TLS is susceptible to vulnerabilities. One such concern is the usage of outdated TLS versions, posing potential risks to the security of data transmissions.

// What is an Outdated TLS Version?
// TLS undergoes regular updates to address evolving security threats. Despite newer, more secure versions being available, certain websites and applications persist in using outdated TLS versions, particularly TLS 1.0 and TLS 1.1.

// Why are Outdated TLS Versions a Security Risk?
// Outdated TLS versions pose a security risk as they are susceptible to known attacks. For instance, vulnerabilities in TLS 1.0 and TLS 1.1, such as the POODLE attack, can compromise the security of the connection. Additionally, these older versions lack support for contemporary encryption techniques, making them more susceptible to breaches.

// POC:
// The website ${website}.${vulnerable} is currently using an outdated TLS version.

// How to Address Outdated TLS Versions?
// To mitigate the security risks associated with outdated TLS versions, it is recommended that websites and applications upgrade to more secure versions, such as TLS 1.2 or TLS 1.3. Furthermore, website and application owners should discontinue support for TLS 1.0 and TLS 1.1. Users should be encouraged to utilize browsers and programs that support the latest TLS versions for enhanced security.

// Conclusion:
// The use of outdated TLS versions poses a potential threat to the security of data transmitted over the internet. It is imperative for website and application owners to update to more recent TLS versions and disable support for earlier versions to mitigate these risks.

// Fix:
// Please upgrade your server to support TLS 1.2 or TLS 1.3 and disable support for older versions.

// Please feel free to contact me to discuss this matter further. Your prompt attention to these security concerns would be greatly appreciated. Thank you for your time, and I look forward to hearing from you soon.

// Best regards,
// ${user}`,

//   ticket: (website: string, vulnerable: string, user: string, role: string) => `Hello Team,

// My name is ${user}, and I am a ${role} at VepDec. Our security team has identified some vulnerabilities on your ${website}, and we would like to report them so that you can take the necessary actions to resolve these issues. We kindly request that you keep us informed once the fixes have been implemented.

// Security Vulnerabilities Identified

// During a recent security assessment of ${website}, we identified several critical vulnerabilities that may put both your systems and users at significant risk. These security gaps, if left unaddressed, could potentially lead to unauthorized access, data breaches, and other malicious activities that may compromise the integrity of your digital assets.

// Given the potential impact, we strongly recommend that your team review and address these issues as soon as possible. We would be happy to provide a detailed report of our findings and work with your security team to mitigate these risks promptly.

// Please feel free to contact me to discuss this matter further. Your prompt attention to these security concerns would be greatly appreciated. Thank you for your time, and I look forward to hearing from you soon.

// Best regards,
// ${user}`,
// }

export const reportTemplates = {
  clickjacking: (website: string, vulnerable: string, session: { username: string; role: string }) => `Hello Team,

My name is ${session.username}, and I am a ${session.role} at VepDec. Our security team has identified some vulnerabilities on your ${website}, and we would like to report them so that you can take the necessary actions to resolve these issues. We kindly request that you keep us informed once the fixes have been implemented.

Vulnerability: Clickjacking | UI Redressing

Introduction:
A vulnerability called clickjacking enables attackers to deceive users into clicking a link or button that executes an unwanted activity. We will go over clickjacking's definition, mechanism, and preventative measures in this report.

What is Clickjacking?
Clickjacking, sometimes known as a UI (User Interface) redressing attack, is a sort of attack that takes advantage of users' trust in a website's or application's user interface. The way the attack operates is by concealing a harmful link or button behind a seemingly trustworthy one. The user unknowingly takes a step they did not plan to take when they click on the seemingly trustworthy link or button, such as downloading malware, disclosing private information, or granting the attacker access to their device.

How Does Clickjacking Work?
The malicious link or button on a website or application is covered up with a transparent layer in clickjacking. The user won't notice they are clicking on anything other than the correct link or button because this layer is designed to be invisible to them. The malicious link or button can then be made to react to the user's click using a variety of methods, such as CSS (Cascading Style Sheets), JavaScript, or iFrames (Inline Frames).

POC:
I found ${vulnerable} vulnerable to a Clickjacking attack.

Fix:
Please implement the appropriate X-Frame-Options header or Content Security Policy to prevent clickjacking attacks.

Please feel free to contact me to discuss this matter further. Your prompt attention to these security concerns would be greatly appreciated. Thank you for your time, and I look forward to hearing from you soon.

Best regards,
${session.username}`,

  "dmarc-red": (website: string, vulnerable: string, session: { username: string; role: string }) => `Hello Team,

My name is ${session.username}, and I am a ${session.role} at VepDec. Our security team has identified some vulnerabilities on your ${website}, and we would like to report them so that you can take the necessary actions to resolve these issues. We kindly request that you keep us informed once the fixes have been implemented.

Vulnerability: DMARC Record Missing

Vulnerability Overview:
DMARC is an email authentication protocol that works in conjunction with SPF and DKIM (DomainKeys Identified Mail) to prevent email spoofing and ensure the legitimacy of incoming emails. When misconfigured, DMARC leaves the domain vulnerable to spoofed emails, as it fails to enforce proper email authentication.

I discovered that anyone can send emails from: ${vulnerable} to other users.

DMARC record:
No DMARC record found for ${website}

I successfully sent a manipulated email to my own address, just for testing purposes.

Impact and Risk Assessment:
The misconfigured DMARC record significantly increases the likelihood of successful phishing attacks and email spoofing. Potential consequences include:
1. Unauthorized access to sensitive information.
2. Malware distribution and propagation.
3. Damage to the domain's reputation due to involvement in spam campaigns.
4. Loss of customer trust and credibility.
5. Financial losses resulting from fraudulent activities.

Fix:
Please implement a proper DMARC record for your domain to prevent email spoofing and phishing attacks.

Please feel free to contact me to discuss this matter further. Your prompt attention to these security concerns would be greatly appreciated. Thank you for your time, and I look forward to hearing from you soon.

Best regards,
${session.username}`,

  "dmarc-yellow": (website: string, vulnerable: string, session: { username: string; role: string }) => `Hello Team,

My name is ${session.username}, and I am a ${session.role} at VepDec. Our security team has identified some vulnerabilities on your ${website}, and we would like to report them so that you can take the necessary actions to resolve these issues. We kindly request that you keep us informed once the fixes have been implemented.

Vulnerability: DMARC Quarantine/Reject Policy Not Enabled

Vulnerability Overview:
DMARC is an email authentication protocol that works in conjunction with SPF and DKIM (DomainKeys Identified Mail) to prevent email spoofing and ensure the legitimacy of incoming emails. When misconfigured, DMARC leaves the domain vulnerable to spoofed emails, as it fails to enforce proper email authentication.

I discovered that anyone can send emails from: ${vulnerable} to other users.

DMARC record:
Here you can see that the Quarantine/Reject Policy is not enabled for ${website}.

I successfully sent a manipulated email to my own address, just for testing purposes.

Impact and Risk Assessment:
The misconfigured DMARC record significantly increases the likelihood of successful phishing attacks and email spoofing. Potential consequences include:
1. Unauthorized access to sensitive information.
2. Malware distribution and propagation.
3. Damage to the domain's reputation due to involvement in spam campaigns.
4. Loss of customer trust and credibility.
5. Financial losses resulting from fraudulent activities.

Fix:
Please update your DMARC record to include a quarantine or reject policy to enhance email security.

Please feel free to contact me to discuss this matter further. Your prompt attention to these security concerns would be greatly appreciated. Thank you for your time, and I look forward to hearing from you soon.

Best regards,
${session.username}`,

  tls: (website: string,  session: { username: string; role: string }) => `Hello Team,

My name is ${session.username}, and I am a ${session.role} at VepDec. Our security team has identified some vulnerabilities on your ${website}, and we would like to report them so that you can take the necessary actions to resolve these issues. We kindly request that you keep us informed once the fixes have been implemented.

Vulnerability: Outdated TLS Version

Overview:
Transport Layer Security (TLS) is a crucial protocol for securing internet connections, ensuring encrypted data transmission between clients and servers. However, like any technology, TLS is susceptible to vulnerabilities. One such concern is the usage of outdated TLS versions, posing potential risks to the security of data transmissions.

What is an Outdated TLS Version?
TLS undergoes regular updates to address evolving security threats. Despite newer, more secure versions being available, certain websites and applications persist in using outdated TLS versions, particularly TLS 1.0 and TLS 1.1.

Why are Outdated TLS Versions a Security Risk?
Outdated TLS versions pose a security risk as they are susceptible to known attacks. For instance, vulnerabilities in TLS 1.0 and TLS 1.1, such as the POODLE attack, can compromise the security of the connection. Additionally, these older versions lack support for contemporary encryption techniques, making them more susceptible to breaches.

POC:
The website ${website} is currently using an outdated TLS version.

How to Address Outdated TLS Versions?
To mitigate the security risks associated with outdated TLS versions, it is recommended that websites and applications upgrade to more secure versions, such as TLS 1.2 or TLS 1.3. Furthermore, website and application owners should discontinue support for TLS 1.0 and TLS 1.1. Users should be encouraged to utilize browsers and programs that support the latest TLS versions for enhanced security.

Conclusion:
The use of outdated TLS versions poses a potential threat to the security of data transmitted over the internet. It is imperative for website and application owners to update to more recent TLS versions and disable support for earlier versions to mitigate these risks.

Fix:
Please upgrade your server to support TLS 1.2 or TLS 1.3 and disable support for older versions.

Please feel free to contact me to discuss this matter further. Your prompt attention to these security concerns would be greatly appreciated. Thank you for your time, and I look forward to hearing from you soon.

Best regards,
${session.username}`,

  ticket: (website: string, vulnerable: string, session: { username: string; role: string }) => `Hello Team,

My name is ${session.username}, and I am a ${session.role} at VepDec. Our security team has identified some vulnerabilities on your ${website}, and we would like to report them so that you can take the necessary actions to resolve these issues. We kindly request that you keep us informed once the fixes have been implemented.

Security Vulnerabilities Identified

During a recent security assessment of ${website}, we identified several critical vulnerabilities that may put both your systems and users at significant risk. These security gaps, if left unaddressed, could potentially lead to unauthorized access, data breaches, and other malicious activities that may compromise the integrity of your digital assets.

Given the potential impact, we strongly recommend that your team review and address these issues as soon as possible. We would be happy to provide a detailed report of our findings and work with your security team to mitigate these risks promptly.

Please feel free to contact me to discuss this matter further. Your prompt attention to these security concerns would be greatly appreciated. Thank you for your time, and I look forward to hearing from you soon.

Best regards,
${session.username}`,
}
