import { PolicyLayout, PolicyCallout } from "@/components/policy/PolicyLayout";

const AcceptableUse = () => (
  <PolicyLayout
    eyebrow="Legal"
    title="Acceptable Use Policy"
    version="1.0"
    effective="31 March 2026"
    jurisdictions="Singapore • Malaysia • Hong Kong • Australia"
  >
    <PolicyCallout tone="info">
      <p>This Acceptable Use Policy ('AUP') governs the use of all Quicksales.ai services, including the AI-powered WhatsApp automation platform, AI Agents, appointment booking, lead generation, web widgets, and all integrations ('Platform' or 'Service').</p>
      <p>This AUP forms part of and must be read together with:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Quicksales.ai Terms and Conditions of Service</li>
        <li>Quicksales.ai Privacy Policy v3.0</li>
        <li>Any applicable Data Processing Agreement</li>
      </ul>
      <p>By accessing or using the Service, the Subscriber and all authorised users confirm acceptance of this AUP. Capitalised terms not defined here have the meanings given in the Terms and Conditions.</p>
    </PolicyCallout>

    <h2>1. Purpose and Scope</h2>
    <h3>1.1 Purpose</h3>
    <p>This AUP sets out the rules governing lawful, ethical, and responsible use of the Quicksales.ai Platform. It exists to:</p>
    <ul>
      <li>Protect End-Users, Subscribers, and third parties from harm caused by misuse of the Platform</li>
      <li>Ensure the Platform is not used to violate applicable laws in Singapore, Malaysia, Hong Kong, or Australia</li>
      <li>Protect Quicksales.ai from liability arising from Subscriber conduct</li>
      <li>Preserve the integrity, availability, and reputation of the Platform and the WhatsApp ecosystem</li>
      <li>Maintain the trust of end customers who interact with AI Agents deployed through the Platform</li>
    </ul>
    <h3>1.2 Who This Policy Applies To</h3>
    <p>This AUP applies to:</p>
    <ul>
      <li>All Subscribers who hold an active Quicksales.ai account</li>
      <li>All users authorised by a Subscriber to access the Platform</li>
      <li>All AI Agents, automated workflows, and communications deployed by or on behalf of a Subscriber through the Platform</li>
      <li>All End-Users and contacts who interact with a Subscriber's AI Agents via WhatsApp or other channels</li>
    </ul>
    <p>Subscribers are responsible for ensuring that all authorised users within their organisation comply with this AUP. A breach by an authorised user is a breach by the Subscriber.</p>
    <h3>1.3 Relationship to Terms and Conditions</h3>
    <p>This AUP supplements the Quicksales.ai Terms and Conditions. In the event of conflict, the Terms and Conditions prevail. Breach of this AUP constitutes a material breach of the Terms and Conditions and may result in immediate suspension or termination of access without refund.</p>

    <h2>2. Permitted Uses of the Platform</h2>
    <p>Subscribers may use the Platform solely for legitimate business purposes, including:</p>
    <h3>2.1 Authorised Commercial Activities</h3>
    <ul>
      <li>Deploying AI Agents to respond to customer enquiries via WhatsApp in a transparent and lawful manner</li>
      <li>Automating appointment booking and scheduling with the prior knowledge and consent of End-Users</li>
      <li>Managing inbound lead enquiries and routing them to human agents or AI workflows</li>
      <li>Sending transactional communications (appointment confirmations, reminders, follow-ups) to contacts who have opted in</li>
      <li>Configuring web widgets on the Subscriber's own websites to capture leads and initiate conversations</li>
      <li>Using the Platform's CRM and integration features (where available) to manage customer relationships</li>
      <li>Generating business analytics and performance reports based on the Subscriber's own Platform usage data</li>
    </ul>
    <h3>2.2 Conditions Applicable to All Permitted Uses</h3>
    <ul>
      <li>All communications sent through the Platform must be truthful, transparent, and not misleading</li>
      <li>End-Users must know they are interacting with an AI system; AI Agents must not impersonate a human unless the End-User explicitly consents to a persona</li>
      <li>All contacts must have given valid consent to receive communications through WhatsApp, in compliance with the applicable anti-spam and data protection laws of their jurisdiction (see Section 5)</li>
      <li>The Subscriber's business must be a lawful enterprise operating in compliance with all applicable laws in its jurisdiction</li>
      <li>The Platform must not be used in a way that damages the reputation or operations of Quicksales.ai, WhatsApp, or Meta</li>
    </ul>

    <h2>3. Prohibited Conduct — General</h2>
    <p>The following conduct is strictly prohibited regardless of jurisdiction:</p>
    <h3>3.1 Illegal and Harmful Activities</h3>
    <ul>
      <li>Using the Platform to engage in, facilitate, or promote any activity that is illegal under the laws of Singapore, Malaysia, Hong Kong, Australia, or the jurisdiction of the End-User</li>
      <li>Using the Platform to commit or facilitate fraud, identity theft, phishing, or any other deceptive practice</li>
      <li>Transmitting content that constitutes hate speech, incitement to violence, racial vilification, or discrimination on any protected ground</li>
      <li>Distributing child exploitation material or any content sexualising minors — this is an absolute prohibition; no business justification applies</li>
      <li>Using the Platform to threaten, harass, stalk, or intimidate any individual</li>
      <li>Transmitting malware, ransomware, spyware, viruses, or any other malicious code through the Platform or connected channels</li>
      <li>Using the Platform to support, finance, or facilitate terrorism, money laundering, or sanctions evasion</li>
    </ul>
    <h3>3.2 Unauthorised Data Activities</h3>
    <ul>
      <li>Uploading or processing personal data without a valid lawful basis under applicable data protection law (SG PDPA, MY PDPA, PDPO (HK), or the Australian Privacy Act)</li>
      <li>Purchasing, scraping, or harvesting contact lists without verifiable prior consent of the individuals on those lists</li>
      <li>Using the Platform to process sensitive personal data (health, financial, religious, biometric, criminal records) without explicit written consent of the data subject</li>
      <li>Processing personal data of individuals under 18 without appropriate parental or guardian consent</li>
      <li>Building surveillance profiles of individuals using data aggregated through the Platform</li>
      <li>Transferring personal data across borders in violation of applicable cross-border transfer requirements (SG PDPA s.26, MY PDPA s.129, PDPO HK, Australian Privacy Act APP 8)</li>
    </ul>
    <h3>3.3 Platform Abuse</h3>
    <ul>
      <li>Reverse-engineering, decompiling, or attempting to extract the source code of the Platform or its AI models</li>
      <li>Circumventing or attempting to bypass any security, authentication, or access control measure</li>
      <li>Using automated scripts, bots, or tools (other than those provided or authorised by Quicksales.ai) to interact with the Platform in a manner that places excessive load on infrastructure</li>
      <li>Reselling, sublicensing, white-labelling, or providing access to the Platform to third parties without Quicksales.ai's prior written authorisation</li>
      <li>Creating multiple accounts to circumvent usage limits, suspensions, or enforcement actions</li>
      <li>Accessing or attempting to access another Subscriber's account, data, or AI Agent configurations without authorisation</li>
      <li>Interfering with or disrupting the integrity or performance of the Platform or associated infrastructure</li>
    </ul>
    <h3>3.4 AI Agent Misuse</h3>
    <ul>
      <li>Configuring AI Agents to make false, misleading, or unsubstantiated claims about products, services, pricing, or the Subscriber's business</li>
      <li>Configuring AI Agents to impersonate a named real person, government official, regulatory body, or competitor without authorisation</li>
      <li>Using AI Agents to generate content that defames, vilifies, or unlawfully disparages any person or organisation</li>
      <li>Deploying AI Agents in regulated sectors (financial advice, medical advice, legal advice) without the appropriate professional licences and human oversight mechanisms required by law</li>
      <li>Using AI Agents to generate and send content that the Subscriber knows or ought reasonably to know contains material errors, without appropriate human review</li>
      <li>Deploying AI Agents in a way that constitutes an automated decision-making process with legal or significant effects on individuals without the legally required safeguards</li>
    </ul>
    <h3>3.5 Intellectual Property Violations</h3>
    <ul>
      <li>Using the Platform to transmit, reproduce, or distribute content that infringes the copyright, trademark, patent, or other intellectual property rights of any third party</li>
      <li>Using the Platform to distribute counterfeit goods, pirated software, or unlicensed digital content</li>
      <li>Claiming ownership of or attempting to register intellectual property derived from Quicksales.ai's AI models, Platform features, or Aggregate Data products</li>
    </ul>

    <h2>4. WhatsApp-Specific Acceptable Use Rules</h2>
    <p>Given the central role of WhatsApp in the Quicksales.ai Platform, Subscribers must comply with the following additional requirements specific to WhatsApp use.</p>
    <h3>4.1 WhatsApp and Meta Terms of Service</h3>
    <p>Subscribers acknowledge that their use of WhatsApp through the Platform is subject to:</p>
    <ul>
      <li>WhatsApp Terms of Service (whatsapp.com/legal/terms-of-service)</li>
      <li>WhatsApp Business Policy (whatsapp.com/legal/business-policy)</li>
      <li>Meta Platform Terms (developers.facebook.com/terms)</li>
    </ul>
    <p>Quicksales.ai is not a Meta Business Solution Provider and does not indemnify Subscribers against enforcement actions by Meta or WhatsApp.</p>
    <h3>4.2 QR Code Synchronisation — Critical Use Restrictions</h3>
    <PolicyCallout tone="danger" title="QR Code Method — Mandatory Restrictions">
      <p>The QR code synchronisation feature (WhatsApp Web/Multi-Device protocol) is an unofficial integration method NOT authorised by Meta. Subscribers using this method:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>MUST NOT use the QR code method to send bulk unsolicited messages ('blasting') of any kind. Bulk messaging via unofficial WhatsApp connections is the primary trigger for account bans.</li>
        <li>MUST NOT use a single WhatsApp number connected via QR code to manage more than one distinct business identity or operate across unrelated business activities.</li>
        <li>MUST NOT use the QR code method for financial services marketing, investment solicitation, insurance sales, or any other regulated financial product communication without holding the relevant regulatory licence in the applicable jurisdiction.</li>
        <li>MUST accept that Meta may ban the connected WhatsApp number at any time without notice or appeal. Quicksales.ai accepts no liability for any resulting business disruption.</li>
        <li>SHOULD migrate to the official WhatsApp Business API for higher-volume or enterprise use. Contact support@quicksales.ai for assistance with API migration.</li>
      </ul>
    </PolicyCallout>
    <h3>4.3 Messaging Conduct</h3>
    <p>All messages sent via WhatsApp through the Platform must comply with the following:</p>
    <ul>
      <li><strong>Opt-in requirement:</strong> Messages may only be sent to individuals who have given prior, explicit, verifiable consent to receive WhatsApp communications from the Subscriber's business</li>
      <li><strong>Identity disclosure:</strong> Every WhatsApp conversation initiated by an AI Agent must clearly identify the business name on whose behalf the AI is operating</li>
      <li><strong>AI disclosure:</strong> If a contact asks whether they are speaking with a human or an AI, the AI Agent must answer truthfully. Configuring an AI Agent to deny being an AI when directly asked is prohibited</li>
      <li><strong>Opt-out mechanism:</strong> Every message sequence must include a clear and functional opt-out mechanism (e.g. 'Reply STOP to unsubscribe'). Opt-out requests must be honoured within 24 hours</li>
      <li><strong>Frequency:</strong> Messages must not be sent at a frequency that a reasonable person would consider harassing or excessive</li>
      <li><strong>Time restrictions:</strong> Messages must not be sent between 9:00 PM and 9:00 AM in the End-User's local timezone unless the End-User has initiated the conversation within that window</li>
      <li><strong>Content accuracy:</strong> All factual claims in AI Agent messages must be accurate and capable of substantiation</li>
    </ul>
    <h3>4.4 Prohibited WhatsApp Content</h3>
    <ul>
      <li>Unsolicited commercial messages (spam) to individuals who have not opted in</li>
      <li>Misleading or deceptive messages about the origin, identity, or nature of the sender</li>
      <li>Content that violates WhatsApp's Prohibited Content policies (including adult content, gambling promotions where prohibited, and counterfeit goods)</li>
      <li>Automated mass-broadcast messages sent to more than 50 recipients from a single WhatsApp number within a 24-hour period using the QR code method</li>
      <li>Messages designed to manipulate WhatsApp's spam detection systems or artificially inflate engagement metrics</li>
    </ul>

    <h2>5. Jurisdiction-Specific Compliance Requirements</h2>
    <p>Subscribers must comply with the applicable laws of the jurisdiction(s) in which they operate and in which their End-Users are located. The following sets out key legal requirements by jurisdiction relevant to Platform use.</p>
    <h3>5.1 Singapore</h3>
    <h4>Spam Control Act (Cap. 311A)</h4>
    <p>Singapore's Spam Control Act prohibits sending unsolicited commercial electronic messages (including WhatsApp messages used for commercial purposes) without recipient consent. Subscribers must:</p>
    <ul>
      <li>Obtain verifiable prior consent before sending any commercial message via WhatsApp to a Singapore-based contact</li>
      <li>Include a clear and functional opt-out mechanism in every commercial message</li>
      <li>Include an accurate sender identification in every commercial message</li>
      <li>Honour opt-out requests within 10 business days (best practice: within 24 hours)</li>
      <li>Maintain records of consent for at least 3 years</li>
    </ul>
    <h4>Personal Data Protection Act 2012 (PDPA)</h4>
    <p>The SG PDPA governs the collection, use, and disclosure of personal data through the Platform. Subscribers must:</p>
    <ul>
      <li>Obtain consent before collecting or using personal data of Singapore-based contacts</li>
      <li>Provide a data protection notice before or at the time of data collection</li>
      <li>Not collect more personal data than is necessary for the stated purpose</li>
      <li>Allow contacts to withdraw consent and cease data use accordingly</li>
      <li>Comply with the Do Not Call (DNC) Registry provisions for voice, SMS, and fax — note: WhatsApp messages to personal accounts may be treated as equivalent to SMS for DNC purposes by the PDPC</li>
    </ul>
    <h4>Consumer Protection (Fair Trading) Act (CPFTA)</h4>
    <p>AI Agent communications must not contain unfair practices as defined under the CPFTA, including false claims, misleading representations, high-pressure tactics, or bait-and-switch conduct.</p>

    <h3>5.2 Malaysia</h3>
    <h4>Communications and Multimedia Act 1998 (CMA)</h4>
    <p>The CMA governs electronic communications in Malaysia. Subscribers must not use the Platform to:</p>
    <ul>
      <li>Send content that is indecent, obscene, false, menacing, or offensive with intent to annoy, abuse, threaten, or harass (s.233 CMA — criminal offence carrying up to 1 year imprisonment and/or RM50,000 fine)</li>
      <li>Transmit content prohibited under the Content Code issued by the Communications and Multimedia Content Forum</li>
      <li>Use network facilities in a manner that contravenes the CMA or causes network disruption</li>
    </ul>
    <h4>Personal Data Protection Act 2010 (MY PDPA, Act 709)</h4>
    <p>Subscribers operating in Malaysia must comply with all seven data protection principles of MY PDPA 2010 in respect of Malaysian End-User data processed through the Platform. Key obligations in the context of Platform use:</p>
    <ul>
      <li><strong>Notice (s.7):</strong> Provide written notice (in Bahasa Malaysia or English) of data processing purposes before or at the time of collecting End-User data — including disclosure that an AI system may process their WhatsApp messages</li>
      <li><strong>Consent (s.6):</strong> Obtain explicit consent for collection and processing. For sensitive personal data under s.40, written consent is mandatory</li>
      <li><strong>Opt-out of direct marketing (s.43):</strong> Honour opt-out requests immediately; continuing to send marketing messages to an opted-out contact is a breach of MY PDPA and may constitute a criminal offence</li>
    </ul>
    <h4>Direct Sales and Anti-Pyramid Scheme Act 1993</h4>
    <p>Subscribers engaged in direct sales or multi-level marketing activities must ensure that all AI Agent communications comply with this Act. The Platform must not be used to recruit distributors or solicit sales in a manner prohibited under this legislation.</p>
    <h4>Consumer Protection Act 1999 (CPA 1999)</h4>
    <p>AI Agent communications in Malaysia must not make false, misleading, or deceptive representations about goods or services, including price, quality, availability, or the identity of the supplier, as prohibited under the CPA 1999.</p>

    <h3>5.3 Hong Kong</h3>
    <h4>Unsolicited Electronic Messages Ordinance (UEMO, Cap. 593)</h4>
    <p>The UEMO regulates commercial electronic messages sent to Hong Kong recipients, including messages sent via internet-based messaging platforms such as WhatsApp where used for commercial purposes. Subscribers must:</p>
    <ul>
      <li>Obtain prior consent before sending commercial electronic messages to Hong Kong-based contacts</li>
      <li>Include a clear, accurate, and functional unsubscribe facility in every commercial message</li>
      <li>Process unsubscribe requests within 10 business days</li>
      <li>Not send commercial messages to registered Do-Not-Call numbers or addresses on the UEMO register</li>
      <li>Include the sender's accurate contact information in each message</li>
      <li>Maintain consent records for a minimum of 3 years</li>
    </ul>
    <h4>Personal Data (Privacy) Ordinance (PDPO, Cap. 486)</h4>
    <p>The PDPO governs the collection, holding, processing, and use of personal data in Hong Kong. Subscribers must comply with the six Data Protection Principles (DPPs) in respect of Hong Kong-based End-User data:</p>
    <ul>
      <li><strong>DPP1 (Collection):</strong> Collect personal data only for a lawful purpose directly related to the Subscriber's business; notify data subjects of the purpose at collection</li>
      <li><strong>DPP2 (Accuracy):</strong> Ensure personal data held is accurate and not kept longer than necessary</li>
      <li><strong>DPP3 (Use):</strong> Use personal data only for the purpose for which it was collected, or a directly related purpose, unless the data subject consents</li>
      <li><strong>DPP4 (Security):</strong> Apply appropriate security safeguards</li>
      <li><strong>DPP5 (Openness):</strong> Make available information on the Subscriber's personal data practices</li>
      <li><strong>DPP6 (Access and correction):</strong> Allow data subjects to access and correct their personal data held by the Subscriber</li>
    </ul>
    <h4>Trade Descriptions Ordinance (TDO, Cap. 362)</h4>
    <p>AI Agent messages in Hong Kong must not make false trade descriptions in relation to goods or services. Any automated representation about product quality, pricing, origin, or availability must be accurate and verifiable.</p>
    <h4>Prevention of Bribery Ordinance / Anti-Corruption</h4>
    <p>The Platform must not be used to offer, solicit, or communicate corrupt advantages of any kind, including referral payments that constitute illegal kickbacks under applicable Hong Kong law.</p>

    <h3>5.4 Australia</h3>
    <h4>Spam Act 2003 (Cth)</h4>
    <p>Australia's Spam Act applies to commercial electronic messages sent to Australian recipients. WhatsApp messages used for commercial purposes are 'electronic messages' for the purposes of the Act. Subscribers must:</p>
    <ul>
      <li>Obtain express or inferred consent before sending commercial electronic messages to Australian contacts — express consent is strongly recommended for AI-initiated messages</li>
      <li>Clearly identify the Subscriber's business as the sender in every commercial message</li>
      <li>Include a clear, functional, and cost-free unsubscribe mechanism in every commercial message</li>
      <li>Process unsubscribe requests within 5 business days (the Spam Act requirement — stricter than some other jurisdictions)</li>
      <li>Not use third-party harvested or purchased contact lists where prior consent to WhatsApp messages cannot be demonstrated</li>
      <li>Maintain evidence of consent for each Australian recipient for the duration of the communication relationship</li>
    </ul>
    <h4>Privacy Act 1988 (Cth) and Australian Privacy Principles (APPs)</h4>
    <p>Subscribers processing personal information of Australian individuals must comply with the Australian Privacy Principles (APPs) under the Privacy Act 1988. Relevant obligations in the Platform context:</p>
    <ul>
      <li><strong>APP 1 (Open and transparent management):</strong> Maintain a clearly expressed privacy policy covering AI Agent data practices</li>
      <li><strong>APP 3 (Collection of solicited personal information):</strong> Collect personal information only where reasonably necessary; notify individuals at collection</li>
      <li><strong>APP 5 (Notification of collection):</strong> Notify Australian contacts of the Subscriber's identity, the purposes of collection, and whether WhatsApp data will be disclosed to overseas recipients (including Quicksales.ai's infrastructure)</li>
      <li><strong>APP 7 (Direct marketing):</strong> Only use or disclose personal information for direct marketing if the individual has consented or it is impractical to obtain consent; always include opt-out</li>
      <li><strong>APP 8 (Cross-border disclosure):</strong> Before disclosing personal information to an overseas recipient (including Quicksales.ai), take reasonable steps to ensure the recipient does not breach the APPs in relation to that information</li>
    </ul>
    <h4>Australian Consumer Law (ACL, Schedule 2 of the Competition and Consumer Act 2010)</h4>
    <p>AI Agent communications to Australian contacts must not engage in misleading or deceptive conduct, make false representations, or engage in unconscionable conduct as prohibited under the ACL. This applies to all automated messages, including AI-generated price quotes, product representations, and promotional claims.</p>
    <h4>Do Not Call Register Act 2006 (Cth)</h4>
    <p>Where the Platform is used to initiate voice calls or SMS — including via any voice messaging features — Australian Do Not Call Register requirements apply. Subscribers must screen contact lists against the DNC Register before initiating such communications.</p>

    <h2>6. Anti-Spam and Messaging Compliance Matrix</h2>
    <p>The following table summarises the key consent and opt-out requirements across all four jurisdictions. Subscribers must satisfy the requirements of all jurisdictions applicable to their contacts.</p>
    <table>
      <thead><tr><th>Requirement</th><th>Singapore</th><th>Malaysia</th><th>Hong Kong</th><th>Australia</th></tr></thead>
      <tbody>
        <tr><td><strong>Prior consent required?</strong></td><td>Yes — express consent for commercial messages (SCA)</td><td>Yes — consent under MY PDPA s.6</td><td>Yes — express or deemed consent (UEMO)</td><td>Yes — express or inferred consent (Spam Act)</td></tr>
        <tr><td><strong>Sender ID required?</strong></td><td>Yes — accurate sender identification in every message</td><td>Yes — identity of data user must be disclosed (MY PDPA s.7)</td><td>Yes — accurate contact info required (UEMO s.10)</td><td>Yes — sender must be clearly identified (Spam Act s.17)</td></tr>
        <tr><td><strong>Opt-out mechanism required?</strong></td><td>Yes — functional opt-out in every commercial message</td><td>Yes — right to prevent direct marketing (MY PDPA s.43)</td><td>Yes — unsubscribe facility required (UEMO s.11)</td><td>Yes — functional unsubscribe in every message (Spam Act s.18)</td></tr>
        <tr><td><strong>Opt-out processing deadline</strong></td><td>10 business days (best practice: 24 hrs)</td><td>Immediately / as soon as practicable</td><td>10 business days (UEMO)</td><td>5 business days (Spam Act s.18)</td></tr>
        <tr><td><strong>DNC / suppression register?</strong></td><td>Yes — DNC Registry (PDPA DNC provisions)</td><td>No dedicated DNC register under MY PDPA</td><td>Yes — Do-Not-Call register (UEMO Schedule)</td><td>Yes — DNC Register Act 2006</td></tr>
        <tr><td><strong>Consent record retention</strong></td><td>3 years (recommended)</td><td>Duration of processing + 3 years (MY PDPA)</td><td>3 years (recommended)</td><td>Evidence of consent for duration of relationship</td></tr>
        <tr><td><strong>Regulator</strong></td><td>IMDA / PDPC</td><td>JPDP / MCMC</td><td>OFCA / Privacy Commissioner</td><td>ACMA / OAIC</td></tr>
        <tr><td><strong>Key penalty (max)</strong></td><td>SCA: SGD1M per offence. PDPA: SGD1M</td><td>CMA s.233: RM50,000 / 1 yr. MY PDPA: RM500,000</td><td>UEMO: HKD100,000 per day. PDPO: HKD50,000</td><td>Spam Act: AUD2.22M+ per day (body corporate)</td></tr>
      </tbody>
    </table>

    <h2>7. Regulated Sector Restrictions</h2>
    <p>Certain industry sectors are subject to additional laws that affect how the Platform may be used. Subscribers in the following sectors must ensure their Platform use complies with the relevant sector regulator's requirements in addition to this AUP.</p>
    <h3>7.1 Financial Services</h3>
    <table>
      <thead><tr><th>Jurisdiction</th><th>Applicable Law / Regulator</th><th>Key Restriction for Platform Use</th></tr></thead>
      <tbody>
        <tr><td><strong>Singapore</strong></td><td>Securities and Futures Act (SFA); MAS Notice on Unsolicited Calls; Financial Advisers Act</td><td>AI Agents must not provide financial advice, solicit investment products, or make recommendations on securities without holding an MAS Capital Markets Services Licence or Financial Adviser's Licence. Disclosure that communications are not financial advice is required.</td></tr>
        <tr><td><strong>Malaysia</strong></td><td>Capital Markets and Services Act 2007; Bank Negara Malaysia (BNM) guidelines</td><td>AI Agents must not recommend securities, solicit fund subscriptions, or provide investment advice without a Capital Markets Services Licence. BNM-regulated products (insurance, banking) require specific licensing.</td></tr>
        <tr><td><strong>Hong Kong</strong></td><td>Securities and Futures Ordinance (SFO); HKMA guidelines; Insurance Ordinance</td><td>Solicitation of regulated investment products or insurance via WhatsApp requires an SFC licence (Types 1, 4, or 6 as applicable) or HKIA registration. Cold solicitation of securities via electronic messaging is strictly regulated under SFO.</td></tr>
        <tr><td><strong>Australia</strong></td><td>Corporations Act 2001; ASIC regulatory guides; National Consumer Credit Protection Act 2009</td><td>Providing financial product advice (including general advice) via AI requires an Australian Financial Services Licence (AFSL). AI Agents must not make statements that constitute financial product advice without AFSL authorisation.</td></tr>
      </tbody>
    </table>
    <PolicyCallout tone="danger" title="FINANCIAL SERVICES WARNING">
      <p>Deploying AI Agents to promote, recommend, or explain regulated financial products (investments, insurance, loans, securities) without the required licence is a serious criminal offence in all four jurisdictions. Quicksales.ai does not verify Subscriber licences and accepts no liability for unlicensed financial services conduct. Subscribers in financial services must obtain independent legal advice before deploying AI Agents for product-related communications.</p>
    </PolicyCallout>
    <h3>7.2 Healthcare and Medical Services</h3>
    <table>
      <thead><tr><th>Jurisdiction</th><th>Applicable Law / Regulator</th><th>Key Restriction for Platform Use</th></tr></thead>
      <tbody>
        <tr><td><strong>Singapore</strong></td><td>Private Hospitals and Medical Clinics Act; Singapore Medical Council (SMC) Ethical Code</td><td>AI Agents must not provide medical diagnoses, prescribe treatments, or make clinical recommendations. Appointment booking is permitted. All AI-generated health-related content must be reviewed and approved by a registered medical professional.</td></tr>
        <tr><td><strong>Malaysia</strong></td><td>Private Healthcare Facilities and Services Act 1998 (PHFSA); Malaysian Medical Council guidelines</td><td>AI Agents may automate appointment booking and general clinic information but must not replicate the functions of a registered medical practitioner. Drug and supplement advertising is subject to the Medicines (Advertisement and Sale) Act 1956.</td></tr>
        <tr><td><strong>Hong Kong</strong></td><td>Medical Registration Ordinance; Pharmacy and Poisons Ordinance; Department of Health guidelines</td><td>AI Agents must not simulate clinical consultations, provide treatment recommendations, or advertise prescription-only medicines. Registered medical practitioners are prohibited from advertising specific clinical services in ways that attract patients improperly.</td></tr>
        <tr><td><strong>Australia</strong></td><td>Health Practitioner Regulation National Law; TGA Advertising Code; Privacy Act (health information)</td><td>Health information is sensitive information under the Privacy Act and APP 3. AI Agents must not provide clinical diagnoses. Therapeutic goods advertising must comply with the TGA Advertising Code. Telehealth services via AI must comply with AHPRA standards.</td></tr>
      </tbody>
    </table>
    <h3>7.3 Legal Services</h3>
    <p>AI Agents must not provide legal advice, draft legal documents, or represent that they are qualified to interpret the law, in any jurisdiction. Automated responses about legal rights, obligations, or remedies must include a clear disclaimer that the information is not legal advice and that the End-User should consult a qualified lawyer.</p>
    <h3>7.4 Real Estate</h3>
    <table>
      <thead><tr><th>Jurisdiction</th><th>Applicable Law / Regulator</th><th>Key Restriction</th></tr></thead>
      <tbody>
        <tr><td>Singapore</td><td>Estate Agents Act; CEA regulations</td><td>AI Agents involved in property transactions must be under the supervision of a registered real estate agent (salesperson). Automated property valuations or investment representations require appropriate disclaimers.</td></tr>
        <tr><td>Malaysia</td><td>Valuers, Appraisers, Estate Agents and Property Managers Act 1981</td><td>Property marketing communications must accurately represent listing details. AI Agents may not provide property valuations.</td></tr>
        <tr><td>Hong Kong</td><td>Estate Agents Ordinance (Cap. 511)</td><td>Estate agency work must be conducted by licensed agents. AI Agents may support booking and enquiry handling but must not conduct regulated estate agency activities.</td></tr>
        <tr><td>Australia</td><td>Property and Stock Agents Act (NSW) and equivalent state laws</td><td>Representation of properties for sale or lease is a licensed activity. AI Agents assisting with property transactions must operate under the supervision of a licensed agent.</td></tr>
      </tbody>
    </table>
    <h3>7.5 Education</h3>
    <p>AI Agents used by educational institutions must not make misleading claims about qualification recognition, course outcomes, or employment prospects. In Australia, representations about higher education must comply with the Australian Consumer Law and TEQSA standards where applicable.</p>

    <h2>8. Content Standards for AI Agents and Automated Messages</h2>
    <h3>8.1 Mandatory Disclosures in AI Agent Communications</h3>
    <p>All AI Agent communications sent through the Platform must include, at minimum:</p>
    <ul>
      <li><strong>Business identity:</strong> The name of the Subscriber's business must be clearly disclosed in the first message of every new conversation</li>
      <li><strong>AI nature:</strong> If a contact asks whether they are speaking to a human or a machine, the AI Agent must disclose that it is an AI — no exceptions</li>
      <li><strong>Opt-out path:</strong> Every message sequence must include, or make clearly accessible, a means to opt out of further communications</li>
      <li><strong>Escalation path:</strong> Contacts must be able to reach a human representative if they request it or if the AI Agent cannot resolve their query</li>
    </ul>
    <h3>8.2 Prohibited Content in AI Agent Messages</h3>
    <p>AI Agents must not generate, transmit, or facilitate:</p>
    <ul>
      <li>False or misleading statements about the Subscriber's products, services, pricing, availability, or business identity</li>
      <li>Testimonials or reviews that have not been given by genuine customers</li>
      <li>Urgency or scarcity claims that are fabricated or artificially manufactured ('Only 2 left!' when stock is ample)</li>
      <li>Pyramid scheme, multi-level marketing, or chain communication structures</li>
      <li>Get-rich-quick schemes, investment return guarantees, or unrealistic financial projections</li>
      <li>Content that discriminates on the basis of race, religion, nationality, gender, sexual orientation, disability, or any other protected characteristic under applicable law</li>
      <li>Content that reproduces copyrighted material without authorisation</li>
      <li>Politically partisan content or content designed to influence electoral outcomes</li>
    </ul>
    <h3>8.3 AI Accuracy and Hallucination Risk</h3>
    <p>Subscribers acknowledge that AI-generated content may contain errors, inaccuracies, or 'hallucinations'. Subscribers are solely responsible for:</p>
    <ul>
      <li>Reviewing and approving AI Agent prompts and response templates before deployment</li>
      <li>Implementing human review checkpoints for AI-generated content in regulated industries</li>
      <li>Correcting and retraining AI Agent configurations that produce inaccurate responses</li>
      <li>All consequences arising from AI-generated content sent to End-Users, including regulatory penalties, consumer complaints, and reputational damage</li>
    </ul>
    <p>Quicksales.ai accepts no liability for inaccurate, misleading, or harmful content generated by AI Agents that have been configured by Subscribers.</p>

    <h2>9. Data Handling Obligations Under This AUP</h2>
    <h3>9.1 Consent Management</h3>
    <p>Subscribers must maintain a verifiable record of consent for every contact to whom commercial or automated messages are sent. Records must include:</p>
    <ul>
      <li>The date and method of consent</li>
      <li>The specific purpose(s) consented to</li>
      <li>The contact's identifier (phone number or email)</li>
      <li>Any opt-out or withdrawal of consent, and the date it was actioned</li>
    </ul>
    <p>Consent records must be retained for the minimum period specified in the applicable jurisdiction (see the Anti-Spam Compliance Matrix in Section 6) and must be produced to Quicksales.ai or any regulatory authority upon request.</p>
    <h3>9.2 Contact List Standards</h3>
    <p>All contact lists uploaded to or managed through the Platform must meet the following standards:</p>
    <ul>
      <li>Lists must not include contacts who have previously opted out of communications from the Subscriber's business</li>
      <li>Lists must not be purchased from third parties unless accompanied by verifiable evidence of prior consent to WhatsApp communications</li>
      <li>Lists must not include contacts scraped or harvested from websites, social media platforms, or other sources without explicit consent</li>
      <li>Lists must be deduplicated against the Subscriber's own suppression list before any campaign is executed</li>
    </ul>
    <h3>9.3 Data Minimisation</h3>
    <p>Subscribers must collect and upload only the minimum personal data necessary for the stated business purpose. The Platform must not be used to accumulate personal data beyond what is operationally required.</p>
    <h3>9.4 End-User Rights Obligations</h3>
    <p>Subscribers must promptly and effectively handle data subject rights requests from their End-Users, including:</p>
    <ul>
      <li><strong>Access requests</strong> — within 30 days (SG/GDPR) or 21 days (MY PDPA)</li>
      <li><strong>Correction requests</strong> — update contact records on the Platform within the required timeframe</li>
      <li><strong>Erasure / deletion requests</strong> — remove contact data from the Platform and suppress the contact from future communications</li>
      <li><strong>Opt-out requests</strong> — remove from all communication lists and honour within the jurisdiction's required timeframe</li>
    </ul>

    <h2>10. Enforcement, Suspension, and Consequences of Breach</h2>
    <h3>10.1 Monitoring</h3>
    <p>Quicksales.ai reserves the right, but is not obligated, to monitor Platform usage to detect violations of this AUP, including:</p>
    <ul>
      <li>Unusual message volume spikes that may indicate bulk unsolicited messaging</li>
      <li>AI Agent configurations containing content that breaches content standards</li>
      <li>Use patterns consistent with prohibited activities</li>
    </ul>
    <p>Monitoring does not make Quicksales.ai responsible for Subscriber conduct or for detecting all violations. Subscribers remain solely responsible for their compliance.</p>
    <h3>10.2 Reporting Violations</h3>
    <p>Quicksales.ai encourages reporting of suspected AUP violations by:</p>
    <ul>
      <li>Subscribers who become aware of misuse by other Subscribers — report to: support@quicksales.ai</li>
      <li>End-Users who receive communications they believe violate this AUP — report to: support@quicksales.ai</li>
      <li>Third parties with evidence of AUP breach — report to: support@quicksales.ai</li>
    </ul>
    <p>Reports should include the Subscriber's business name (if known), the nature of the conduct, date(s) of occurrence, and any supporting evidence (screenshots, message records).</p>
    <h3>10.3 Consequences of Breach</h3>
    <p>Breaches of this AUP may result in any one or more of the following enforcement actions, applied at Quicksales.ai's sole discretion:</p>
    <table>
      <thead><tr><th>Severity</th><th>Typical Conduct</th><th>Enforcement Action</th></tr></thead>
      <tbody>
        <tr><td><strong>Level 1 — Minor</strong></td><td>Technical policy breach; inadvertent non-compliance; first occurrence of low-risk conduct</td><td>Written notice; requirement to remediate within 7 days; compliance review</td></tr>
        <tr><td><strong>Level 2 — Moderate</strong></td><td>Repeated minor breaches; non-compliance after notice; moderate risk to End-Users or third parties</td><td>Suspension of specific Platform features; remediation plan required; formal warning on account record</td></tr>
        <tr><td><strong>Level 3 — Serious</strong></td><td>Deliberate violations; significant data protection breaches; illegal conduct; harm to End-Users</td><td>Immediate account suspension (with or without notice); referral to relevant regulatory authority; no refund of prepaid fees</td></tr>
        <tr><td><strong>Level 4 — Critical</strong></td><td>Criminal conduct; CSAM; terrorism facilitation; systematic fraud; mass unsolicited messaging</td><td>Immediate permanent account termination; referral to law enforcement and relevant regulatory authorities; legal proceedings</td></tr>
      </tbody>
    </table>
    <p>Quicksales.ai reserves the right to bypass the above escalation sequence and proceed directly to termination where the severity of the breach warrants it, including but not limited to Level 4 conduct.</p>
    <h3>10.4 Regulatory Cooperation</h3>
    <p>Quicksales.ai will cooperate fully with regulatory authorities in Singapore (PDPC, IMDA, MAS), Malaysia (JPDP, MCMC, SC Malaysia), Hong Kong (OFCA, SFC, PCPD), and Australia (ACMA, OAIC, ASIC, APRA) in the investigation of any complaint or suspected breach involving the Platform. Quicksales.ai may disclose Subscriber information to regulatory authorities where required by applicable law, without prior notice to the Subscriber.</p>
    <h3>10.5 Subscriber's Indemnity</h3>
    <p>Subscribers agree to indemnify, defend, and hold harmless Quicksales.ai, its affiliates, officers, directors, employees, and agents from any claims, damages, penalties, fines, regulatory actions, or legal costs (including reasonable legal fees) arising from:</p>
    <ul>
      <li>The Subscriber's breach of this AUP</li>
      <li>The Subscriber's violation of any applicable law through or in connection with use of the Platform</li>
      <li>Any claim by an End-User, third party, or regulatory authority arising from the Subscriber's AI Agent configurations or communications</li>
      <li>Any enforcement action taken by Meta, WhatsApp, or any Third-Party Platform arising from the Subscriber's use of the QR code method or other Platform features</li>
    </ul>

    <h2>11. Quicksales.ai's Responsibilities Under This AUP</h2>
    <p>Quicksales.ai accepts the following obligations in respect of Platform provision:</p>
    <ul>
      <li>To maintain a Platform that is technically capable of supporting compliant use as described in this AUP</li>
      <li>To publish and maintain up-to-date documentation on Platform features relevant to compliance</li>
      <li>To notify Subscribers of material changes to this AUP at least 14 days before they take effect</li>
      <li>To investigate good-faith abuse reports within 10 business days</li>
      <li>To cooperate with regulatory authorities in connection with Platform-related investigations</li>
    </ul>
    <p>Quicksales.ai does not accept responsibility for:</p>
    <ul>
      <li>The content, accuracy, or legality of AI Agent configurations created by Subscribers</li>
      <li>Messages sent by Subscribers or their AI Agents to End-Users</li>
      <li>Subscriber compliance with applicable laws in any jurisdiction</li>
      <li>The conduct of Third-Party Platforms including WhatsApp and Meta</li>
      <li>Account bans or enforcement actions initiated by Meta or WhatsApp against Subscriber accounts</li>
    </ul>

    <h2>12. Document Governance and Review</h2>
    <h3>12.1 Review Schedule</h3>
    <p>This AUP will be reviewed and updated at least annually, and whenever there is a material change to:</p>
    <ul>
      <li>The laws of Singapore, Malaysia, Hong Kong, or Australia that affect Platform use</li>
      <li>Quicksales.ai's Platform features or service offering</li>
      <li>WhatsApp or Meta's Terms of Service or policies</li>
      <li>Regulatory guidance issued by PDPC, JPDP, OFCA/PCPD, ACMA, or OAIC</li>
    </ul>
    <h3>12.2 Notification of Changes</h3>
    <p>Material changes to this AUP will be communicated to Subscribers by email and in-platform notice at least 14 days before the effective date. Where changes are required urgently to respond to law or regulatory direction, they may take effect immediately with notice.</p>
    <h3>12.3 Governing Law and Dispute Resolution</h3>
    <p>This AUP is governed by the laws of Singapore. Disputes arising in connection with this AUP are subject to the dispute resolution mechanism set out in Quicksales.ai's Terms and Conditions of Service (SIAC arbitration, Singapore seat).</p>
    <h3>12.4 Related Documents</h3>
    <p>This AUP should be read together with the following Quicksales.ai documents, all of which are available at quicksales.ai/legal:</p>
    <ul>
      <li>Terms and Conditions of Service v1.0</li>
      <li>Privacy Policy v3.0</li>
      <li>Cookie Policy</li>
      <li>Data Processing Agreement (available on request)</li>
    </ul>

    <h2>13. AUP Contacts</h2>
    <table>
      <tbody>
        <tr><td><strong>AUP violations / abuse</strong></td><td>support@quicksales.ai</td></tr>
        <tr><td><strong>General compliance queries</strong></td><td>support@quicksales.ai</td></tr>
        <tr><td><strong>Data protection / privacy</strong></td><td>support@quicksales.ai</td></tr>
        <tr><td><strong>General product support</strong></td><td>support@quicksales.ai</td></tr>
         <tr><td><strong>Registered address</strong></td><td>Quicksales.ai, Quicksales Pte Ltd, Singapore 179435</td></tr>
      </tbody>
    </table>

    <hr />
    <p className="text-center font-semibold">END OF ACCEPTABLE USE POLICY — VERSION 1.0</p>
    <p><em>By accessing or using the Quicksales.ai Platform, the Subscriber and all authorised users confirm that they have read, understood, and agree to be bound by this Acceptable Use Policy. This AUP forms part of the Quicksales.ai Terms and Conditions of Service. Breach of this AUP constitutes a material breach of those Terms.</em></p>
    <p className="text-sm text-muted-foreground">© 2026 Quicksales.ai. All Rights Reserved.<br/>Applicable jurisdictions: Singapore • Malaysia • Hong Kong • Australia | Document suite: T&amp;C v1.0 • Privacy Policy v3.0 • AUP v1.0</p>
  </PolicyLayout>
);

export default AcceptableUse;
