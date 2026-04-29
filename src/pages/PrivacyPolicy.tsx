import { PolicyLayout, PolicyCallout } from "@/components/policy/PolicyLayout";

const PrivacyPolicy = () => (
  <PolicyLayout
    eyebrow="Legal"
    title="Privacy Policy"
    version="3.0"
    effective="31 March 2026"
    jurisdictions="Singapore PDPA • Malaysia PDPA 2010 • GDPR / UK GDPR (EU/UK data only)"
  >
    <PolicyCallout title="Scope of this Privacy Policy" tone="info">
      <p>This Privacy Policy is designed to comply with the laws of Singapore and Malaysia, being the primary jurisdictions in which Quicksales.ai operates. Specifically:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Singapore:</strong> Personal Data Protection Act 2012 (No. 26 of 2012), as amended by PDPA Amendment Act 2020</li>
        <li><strong>Malaysia:</strong> Personal Data Protection Act 2010 (Act 709), including the PDPA (Amendment) Act 2023 and all subsidiary legislation (collectively 'MY PDPA')</li>
        <li><strong>EU / UK:</strong> GDPR (Regulation (EU) 2016/679) and UK GDPR, solely to the extent that Quicksales.ai processes personal data of individuals located in the EU or UK</li>
      </ul>
      <p>References to other jurisdictions in this Policy (e.g. Philippines, California) are informational only. Quicksales.ai does not voluntarily assume obligations under those frameworks unless specifically required by law. Where SG PDPA and MY PDPA requirements differ, the applicable national law governs for data subjects in that jurisdiction. Quicksales.ai does not guarantee the higher standard applies universally.</p>
    </PolicyCallout>

    <h2>1. Definitions</h2>
    <p>The following terms have the meanings set out below throughout this Privacy Policy.</p>
    <table>
      <thead><tr><th>Term</th><th>Definition</th></tr></thead>
      <tbody>
        <tr><td><strong>Personal Data</strong></td><td>Any information about an individual who can be identified from that data, or from that data and other information. Covers 'personal data' under SG PDPA, 'personal data' under MY PDPA 2010, and 'personal data' under GDPR (where applicable).</td></tr>
        <tr><td><strong>Sensitive Personal Data</strong></td><td>A sub-category attracting heightened protection under MY PDPA s.40: health/medical information, financial data, political opinions, religious beliefs, biometrics, and criminal records. Treated as special category data under GDPR Art.9.</td></tr>
        <tr><td><strong>Subscriber</strong></td><td>A business or individual that has registered for and maintains a paid Quicksales.ai subscription.</td></tr>
        <tr><td><strong>End-User</strong></td><td>Any individual (including a Subscriber's customers or contacts) who interacts with AI Agents or Platform features deployed by a Subscriber.</td></tr>
        <tr><td><strong>Subscriber Data</strong></td><td>All data uploaded, inputted, generated, or processed by or on behalf of a Subscriber through the Platform in connection with their use of the Service.</td></tr>
        <tr><td><strong>End-User Data</strong></td><td>Data relating to End-Users arising from their interaction with Subscriber-deployed AI Agents or Platform features, including WhatsApp conversation content and metadata.</td></tr>
        <tr><td><strong>Aggregate / Anonymised Data</strong></td><td>Data derived from Platform usage that has been irreversibly de-identified such that no individual or Subscriber can be identified, directly or by combination with other data. Not Personal Data.</td></tr>
        <tr><td><strong>AI Training Data</strong></td><td>A subset of Aggregate / Anonymised Data used to train, fine-tune, or benchmark Quicksales.ai AI models. See Section 6 for definition and governance.</td></tr>
        <tr><td><strong>Data Controller</strong></td><td>Entity determining purposes and means of processing. Quicksales.ai for account-level data; Subscriber for Subscriber Data and End-User Data.</td></tr>
        <tr><td><strong>Data User</strong></td><td>MY PDPA 2010 term for a person who processes personal data — equivalent to Data Controller. Quicksales.ai is a Data User under MY PDPA for account-level data.</td></tr>
        <tr><td><strong>Data Processor</strong></td><td>Entity processing personal data on behalf of a Data Controller / Data User. Quicksales.ai acts in this capacity for Subscriber Data and End-User Data.</td></tr>
        <tr><td><strong>Platform</strong></td><td>The Quicksales.ai SaaS platform, including AI agents, automation workflows, appointment booking, lead generation, web widgets, APIs, and all integrations.</td></tr>
        <tr><td><strong>Third-Party Platform</strong></td><td>Any external service connected to the Platform, including WhatsApp, Meta, calendar systems, and integration partners.</td></tr>
        <tr><td><strong>WhatsApp / Meta</strong></td><td>WhatsApp LLC and its parent Meta Platforms, Inc., which operate the WhatsApp messaging platform. Quicksales.ai is not affiliated with or endorsed by WhatsApp or Meta.</td></tr>
        <tr><td><strong>JPDP</strong></td><td>Jabatan Perlindungan Data Peribadi — the Personal Data Protection Department of Malaysia, operating under the Commissioner for Personal Data Protection. The competent regulatory authority for MY PDPA 2010.</td></tr>
        <tr><td><strong>PDPC</strong></td><td>Personal Data Protection Commission — Singapore's data protection regulatory authority.</td></tr>
        <tr><td><strong>DPO</strong></td><td>Data Protection Officer — the designated individual responsible for overseeing Quicksales.ai's data protection compliance. Contact details in Section 19.</td></tr>
      </tbody>
    </table>

    <h2>2. Data Processing Roles and Responsibilities</h2>
    <h3>2.1 Quicksales.ai as Data Controller / Data User</h3>
    <p>Quicksales.ai is the Data Controller (SG PDPA / GDPR) and Data User (MY PDPA 2010) in respect of:</p>
    <ul>
      <li>Subscriber account and registration data</li>
      <li>Billing and payment records</li>
      <li>Platform usage, log, and analytics data</li>
      <li>Marketing and communications data (where consent is obtained)</li>
      <li>Data Protection Officer communications and rights request records</li>
    </ul>

    <h3>2.2 Quicksales.ai as Data Processor</h3>
    <p>Quicksales.ai acts as a Data Processor (SG PDPA / GDPR) and data processor (MY PDPA 2010, s.4) in respect of:</p>
    <ul>
      <li>Subscriber-uploaded contact lists, lead databases, and CRM records</li>
      <li>End-User WhatsApp conversation content and message metadata processed through AI Agents deployed by Subscribers</li>
      <li>Appointment booking records and scheduling data where initiated by End-Users</li>
      <li>Any other Subscriber-instructed data processing activities</li>
    </ul>
    <p>As Data Processor, Quicksales.ai processes such data solely on the documented instructions of the Subscriber as Data Controller / Data User and does not process it for independent purposes.</p>

    <h3>2.3 Subscriber's Responsibilities</h3>
    <p>Each Subscriber, in its capacity as Data Controller (SG/GDPR) or Data User (MY), is solely and independently responsible for:</p>
    <ul>
      <li>Establishing a valid, lawful basis to collect, upload, and process personal data of their End-Users through the Platform</li>
      <li>Providing adequate privacy notices to End-Users about data processing through the Platform, including AI agent interactions and WhatsApp data flows</li>
      <li>Under MY PDPA s.6 and s.7: obtaining valid consent and providing notice (in Bahasa Malaysia or English) before processing personal data of Malaysian End-Users</li>
      <li>Responding to data subject access, correction, and erasure requests from their own End-Users</li>
      <li>Complying with all applicable national data protection laws in their jurisdiction</li>
    </ul>
    <p>Quicksales.ai accepts no liability for a Subscriber's failure to discharge these obligations.</p>

    <h2>3. Legal Bases for Processing</h2>
    <h3>3.1 Singapore (PDPA 2012, as amended 2020)</h3>
    <table>
      <thead><tr><th>Purpose</th><th>SG PDPA Legal Basis</th></tr></thead>
      <tbody>
        <tr><td>Service delivery and account management</td><td>Contractual necessity (First Schedule, Part 1, para 1(b))</td></tr>
        <tr><td>Billing and payment processing</td><td>Contractual necessity</td></tr>
        <tr><td>Security, fraud prevention, and abuse detection</td><td>Legitimate interests — proportionate and necessary to protect individuals and the platform</td></tr>
        <tr><td>Platform improvement and analytics</td><td>Legitimate interests (s.18A business improvement exception, PDPA Amendment Act 2020)</td></tr>
        <tr><td>AI model training (Aggregate / Anonymized Data only)</td><td>Fully anonymized data is outside PDPA scope; no consent required</td></tr>
        <tr><td>Marketing communications</td><td>Explicit consent (opt-in); withdrawal available at any time (s.16)</td></tr>
        <tr><td>Legal compliance and regulatory response</td><td>Legal obligation</td></tr>
      </tbody>
    </table>

    <h3>3.2 Malaysia (MY PDPA 2010, Act 709 — as amended 2023)</h3>
    <p>All seven Data Protection Principles under MY PDPA 2010 apply to Quicksales.ai's processing of Malaysian personal data. Compliance is documented below:</p>
    <table>
      <thead><tr><th>MY PDPA Principle (Act 709)</th><th>Quicksales.ai's Compliance Approach</th></tr></thead>
      <tbody>
        <tr><td><strong>General Principle (s.5)</strong> — consent required</td><td>Subscribers provide consent at registration. End-User data is processed on the Subscriber's instruction and consent framework. Consent records are maintained.</td></tr>
        <tr><td><strong>Notice &amp; Choice Principle (s.7)</strong> — notice in BM or English</td><td>This Policy satisfies the notice requirement in English. Malaysian Subscribers may request a Bahasa Malaysia summary. The notice includes all processing purposes, the right to withdraw, and the Subscriber's right to limit processing.</td></tr>
        <tr><td><strong>Disclosure Principle (s.8)</strong> — no unauthorised disclosure</td><td>Personal data is disclosed only to sub-processors required for service delivery (listed in Section 7) and as required by law. No disclosure to third parties for their own commercial use.</td></tr>
        <tr><td><strong>Security Principle (s.9)</strong> — practical steps to protect data</td><td>Industry-standard encryption, access controls, MFA, and monitoring are in place. See Section 10.</td></tr>
        <tr><td><strong>Retention Principle (s.10)</strong> — not kept longer than necessary</td><td>Retention periods are specified in Section 9. Data is deleted in accordance with those schedules.</td></tr>
        <tr><td><strong>Data Integrity Principle (s.11)</strong> — data must be accurate</td><td>Subscribers are responsible for the accuracy of the data they upload. Quicksales.ai does not independently modify Subscriber Data.</td></tr>
        <tr><td><strong>Access Principle (s.12)</strong> — right of access and correction</td><td>Exercisable via the process in Section 11. Response within 21 days. An access fee up to RM10 may apply per the Personal Data Protection (Fees) Regulations 2013.</td></tr>
      </tbody>
    </table>
    <PolicyCallout tone="warning" title="Malaysia Regulator Notice (corrected)">
      <p>The regulatory authority for MY PDPA 2010 is the Personal Data Protection Commissioner, administered by Jabatan Perlindungan Data Peribadi (JPDP) — not 'PDPC' (which refers to Singapore's regulator). All references in this Policy to the Malaysian regulator mean the Commissioner / JPDP at pdp.gov.my. Singapore's regulator is the PDPC at pdpc.gov.sg.</p>
    </PolicyCallout>

    <h3>3.3 EU / UK — GDPR and UK GDPR (applicable only to EU/UK personal data)</h3>
    <p>The GDPR and UK GDPR apply to Quicksales.ai only to the extent that Quicksales.ai processes personal data of individuals located in the EU or UK. Quicksales.ai does not voluntarily assume GDPR obligations beyond this scope.</p>
    <table>
      <thead><tr><th>Processing Activity</th><th>GDPR Legal Basis (Art. 6)</th></tr></thead>
      <tbody>
        <tr><td>Account creation and service delivery</td><td>Art.6(1)(b) — performance of a contract</td></tr>
        <tr><td>Security and fraud prevention</td><td>Art.6(1)(f) — legitimate interests</td></tr>
        <tr><td>Legal compliance</td><td>Art.6(1)(c) — legal obligation</td></tr>
        <tr><td>Platform analytics (anonymized)</td><td>Art.6(1)(f) — legitimate interests; anonymised data is outside GDPR scope</td></tr>
        <tr><td>Marketing communications</td><td>Art.6(1)(a) — explicit consent; withdrawal via unsubscribe</td></tr>
        <tr><td>AI Training Data (Aggregate only)</td><td>Fully anonymized — outside GDPR scope</td></tr>
      </tbody>
    </table>

    <h2>4. Categories of Personal Data Collected</h2>
    <h3>4.1 Subscriber Account Data (Quicksales.ai as Data Controller)</h3>
    <table>
      <thead><tr><th>Category</th><th>Examples</th><th>How Collected</th></tr></thead>
      <tbody>
        <tr><td>Identity data</td><td>Full name, company name, job title</td><td>Registration form</td></tr>
        <tr><td>Contact data</td><td>Email address, phone number</td><td>Registration/profile settings</td></tr>
        <tr><td>Authentication data</td><td>Password hash, MFA tokens, session tokens</td><td>Account setup and login</td></tr>
        <tr><td>Billing data</td><td>Billing address, payment method token (no card numbers stored)</td><td>Payment processor integration</td></tr>
        <tr><td>Configuration data</td><td>AI agent prompts, workflow settings, integration keys</td><td>Platform settings</td></tr>
      </tbody>
    </table>

    <h3>4.2 Platform Usage Data (Automatically Collected — Quicksales.ai as Data Controller)</h3>
    <table>
      <thead><tr><th>Category</th><th>Examples</th><th>Purpose</th></tr></thead>
      <tbody>
        <tr><td>Log data</td><td>IP address, device type, browser, access timestamps</td><td>Security monitoring and debugging</td></tr>
        <tr><td>Usage analytics</td><td>Features accessed, AI agent activations, message volumes</td><td>Platform improvement (anonymized)</td></tr>
        <tr><td>Performance data</td><td>API response times, uptime metrics, and error rates</td><td>Service reliability</td></tr>
        <tr><td>Session data</td><td>Session tokens, authentication state</td><td>Security and functionality</td></tr>
      </tbody>
    </table>

    <h3>4.3 WhatsApp and Messaging Data (Quicksales.ai as Data Processor)</h3>
    <PolicyCallout tone="danger" title="WhatsApp and Meta — Data Flow and Role Disclosure">
      <p>WhatsApp is operated by WhatsApp LLC, a subsidiary of Meta Platforms, Inc. Quicksales.ai is not affiliated with, endorsed by, or a partner of WhatsApp or Meta.</p>
      <p><strong>Data that flows between Quicksales.ai and WhatsApp:</strong></p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Message content: text content of WhatsApp messages sent/received through AI Agents</li>
        <li>Message metadata: sender phone number, timestamp, message ID, delivery status</li>
        <li>Contact identifiers: WhatsApp-registered phone numbers of End-Users</li>
        <li>Media (coming features): images, voice messages, and files shared in WhatsApp threads</li>
      </ul>
      <p><strong>Role split for WhatsApp data:</strong></p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Quicksales.ai acts as a data processor for WhatsApp message data, processing it solely on the Subscriber's instructions to power AI Agent responses</li>
        <li>The Subscriber is the DATA CONTROLLER / DATA USER for all WhatsApp messages sent to or received from their customers via the Platform</li>
        <li>Meta / WhatsApp is an INDEPENDENT DATA CONTROLLER for data processed under its own terms and privacy policy, which is separate from and outside the scope of this Policy</li>
      </ul>
    </PolicyCallout>
    <PolicyCallout tone="danger" title="QR Code Method Risk">
      <p>The QR code synchronization feature uses WhatsApp's unofficial Web/Multi-Device protocol, NOT Meta's official WhatsApp Business API. Message content transmitted via this method may pass through WhatsApp's servers without the security and privacy controls applicable to the official API. Quicksales.ai has no control over Meta's data practices and accepts no liability for them.</p>
    </PolicyCallout>
    <PolicyCallout tone="info" title="Subscriber Obligation">
      <p>Subscribers must inform their End-Users that their WhatsApp conversations may be processed by an AI system. Under MY PDPA s.7, this notice must be provided in Bahasa Malaysia or English before or at the time of processing.</p>
    </PolicyCallout>
    <p>Quicksales.ai processes WhatsApp message content and metadata only to the extent necessary to:</p>
    <ul>
      <li>Power AI Agent responses on behalf of the Subscriber</li>
      <li>Generate conversation logs accessible to the Subscriber through the Platform dashboard</li>
      <li>Produce Aggregate / Anonymised Data for platform improvement (after full de-identification — see Section 6)</li>
    </ul>
    <p>Quicksales.ai does not use WhatsApp message content to contact End-Users independently, for advertising, or for any purpose other than delivering the Service to the Subscriber.</p>

    <h3>4.4 Subscriber-Uploaded Data (Quicksales.ai as Data Processor)</h3>
    <p>Subscribers may upload data relating to their customers and contacts, which may include:</p>
    <ul>
      <li>Names, email addresses, and phone numbers of contacts and leads</li>
      <li>Lead profiles, sales pipeline records, and interaction history</li>
      <li>Appointment records, booking history, and scheduling data</li>
      <li>Files and documents (PDF, images) — coming features</li>
    </ul>
    <p>Quicksales.ai processes Subscriber-uploaded data as a Data Processor only. Subscribers are solely responsible as Data Controller / Data User for: (a) having a valid lawful basis; (b) providing the required privacy notices to End-Users, including WhatsApp message processing disclosures; (c) under MY PDPA s.6: obtaining written consent before processing sensitive personal data; (d) under MY PDPA s.7: providing notice in Bahasa Malaysia or English before collecting personal data of Malaysian End-Users.</p>

    <h3>4.5 Data We Do Not Collect</h3>
    <p>Quicksales.ai does not knowingly collect or require:</p>
    <ul>
      <li>Government-issued identification numbers (NRIC, passport, MyKad) unless voluntarily provided for identity verification in a support context</li>
      <li>Sensitive Personal Data under MY PDPA s.40 (health, financial, religious, biometric, criminal records)</li>
      <li>Special category data under GDPR Art.9, except where inadvertently received</li>
      <li>Data from individuals under 18 (see Section 12)</li>
    </ul>

    <h2>5. Purposes of Processing</h2>
    <table>
      <thead><tr><th>Purpose</th><th>Data Used</th><th>Legal Basis (SG / MY / GDPR)</th></tr></thead>
      <tbody>
        <tr><td><strong>Provide and operate the Platform</strong></td><td>Account, usage, Subscriber-uploaded, WhatsApp data</td><td>Contract / SG PDPA Sch.1 / MY PDPA s.6(1)(b)</td></tr>
        <tr><td><strong>Account authentication and security</strong></td><td>Identity, authentication data</td><td>Contract / Legitimate interests</td></tr>
        <tr><td><strong>Billing and subscription management</strong></td><td>Billing data</td><td>Contract</td></tr>
        <tr><td><strong>Security monitoring and incident response</strong></td><td>Log data, usage data</td><td>Legitimate interests</td></tr>
        <tr><td><strong>Platform improvement and analytics</strong></td><td>Anonymized usage analytics only</td><td>Legitimate interests / SG s.18A / outside PDPA scope once anonymized</td></tr>
        <tr><td><strong>AI model training and improvement</strong></td><td>Aggregate / Anonymized Data only (see s.6)</td><td>Outside PDPA scope — fully anonymized</td></tr>
        <tr><td><strong>Legal compliance</strong></td><td>Account data, communications</td><td>Legal obligation</td></tr>
        <tr><td><strong>Customer support</strong></td><td>Communications, account data</td><td>Contract / Legitimate interests</td></tr>
        <tr><td><strong>Marketing (opt-in only)</strong></td><td>Email address, name</td><td>Consent — explicit opt-in required; opt-out available</td></tr>
        <tr><td><strong>WhatsApp AI Agent responses</strong></td><td>WhatsApp message content and metadata</td><td>Contract — processed as Data Processor on Subscriber's instructions</td></tr>
      </tbody>
    </table>

    <h2>6. Aggregate / Anonymized Data and AI Model Training</h2>
    <h3>6.1 Definition of Aggregate / Anonymized Data</h3>
    <p>For the avoidance of doubt and to address enterprise governance requirements, 'Aggregate / Anonymized Data' as used in this Policy means data that satisfies ALL of the following conditions:</p>
    <ol>
      <li>All direct identifiers have been removed: names, email addresses, phone numbers, WhatsApp numbers, account IDs, company names, IP addresses, and device identifiers</li>
      <li>All quasi-identifiers have been generalised or suppressed: industry sector (not company name), geographic region (country-level only, not city or postcode), business size bracket (not headcount)</li>
      <li>Message content has been excluded: identifiable conversation content, including specific questions asked and responses given, is NOT used as AI Training Data in identifiable form. Only structural patterns (e.g. message length distribution, response time, conversion signal) derived from message metadata are used</li>
      <li>Aggregation thresholds are applied: no data point represents fewer than 50 distinct Subscribers, preventing singling out</li>
      <li>Re-identification risk testing has been conducted: the data has been tested against published linkage attack models and assessed as having negligible re-identification risk</li>
    </ol>
    <p>Data that does not satisfy all five conditions above is not treated as Aggregate / Anonymised Data and is subject to the full protections applicable to Personal Data under this Policy.</p>

    <h3>6.2 What Is and Is Not Used for AI Training</h3>
    <table>
      <thead><tr><th>Data Type</th><th>Used for AI Training?</th><th>Notes</th></tr></thead>
      <tbody>
        <tr><td>Identifiable contact names or phone numbers</td><td>No</td><td>Stripped before any analysis</td></tr>
        <tr><td>WhatsApp message content (verbatim)</td><td>No</td><td>Excluded from AI training pipelines</td></tr>
        <tr><td>Conversation structure metadata (e.g. turn count, response latency)</td><td>Yes — anonymised</td><td>Only structural signals, no content</td></tr>
        <tr><td>Conversion outcomes (e.g. appointment booked: yes/no)</td><td>Yes — anonymised</td><td>Labelled against anonymised session ID only</td></tr>
        <tr><td>AI agent prompt templates (Subscriber-configured)</td><td>No</td><td>Treated as confidential Subscriber configuration</td></tr>
        <tr><td>Platform usage patterns (features used, workflow steps)</td><td>Yes — anonymised</td><td>Aggregated across minimum 50 Subscribers</td></tr>
        <tr><td>Billing tier and industry sector</td><td>Yes — anonymised</td><td>Sector-level only, not company identifier</td></tr>
      </tbody>
    </table>

    <h3>6.3 Company's Right to Use Aggregate / Anonymised Data</h3>
    <p>By using the Platform, each Subscriber grants Quicksales.ai an irrevocable, perpetual, worldwide, royalty-free right to collect, derive, and use Aggregate / Anonymised Data (as defined in Section 6.1) for the following purposes:</p>
    <ul>
      <li>Training, fine-tuning, benchmarking, and improving AI and machine learning models operated by or on behalf of the Company</li>
      <li>Developing industry conversion benchmarks, platform performance reports, and commercial intelligence products</li>
      <li>Retaining Aggregate / Anonymised Data indefinitely, as it does not constitute Personal Data once fully anonymised</li>
      <li>Licensing de-identified industry insights (never individual-level data) to authorised research or commercial partners</li>
    </ul>
    <p>This right is a core commercial foundation of the Platform. Subscribers' collective usage — once fully anonymised — enables Quicksales.ai to deliver a continuously improving AI platform for all Subscribers.</p>

    <h3>6.4 Enterprise Opt-Out</h3>
    <p>Subscribers on paid Enterprise tier plans may submit a written request to restrict the use of their Subscriber Data in AI Training Data derivation. Such opt-out requests will be honoured within 30 days and applied prospectively. Historical Aggregate / Anonymised Data already derived and incorporated into AI models cannot be reversed. To request an opt-out, contact: Support@quicksales.ai with subject line 'AI Training Opt-Out Request'.</p>
    <p><strong>Non-Enterprise Subscribers:</strong> AI Training Data opt-out is available only on Enterprise plans. Standard and Professional tier Subscribers accept the AI training use described in this Section as a condition of the subsidised pricing applicable to those tiers. Upgrading to Enterprise activates the opt-out right.</p>

    <h3>6.5 Ownership of AI Models and Derived IP</h3>
    <p>All AI models, trained weights, algorithms, benchmarks, and commercial data products developed using Aggregate / Anonymised Data are the exclusive intellectual property of Quicksales.ai. No Subscriber has any entitlement to any AI model, revenue generated from it, or compensation for the use of Aggregate / Anonymised Data derived from their usage.</p>

    <h2>7. Disclosure of Personal Data</h2>
    <h3>7.1 Sub-Processors and Service Providers</h3>
    <p>Quicksales.ai discloses personal data only to the following categories of sub-processors, under contractual data protection obligations:</p>
    <table>
      <thead><tr><th>Category</th><th>Purpose</th><th>Data Disclosed</th></tr></thead>
      <tbody>
        <tr><td>Cloud infrastructure</td><td>Hosting, storage, compute</td><td>Account data, logs, Subscriber Data (encrypted)</td></tr>
        <tr><td>Payment processing</td><td>Subscription billing</td><td>Billing address, payment token only — no card numbers stored by Quicksales.ai</td></tr>
        <tr><td>Analytics (anonymized)</td><td>Platform usage analytics</td><td>Anonymized event data — no Personal Data</td></tr>
        <tr><td>Email/communications</td><td>Transactional emails, notifications</td><td>Email address, name</td></tr>
        <tr><td>AI model inference APIs</td><td>Powering AI Agent responses</td><td>WhatsApp message content submitted for inference — no training use permitted by contract</td></tr>
        <tr><td>Customer support tooling</td><td>Helpdesk and ticket management</td><td>Support ticket data, account identifiers</td></tr>
        <tr><td>Security and monitoring</td><td>Threat detection, performance monitoring</td><td>Log data, IP addresses</td></tr>
      </tbody>
    </table>
    <p>A current list of sub-processors is available upon request at Support@quicksales.ai. Subscribers will be notified of material sub-processor changes at least 14 days in advance.</p>

    <h3>7.2 Legal Disclosure</h3>
    <p>Quicksales.ai may disclose personal data without prior notice where required by a court order, lawful regulatory request (including PDPC in Singapore, the Commissioner / JPDP in Malaysia, or any relevant supervisory authority), or applicable law. Where legally permissible, Quicksales.ai will notify affected Subscribers before disclosing their data in response to a legal request.</p>

    <h3>7.3 Business Transfers</h3>
    <p>In the event of a merger, acquisition, or sale of business assets, personal data may be transferred to the acquiring entity, subject to privacy obligations no less protective than this Policy. Subscribers will be notified at least 30 days in advance.</p>

    <h3>7.4 No Sale of Personal Data</h3>
    <p>Quicksales.ai does not sell, rent, or trade personal data to any third party for their own marketing, advertising, or commercial purposes. This applies universally across all jurisdictions in which Quicksales.ai operates.</p>

    <h2>8. Cross-Border Data Transfers</h2>
    <h3>8.1 Transfer Notice</h3>
    <p>Quicksales.ai's infrastructure, personnel, and sub-processors may be located in Singapore, the United States, and other jurisdictions. Personal data may be transferred internationally in the course of providing the Service.</p>
    <h3>8.2 Malaysia — MY PDPA s.129 Compliance</h3>
    <p>Under MY PDPA 2010 s.129, personal data shall not be transferred outside Malaysia to a place not specified in an order made under s.129(2), unless adequate protections are in place. Quicksales.ai addresses this by:</p>
    <ul>
      <li>Transferring Malaysian personal data only to jurisdictions with substantially equivalent data protection laws or pursuant to contractual safeguards</li>
      <li>Imposing contractual obligations on all sub-processors receiving Malaysian personal data that require protections equivalent to MY PDPA standards</li>
      <li>Providing Subscribers with information on cross-border transfers upon request</li>
    </ul>
    <p>Malaysian Subscribers may request a cross-border transfer impact summary at Support@quicksales.ai (subject: 'MY Cross-Border Transfer Query').</p>
    <h3>8.3 Singapore — PDPA s.26 Compliance</h3>
    <p>Under SG PDPA s.26, Quicksales.ai ensures that organizations receiving personal data transferred from Singapore provide a comparable standard of protection through contractual arrangements or equivalent national laws.</p>
    <h3>8.4 EU / UK — Transfer Mechanisms (where GDPR applies)</h3>
    <p>For transfers of EU/EEA or UK personal data to third countries, Quicksales.ai relies on Standard Contractual Clauses (SCCs) approved by the European Commission (Decision 2021/914), or UK IDTA / UK Addendum as appropriate.</p>
    <h3>8.5 Data Processing Agreement</h3>
    <p>Subscribers subject to GDPR, UK GDPR, or MY PDPA may request a formal Data Processing Agreement (DPA) or data processing contract at Support@quicksales.ai (subject: 'DPA Request').</p>

    <h2>9. Data Retention</h2>
    <table>
      <thead><tr><th>Data Category</th><th>Retention Period</th><th>Basis / Notes</th></tr></thead>
      <tbody>
        <tr><td><strong>Account and identity data</strong></td><td>Subscription term + 7 years</td><td>Tax, legal, and regulatory compliance (SG and MY Companies Act obligations)</td></tr>
        <tr><td><strong>Billing and payment records</strong></td><td>7 years from the transaction date</td><td>Statutory accounting obligation</td></tr>
        <tr><td><strong>Platform usage and log data</strong></td><td>24 months from collection, then deleted or anonymized</td><td>Security analysis and platform improvement</td></tr>
        <tr><td><strong>Subscriber-uploaded data (incl. WhatsApp data)</strong></td><td>Subscription term + 30 days</td><td>30-day window for Subscriber data export. Deleted at the end of the window.</td></tr>
        <tr><td><strong>End-User WhatsApp conversation logs</strong></td><td>Subscription term + 30 days</td><td>Processed on the subscriber's instructions. The subscriber is responsible for their own retention obligations to End-Users.</td></tr>
        <tr><td><strong>Aggregate / Anonymized Data (AI Training Data)</strong></td><td>Indefinitely — subject to Section 6.1 anonymization standards</td><td>Not Personal Data once fully anonymized under the definition in Section 6.1</td></tr>
        <tr><td><strong>Customer support communications</strong></td><td>3 years from last interaction</td><td>Dispute resolution and service improvement</td></tr>
        <tr><td><strong>Marketing consent records</strong></td><td>Duration of consent + 3 years after withdrawal</td><td>Proof of consent obligation</td></tr>
        <tr><td><strong>DPO / rights request records</strong></td><td>6 years from the closure of the request</td><td>Evidence of compliance with data subject rights obligations</td></tr>
        <tr><td><strong>MY PDPA consent records</strong></td><td>Duration of processing + 3 years</td><td>MY PDPA compliance record-keeping requirement</td></tr>
        <tr><td><strong>Legal hold data</strong></td><td>Duration of legal proceedings, then reviewed</td><td>Overrides standard retention periods</td></tr>
      </tbody>
    </table>
    <PolicyCallout tone="info" title="Subscriber-uploaded data deletion">
      <p>Upon account termination, all identifiable Subscriber Data (including WhatsApp conversation logs) will be held for 30 days to allow export, then permanently deleted. Quicksales.ai is not liable for data loss resulting from the Subscriber's failure to export before the 30-day window closes. Anonymised Aggregate Data derived from that usage is not deleted.</p>
    </PolicyCallout>
    <p><strong>MY PDPA Note (Retention Principle, s.10):</strong> Personal data processed under MY PDPA must not be kept longer than necessary. The retention periods above represent maximum periods and are set by reference to applicable legal obligations. Subscribers processing Malaysian End-User data should align their own internal retention policies accordingly.</p>

    <h2>10. Data Security</h2>
    <h3>10.1 Technical and Organizational Measures</h3>
    <table>
      <thead><tr><th>Measure</th><th>Implementation Details</th></tr></thead>
      <tbody>
        <tr><td>Data in transit</td><td>TLS 1.2 or higher for all data transmission</td></tr>
        <tr><td>Data at rest</td><td>AES-256 encryption for all stored data</td></tr>
        <tr><td>Access controls</td><td>Role-based access control (RBAC), least-privilege principle, and multi-factor authentication (MFA) for administrative access</td></tr>
        <tr><td>Network security</td><td>Firewalls, DDoS mitigation, intrusion detection and prevention systems</td></tr>
        <tr><td>Vulnerability management</td><td>Regular penetration testing and scheduled vulnerability scanning</td></tr>
        <tr><td>Incident response</td><td>Documented breach response procedures; DPO notified within 24 hours of suspected breach</td></tr>
        <tr><td>Staff controls</td><td>Background checks for staff with data access; annual data protection training; confidentiality obligations</td></tr>
        <tr><td>Sub-processor security</td><td>Contractual security requirements imposed on all sub-processors; periodic review</td></tr>
      </tbody>
    </table>
    <h3>10.2 MY PDPA Security Principle (s.9)</h3>
    <p>In accordance with MY PDPA 2010 s.9, Quicksales.ai takes all practical steps to protect personal data from loss, misuse, modification, unauthorized or accidental access, disclosure, alteration, or destruction. The measures in Section 10.1 constitute Quicksales.ai's compliance with the MY PDPA Security Principle.</p>
    <h3>10.3 Security Warranty Limitation</h3>
    <p>No data transmission or storage system is 100% secure. Quicksales.ai does not warrant that the Platform is invulnerable to breaches. The Company expressly excludes liability for security incidents caused by: (a) Subscriber negligence or insecure credential management; (b) data compromised through WhatsApp's QR code synchronization method, which operates outside Meta's official API security infrastructure; (c) Third-Party Platform failures; or (d) Force Majeure Events. Liability is subject to the cap in the Terms and Conditions of Service.</p>
    <h3>10.4 Data Breach Notification</h3>
    <table>
      <thead><tr><th>Jurisdiction</th><th>Statutory Threshold</th><th>Quicksales.ai's Commitment</th></tr></thead>
      <tbody>
        <tr><td>Singapore (PDPA s.26D)</td><td>Mandatory notification where breach causes or is likely to cause significant harm, or is of significant scale (500+ individuals)</td><td>Notify PDPC and affected Subscribers within 3 business days of assessment</td></tr>
        <tr><td>Malaysia (MY PDPA)</td><td>No mandatory statutory notification requirement under current Act 709 (forthcoming under amendments)</td><td>Best practice: notify affected Subscribers within 72 hours of a confirmed breach affecting Malaysian personal data</td></tr>
        <tr><td>EU / EEA (GDPR Art.33)</td><td>72 hours to supervisory authority; notify data subjects if high risk (Art.34)</td><td>Notify within 72 hours; provide required Art.33 details; assist Subscribers with their own notifications</td></tr>
        <tr><td>UK (UK GDPR Art.33)</td><td>72 hours to ICO</td><td>Notify within 72 hours</td></tr>
      </tbody>
    </table>

    <h2>11. Data Subject Rights</h2>
    <h3>11.1 Rights Summary</h3>
    <table>
      <thead><tr><th>Right</th><th>SG PDPA</th><th>MY PDPA 2010</th><th>GDPR / UK GDPR (EU/UK data only)</th></tr></thead>
      <tbody>
        <tr><td><strong>Access</strong></td><td>Yes (s.21)</td><td>Yes (s.12) — RM10 fee may apply</td><td>Yes (Art.15)</td></tr>
        <tr><td><strong>Correction</strong></td><td>Yes (s.22)</td><td>Yes (s.12)</td><td>Yes (Art.16)</td></tr>
        <tr><td><strong>Erasure</strong></td><td>Limited</td><td>Not explicit in Act 709</td><td>Yes (Art.17)</td></tr>
        <tr><td><strong>Data portability</strong></td><td>Yes (2020 amendment)</td><td>Not yet enacted</td><td>Yes (Art.20)</td></tr>
        <tr><td><strong>Withdraw consent</strong></td><td>Yes (s.16)</td><td>Yes (s.38)</td><td>Yes (Art.7(3))</td></tr>
        <tr><td><strong>Object to direct marketing</strong></td><td>Yes</td><td>Yes (s.43)</td><td>Yes (Art.21)</td></tr>
        <tr><td><strong>Restrict processing</strong></td><td>Not explicit</td><td>Not explicit</td><td>Yes (Art.18)</td></tr>
        <tr><td><strong>Lodge complaint</strong></td><td>PDPC (pdpc.gov.sg)</td><td>Commissioner / JPDP (pdp.gov.my)</td><td>Lead supervisory authority</td></tr>
      </tbody>
    </table>

    <h3>11.2 Malaysia-Specific Rights (MY PDPA 2010)</h3>
    <p>Malaysian data subjects have the following specific rights under Act 709:</p>
    <ul>
      <li><strong>Right of access (s.12(1)):</strong> Request a copy of personal data held about you. Quicksales.ai will respond within 21 days. A fee not exceeding RM10 may be charged per the Personal Data Protection (Fees) Regulations 2013, communicated before the response is provided.</li>
      <li><strong>Right of correction (s.12(1)):</strong> Request correction of inaccurate, incomplete, misleading, or outdated personal data. Quicksales.ai will correct or cease use of disputed data within 21 days.</li>
      <li><strong>Right to withdraw consent (s.38):</strong> Withdraw consent at any time, subject to legal or contractual consequences. Withdrawal does not affect lawfulness of prior processing.</li>
      <li><strong>Right to prevent direct marketing processing (s.43):</strong> Opt out of direct marketing at any time, free of charge. Requests actioned within 14 days.</li>
      <li><strong>Right to prevent processing causing damage or distress:</strong> Request cessation where processing is causing or likely to cause unwarranted substantial damage or distress.</li>
    </ul>
    <PolicyCallout tone="info" title="MY PDPA Access Request Fee">
      <p>Quicksales.ai may charge up to RM10 per access request under MY PDPA s.12, per the Personal Data Protection (Fees) Regulations 2013. This fee will be communicated to the requestor and must be paid before the response is released. No fee applies to correction requests.</p>
    </PolicyCallout>

    <h3>11.3 Rights in Respect of End-User Data</h3>
    <p>Where an End-User's personal data is processed by Quicksales.ai as Data Processor:</p>
    <ul>
      <li>Rights are exercisable against the Subscriber (as Data Controller / Data User), not against Quicksales.ai directly</li>
      <li>Quicksales.ai will redirect any End-User rights request received directly to the relevant Subscriber</li>
      <li>Quicksales.ai will provide reasonable technical assistance to Subscribers in fulfilling End-User rights requests</li>
    </ul>

    <h3>11.4 How to Submit a Rights Request</h3>
    <p>To exercise any right in respect of personal data held by Quicksales.ai as Data Controller / Data User:</p>
    <ul>
      <li>Email: Support@quicksales.ai</li>
      <li>Subject line: 'Data Subject Rights Request — [SG / MY / EU]'</li>
      <li>Include: full name, registered account email, nature of request, and supporting identity verification</li>
      <li>Response time: 21 days (MY PDPA), 30 days (SG PDPA / GDPR), extendable by 30 days with notice for complex requests</li>
    </ul>

    <h3>11.5 Limitations</h3>
    <p>Rights may be limited or declined where: (a) compliance would prejudice national security, law enforcement, or legal proceedings; (b) the request is manifestly unfounded, repetitive, or excessive; (c) the data has been fully anonymised and no longer constitutes Personal Data; (d) retention is required by a statutory legal obligation.</p>

    <h2>12. Sensitive Personal Data (MY PDPA s.40)</h2>
    <p>Malaysia's PDPA 2010 s.40 imposes strict requirements on the processing of sensitive personal data, defined to include: health or medical conditions, political opinions, religious beliefs, commission or alleged commission of any offence, and other categories as may be prescribed by the Minister.</p>
    <PolicyCallout tone="danger" title="IMPORTANT — MALAYSIAN SUBSCRIBERS">
      <p>Quicksales.ai's Platform is NOT designed or authorised for processing MY PDPA Sensitive Personal Data under s.40. Subscribers must NOT upload or process such data through the Platform unless ALL of the following conditions are met:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>(a) The data subject has given explicit written consent for this specific processing purpose;</li>
        <li>(b) Processing is required by a written law;</li>
        <li>(c) Processing is necessary to protect the vital interests of the data subject.</li>
      </ul>
      <p>Breach of this prohibition is a material breach of the Terms and Conditions of Service. Processing sensitive personal data without consent under MY PDPA s.40 is a criminal offence carrying a fine of up to RM200,000 or imprisonment of up to 2 years, or both.</p>
    </PolicyCallout>

    <h2>13. Children's Data</h2>
    <p>The Platform is a business-to-business service and is not directed at or intended for use by individuals under the age of 18. Quicksales.ai does not knowingly collect personal data from minors.</p>
    <p>Subscribers must not upload or process personal data of individuals under 18 through the Platform without first ensuring that:</p>
    <ul>
      <li>Parental or guardian consent has been obtained in accordance with applicable law</li>
      <li>Under MY PDPA 2010 s.6(2)(b): the written consent of a parent or guardian is obtained where the data subject is a minor</li>
      <li>Under GDPR Art.8 (where applicable): parental consent is in place for children under 16 (or lower national threshold)</li>
    </ul>
    <p>If Quicksales.ai becomes aware that personal data of a minor has been collected without appropriate consent, it will promptly delete such data and notify the relevant Subscriber.</p>

    <h2>14. Cookies and Tracking Technologies</h2>
    <PolicyCallout tone="info" title="Operational Note">
      <p>This section describes Quicksales.ai's intended cookie practices. Before publishing, ensure: (a) a cookie banner / consent manager is implemented on all Platform web pages; (b) a separate Cookie Policy page is published and linked from the banner; (c) the cookie categories and controls described below match the actual tools deployed. A mismatch between this Policy and actual cookie tooling creates regulatory exposure under both SG PDPA and MY PDPA s.7 (Notice &amp; Choice Principle).</p>
    </PolicyCallout>
    <table>
      <thead><tr><th>Cookie Type</th><th>Purpose</th><th>Can Be Disabled?</th><th>Basis (SG/MY/GDPR)</th></tr></thead>
      <tbody>
        <tr><td><strong>Strictly necessary</strong></td><td>Session authentication, security tokens, load balancing</td><td>No — disabling prevents Platform access</td><td>Contract performance; no separate consent required</td></tr>
        <tr><td><strong>Functional</strong></td><td>User preferences, language settings, personalisation</td><td>Yes — via cookie settings</td><td>Legitimate interests (non-intrusive; does not track across sites)</td></tr>
        <tr><td><strong>Analytics</strong></td><td>Anonymised usage statistics; no Personal Data shared with analytics provider</td><td>Yes — via cookie settings</td><td>Legitimate interests; data anonymised before transmission</td></tr>
        <tr><td><strong>Marketing (opt-in only)</strong></td><td>Measuring effectiveness of opt-in marketing communications only</td><td>Yes — requires explicit opt-in; not set by default</td><td>Explicit consent required; withdrawal available at any time</td></tr>
      </tbody>
    </table>
    <p>A separate, detailed Cookie Policy is available at quicksales.ai/cookies and sets out the specific cookies used, their duration, and how to manage preferences. In the event of conflict between this section and the Cookie Policy, the Cookie Policy prevails.</p>

    <h2>15. Data Protection Officer</h2>
    <p>Quicksales.ai has designated a Data Protection Officer (DPO) responsible for overseeing the Company's compliance with applicable data protection laws, including SG PDPA, MY PDPA 2010, and GDPR (where applicable). The DPO is the primary point of contact for:</p>
    <ul>
      <li>Data subject rights requests</li>
      <li>Regulatory enquiries and complaints</li>
      <li>Data breach notifications</li>
      <li>Data Processing Agreement requests</li>
      <li>Privacy-related concerns from Subscribers and End-Users</li>
    </ul>
    <table>
      <tbody>
        <tr><td><strong>DPO email</strong></td><td>Support@quicksales.ai</td></tr>
        <tr><td><strong>Postal address</strong></td><td>Data Protection Officer, Quicksales.ai, [Registered Company Address], Singapore [Postal Code]</td></tr>
        <tr><td><strong>Response time</strong></td><td>Within 21 days (MY PDPA) / 30 days (SG PDPA / GDPR) of verified request</td></tr>
        <tr><td><strong>Languages</strong></td><td>English; Bahasa Malaysia summary available on request for Malaysian data subjects</td></tr>
      </tbody>
    </table>

    <h2>16. Company's Commercial Data Rights and Liability Limitation</h2>
    <h3>16.1 Platform Improvement Rights</h3>
    <p>By using the Platform, each Subscriber grants Quicksales.ai the rights set out in Section 6.3 in relation to Aggregate / Anonymised Data, subject to the anonymisation standards in Section 6.1. These rights survive termination of the subscription.</p>
    <h3>16.2 Ownership of Derived IP</h3>
    <p>All AI models, trained weights, algorithms, benchmarks, and commercial data products developed using Aggregate / Anonymised Data are the exclusive intellectual property of Quicksales.ai. Subscribers have no entitlement to compensation, revenue sharing, or ownership interest in such IP.</p>
    <h3>16.3 Limitation of Privacy Liability</h3>
    <p>To the fullest extent permitted by applicable law:</p>
    <ul>
      <li>Quicksales.ai's aggregate liability for any privacy violation, data breach, or data loss is limited to the cap set out in the Terms and Conditions of Service</li>
      <li>Quicksales.ai is not liable for breaches caused by: (a) Subscriber negligence; (b) WhatsApp QR code method data exposure; (c) Third-Party Platform failures; (d) Force Majeure Events; or (e) Subscriber's own non-compliance with data protection obligations</li>
      <li>Under MY PDPA, liability limitations apply to the extent permitted by Act 709 and shall not exclude liability for wilful default or fraud</li>
    </ul>

    <h2>17. Malaysian Subscribers — MY PDPA Data Processor Obligations</h2>
    <p>Where Quicksales.ai processes personal data as a data processor on behalf of Malaysian Subscribers (as data users under MY PDPA 2010), Quicksales.ai agrees to:</p>
    <ul>
      <li>Process personal data only on the documented instructions of the Subscriber as data user, and not for any independent purpose</li>
      <li>Not engage additional sub-processors handling Malaysian personal data without prior notification to the Subscriber (general authorisation is given by acceptance of this Policy; material changes notified per Section 7.1)</li>
      <li>Implement the security measures set out in Section 10.1 in compliance with MY PDPA s.9</li>
      <li>Assist the Subscriber in fulfilling data subject rights requests under MY PDPA ss.12, 38, and 43</li>
      <li>Notify the Subscriber within 72 hours of becoming aware of a breach affecting Malaysian personal data</li>
      <li>Upon termination, delete or return all Malaysian personal data within 30 days of the Subscriber's election</li>
      <li>Make available information necessary to demonstrate compliance with MY PDPA obligations and permit audits upon 14 days' reasonable notice</li>
    </ul>
    <p>Malaysian Subscribers requiring a formal data processing contract under MY PDPA may request one at support@quicksales.ai (subject: 'MY PDPA Data Processing Contract Request'). The contract will be provided within 14 business days of the request.</p>

    <h2>18. Changes to This Privacy Policy</h2>
    <p>Quicksales.ai may update this Privacy Policy at any time. Material changes will be communicated via email to the registered Subscriber email address and via in-platform notification, at least 14 days before the effective date. Changes required to comply with law may take effect immediately with notice.</p>
    <p>For Malaysian Subscribers, material change notices will be provided in English with a Bahasa Malaysia summary available on request.</p>
    <p>The current version of this Policy is always available at quicksales.ai/privacy. Continued use of the Platform after the effective date constitutes acceptance of the revised Policy.</p>

    <h2>19. Regulatory Authorities</h2>
    <table>
      <thead><tr><th>Jurisdiction</th><th>Regulator</th><th>Website</th></tr></thead>
      <tbody>
        <tr><td>Singapore</td><td>Personal Data Protection Commission (PDPC)</td><td>pdpc.gov.sg</td></tr>
        <tr><td>Malaysia</td><td>Personal Data Protection Commissioner / Jabatan Perlindungan Data Peribadi (JPDP)</td><td>pdp.gov.my</td></tr>
        <tr><td>European Union</td><td>Lead EU supervisory authority (per Subscriber's EU establishment)</td><td>edpb.europa.eu</td></tr>
        <tr><td>United Kingdom</td><td>Information Commissioner's Office (ICO)</td><td>ico.org.uk</td></tr>
      </tbody>
    </table>
    <p>Data subjects in Singapore or Malaysia who are not satisfied with Quicksales.ai's response to a rights request or complaint may lodge a complaint with the relevant regulatory authority listed above.</p>

    <h2>20. Contact Details</h2>
    <table>
      <tbody>
        <tr><td><strong>Data Protection Officer</strong></td><td>support@quicksales.ai</td></tr>
        <tr><td><strong>Rights requests (SG / MY / EU)</strong></td><td>support@quicksales.ai | Subject: 'DSR — [SG/MY/EU]'</td></tr>
        <tr><td><strong>MY PDPA access requests</strong></td><td>support@quicksales.ai | Subject: 'MY PDPA Access Request.'</td></tr>
        <tr><td><strong>MY data processing contract</strong></td><td>support@quicksales.ai | Subject: 'MY PDPA Contract Request.'</td></tr>
        <tr><td><strong>DPA (GDPR)</strong></td><td>support@quicksales.ai | Subject: 'GDPR DPA Request.'</td></tr>
        <tr><td><strong>AI training opt-out (Enterprise)</strong></td><td>support@quicksales.ai | Subject: 'AI Training Opt-Out Request.'</td></tr>
        <tr><td><strong>Cross-border transfer queries</strong></td><td>support@quicksales.ai | Subject: 'Cross-Border Transfer Query.'</td></tr>
        <tr><td><strong>Security/breach reports</strong></td><td>support@quicksales.ai | Subject: 'Security Incident.'</td></tr>
        <tr><td><strong>General product support</strong></td><td>support@quicksales.ai</td></tr>
        <tr><td><strong>DPO postal address</strong></td><td>Quicksales.ai, [Registered Company Address], Singapore [Postal Code]</td></tr>
        <tr><td><strong>Response time</strong></td><td>21 days (MY) / 30 days (SG / GDPR) from verified receipt</td></tr>
      </tbody>
    </table>

    <hr />
    <p className="text-center font-semibold">END OF PRIVACY POLICY — VERSION 3.0</p>
    <p><em>By registering for or using the Quicksales.ai Platform, you confirm that you have read and understood this Privacy Policy. This Policy forms part of the Quicksales.ai Terms and Conditions of Service. For Malaysian Subscribers, acceptance constitutes written notice under MY PDPA 2010 s.7. Consent to the processing activities described in this Policy is given at the point of Subscriber registration.</em></p>
    <p className="text-sm text-muted-foreground">© 2026 Quicksales.ai. All Rights Reserved.<br/>Governing jurisdictions: Singapore PDPA • Malaysia PDPA 2010 (Act 709) • GDPR / UK GDPR (EU/UK data only)</p>
  </PolicyLayout>
);

export default PrivacyPolicy;
