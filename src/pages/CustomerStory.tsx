import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { stories } from "./Customers";
import greystoneDashboard from "@/assets/greystone-dashboard.png.asset.json";
import greystoneWhatsapp from "@/assets/greystone-whatsapp.png.asset.json";
import asiaCeoConnect from "@/assets/asiaceo-connect.png.asset.json";
import asiaCeoEvents from "@/assets/asiaceo-events.png.asset.json";

const details: Record<string, {
  intro: string;
  problem: string;
  problemPoints: string[];
  goals: string[];
  solutionIntro: string;
  solution: string[];
  knowledgeBase: string[];
  leadDashboard: string[];
  exampleFlow: { speaker: string; text: string }[];
  handoff: string[];
  results: string;
  resultsPoints: string[];
  quote: { text: string; author: string; role: string };
  screenshots?: { src: string; alt: string; caption: string }[];
}> = {
  "greystone": {
    intro:
      "Greystone is a financial consultant agency and private loan brokerage that helps customers explore financing options such as business loans, property loans and personal loans.\n\nFor Greystone, customer enquiries are not simple. A customer may ask about business working capital, property refinancing, bridging loans, second charge loans or personal financing. Each enquiry needs proper qualification before an advisor can review the case and recommend the next step.\n\nTo support this process, Greystone uses a WhatsApp AI Agent connected to a backend lead dashboard and a Google Drive synced knowledge base. This allows the team to handle customer enquiries faster, keep loan information updated and pass cleaner lead details to advisors.",
    problem:
      "Loan enquiries are often complex and time-sensitive.\n\nCustomers may not know which loan category applies to them. Some need a secured business loan. Some need refinancing with cash-out. Some need a bridging loan before property sale proceeds are received. Others may need a personal loan and require clear guidance based on compliant lending parameters.",
    problemPoints: [
      "What type of loan are you looking for?",
      "What is the loan purpose?",
      "Have you applied with any banks?",
      "Were you rejected, and why?",
      "What property or business documents do you have?",
      "How soon do you need the funds?",
    ],
    goals: [
      "Guide customers to the correct loan category.",
      "Ask the right questions based on the selected loan type.",
      "Capture lead information clearly.",
      "Collect document requirements earlier in the conversation.",
      "Allow advisors to review qualified leads from a dashboard.",
      "Sync updated product and loan information from Google Drive.",
      "Keep AI replies aligned with the latest loan packages, rates and document checklists.",
      "Reduce repetitive manual work for the team.",
    ],
    solutionIntro:
      "Greystone implemented a WhatsApp AI Agent supported by a backend lead dashboard.",
    solution: [
      "Identifies the customer's loan category: Business Loan, Property Loan or Personal Loan.",
      "Follows structured conversation flows per loan type (e.g. unsecured vs secured business loan, new purchase vs refinancing vs 2nd charge vs bridging).",
      "Collects information needed for advisors to review the case — not just FAQ replies.",
    ],
    knowledgeBase: [
      "Greystone's product information is stored in Google Drive, including loan features, FAQs, conversation scripts and product flow documents.",
      "The dashboard connects to Google Drive so the team can sync updated files into the AI knowledge base.",
      "If Greystone changes a loan package, pricing, loan feature, interest rate, document checklist or conversation script, the team updates the source file in Google Drive and syncs it from the dashboard.",
      "Once synced, the AI Agent refers to the updated information when replying to customers — no need to rebuild the chatbot manually.",
    ],
    leadDashboard: [
      "View incoming leads, staff assignment, customer details and knowledge base status in one place.",
      "See which customers have enquired and what loan type they are interested in.",
      "Check what information has already been collected and which advisor should follow up.",
      "Track what documents are still needed and whether the AI knowledge base is updated.",
      "Turn WhatsApp conversations into structured lead records instead of leaving every enquiry inside the chat app.",
    ],
    exampleFlow: [
      { speaker: "Customer", text: "Hi, I need help with a property loan." },
      { speaker: "AI Agent", text: "Sure. What type of property loan are you looking for?\n\n• New Purchase\n• Refinancing with Cash-Out\n• 2nd Charge / Caveat Loan\n• Part Purchase / Buy-Out\n• Bridging Loan" },
      { speaker: "Customer", text: "Refinancing with cash-out." },
      { speaker: "AI Agent", text: "Got it. May I know the purpose of the cash-out? For example, working capital, debt consolidation or another purpose?" },
      { speaker: "Customer", text: "Working capital." },
      { speaker: "AI Agent", text: "Have you applied with any banks before? If yes, which banks and what was the reason for rejection?" },
    ],
    handoff: [
      "At the end of the conversation, the customer is given clear next steps: Upload Documents, Speak to Advisor, or Request Callback.",
      "The lead details can be sent to Greystone's team or viewed from the dashboard.",
      "Advisors do not need to restart the conversation from zero — they can see what the customer wants, what information was collected and what documents are needed.",
    ],
    results:
      "With the WhatsApp AI Agent, Google Drive sync and lead dashboard, Greystone can manage loan enquiries in a more structured way.",
    resultsPoints: [
      "Customers get faster and clearer guidance through WhatsApp.",
      "Advisors receive better-qualified leads with more complete background information.",
      "The team can update loan product information through Google Drive and sync it into the AI knowledge base without rebuilding the chatbot manually.",
      "This turns Greystone's WhatsApp channel into a proper loan intake and advisor handoff system.",
    ],
    quote: {
      text: "Our advisors no longer restart conversations from zero. By the time a lead reaches them, the loan type, purpose and documents are already captured.",
      author: "Greystone Operations",
      role: "Loan Brokerage Team",
    },
    screenshots: [
      {
        src: greystoneWhatsapp.url,
        alt: "Greystone WhatsApp AI Agent qualifying a loan enquiry",
        caption: "WhatsApp AI Agent qualifies the loan type, captures details and replies with the latest loan package terms.",
      },
      {
        src: greystoneDashboard.url,
        alt: "Greystone lead dashboard with Google Drive synced knowledge base",
        caption: "Lead dashboard with Google Drive synced knowledge base — update a doc, sync, and the AI reflects the latest packages.",
      },
    ],
  },
  "foody-asia": {
    intro:
      "Asia CEO Community is a business network for CEOs, founders, investors and senior executives across Asia. Members join the community to build high-value connections, attend exclusive events, explore partnerships and access leadership opportunities.\n\nAs the community grows, WhatsApp becomes an important channel for member engagement. People want quick answers, relevant introductions and event information without going through long forms or waiting for manual replies.\n\nTo support this, Asia CEO Community uses a WhatsApp AI Concierge named Alex to help members and prospects search for business connections, request introductions, check upcoming events, RSVP and ask about membership benefits.",
    problem:
      "For a premium business community, the experience needs to feel personal and fast.\n\nMembers and prospects may message the team with many different requests:",
    problemPoints: [
      "Can you connect me with F&B CEOs in Singapore?",
      "Are there any upcoming CEO events?",
      "Can I RSVP for this event?",
      "What are the membership benefits?",
      "Can someone explain the membership packages?",
    ],
    goals: [
      "Give members and prospects instant support through WhatsApp.",
      "Help users find relevant CEOs, investors, founders and executives.",
      "Guide users when a search is too narrow.",
      "Allow introduction requests to be logged clearly.",
      "Show upcoming events and support RSVP requests.",
      "Explain membership benefits in a simple way.",
      "Capture high-intent membership leads for the team.",
      "Keep human review for important actions like introductions and membership follow-up.",
    ],
    solutionIntro:
      "Asia CEO Community implemented a WhatsApp AI Concierge that acts as the first point of contact for members and prospects. When someone messages the WhatsApp number, the AI introduces itself as Alex, the Asia CEO Community concierge.",
    solution: [
      "Find relevant business connections.",
      "Show upcoming events and RSVP options.",
      "Assist with membership and benefits.",
    ],
    knowledgeBase: [
      "If a user asks to connect with F&B CEOs in Singapore and there are no exact matches, the AI suggests broadening to food and beverage founders, senior leadership or hospitality leaders.",
      "It can also expand the location across Southeast Asia — Singapore, Hong Kong and Malaysia — to surface relevant matches.",
      "When the user broadens the request, the AI returns matches such as managing directors or managing partners in the F&B industry.",
      "Introduction requests are logged with the purpose of the connection (partnership, distribution or investment) so the team has context before facilitating.",
    ],
    leadDashboard: [
      "Users can ask 'What are your upcoming events?' and the AI replies with name, date, time and location.",
      "Examples include the New Year Dinner in Singapore, Startup Valuation Workshop in Hong Kong and business dialogues in Kuala Lumpur.",
      "Users RSVP directly in chat by providing their name and selecting the event.",
      "The AI logs the RSVP and passes details to the events team for confirmation — fewer back-and-forth messages.",
      "For membership questions, the AI explains benefits like unlimited searches, exclusive events, thought leadership exposure and priority introductions, and captures qualified leads for the membership team.",
    ],
    exampleFlow: [],
    handoff: [
      "The AI prepares the request, captures the user's intent and hands it over to the right team member.",
      "For sensitive or high-value actions like business introductions, RSVP confirmation or membership package discussion, the AI logs the request and lets the human team follow up.",
      "This keeps the experience professional while reducing repetitive admin work.",
    ],
    results:
      "With the WhatsApp AI Concierge, Asia CEO Community delivers a faster and more structured member experience. Members and prospects can search for relevant connections, request introductions, discover events, RSVP and ask about membership benefits — all directly through WhatsApp.",
    resultsPoints: [
      "Faster response to member enquiries",
      "More structured introduction requests",
      "Easier event RSVP capture",
      "More qualified membership leads",
      "Less repetitive admin work",
      "Better premium member experience",
    ],
    quote: {
      text: "Alex feels like a real concierge for our members. Introductions, events and membership enquiries all come in with the right context — our team just follows up.",
      author: "Asia CEO Community",
      role: "Membership & Events Team",
    },
    screenshots: [
      {
        src: asiaCeoConnect.url,
        alt: "Asia CEO Community WhatsApp concierge suggesting F&B leadership matches",
        caption: "Alex broadens an F&B CEO search to F&B leaders across Singapore and logs the introduction request with purpose.",
      },
      {
        src: asiaCeoEvents.url,
        alt: "Asia CEO Community WhatsApp concierge handling an event RSVP",
        caption: "Members can browse upcoming events and RSVP directly in WhatsApp — the AI logs details for the events team.",
      },
    ],
  },
};

function ScreenshotCarousel({ shots }: { shots: { src: string; alt: string; caption: string }[] }) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? shots.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === shots.length - 1 ? 0 : i + 1));

  return (
    <div className="rounded-2xl border border-border/60 bg-card overflow-hidden shadow-soft">
      <div className="relative bg-muted/30">
        <img
          src={shots[index].src}
          alt={shots[index].alt}
          className="w-full h-auto max-h-[520px] object-contain mx-auto block"
          loading="lazy"
        />
        <button
          onClick={prev}
          aria-label="Previous screenshot"
          className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-bubble text-foreground hover:bg-white transition-smooth"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          onClick={next}
          aria-label="Next screenshot"
          className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-bubble text-foreground hover:bg-white transition-smooth"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="px-5 py-4 border-t border-border/60 flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed">{shots[index].caption}</p>
        <div className="flex gap-2 shrink-0">
          {shots.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to screenshot ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const CustomerStory = () => {
  const { slug } = useParams();
  const story = stories.find((s) => s.slug === slug);
  const detail = slug ? details[slug] : undefined;

  const labels = slug === "foody-asia"
    ? {
        kb: "Connection Flow",
        kbIntro: "Alex understands natural language requests and guides users when a search is too narrow:",
        dashboard: "Events & Membership",
        dashboardIntro: "The same WhatsApp AI Concierge supports event discovery, RSVPs and membership enquiries:",
        handoff: "Human Handoff",
      }
    : {
        kb: "Google Drive Synced Knowledge Base",
        kbIntro: "",
        dashboard: "Lead Dashboard",
        dashboardIntro:
          "Greystone also has a dashboard to manage leads and customer conversations. Instead of leaving every enquiry inside WhatsApp, the dashboard helps the team view incoming leads, staff assignment, customer details and knowledge base status in one place.",
        handoff: "Advisor Handoff",
      };

  if (!story || !detail) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container py-24 text-center">
          <h1 className="text-3xl font-bold">Story not found</h1>
          <Button asChild className="mt-6 rounded-full">
            <Link to="/customers">View all customer stories</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className={`relative overflow-hidden border-b border-border/40 bg-gradient-to-br ${story.color}`}>
          <div className="container py-16 md:py-20 grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <Link
                to="/customers"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-smooth"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> All customer stories
              </Link>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {story.industry} · {story.region}
              </p>
              <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
                {story.headline}
              </h1>
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-2xl">
                {story.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-3xl md:text-4xl font-bold">{m.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={story.image}
                alt={story.headline}
                className="w-full h-auto rounded-3xl shadow-elevated object-cover aspect-[4/3]"
                loading="eager"
              />
            </div>
          </div>
        </section>

        <section className="container py-16 grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2 space-y-14">
            {/* Intro */}
            {detail.intro && (
              <div className="space-y-4">
                {detail.intro.split("\n\n").map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
                ))}
              </div>
            )}

            {/* Problem */}
            {detail.problem && (
              <div>
                <h2 className="text-2xl font-semibold mb-3">The Problem</h2>
                {detail.problem.split("\n\n").map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-3">{p}</p>
                ))}
                {detail.problemPoints.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {detail.problemPoints.map((item) => (
                      <li key={item} className="flex gap-3 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Goals */}
            {detail.goals.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Goals</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {story.company} wanted to:
                </p>
                <ul className="space-y-3">
                  {detail.goals.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Solution */}
            {detail.solutionIntro && (
              <div>
                <h2 className="text-2xl font-semibold mb-3">The QuickSales AI Solution</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{detail.solutionIntro}</p>
                <ul className="space-y-3 mb-6">
                  {detail.solution.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Knowledge Base */}
            {detail.knowledgeBase.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Google Drive Synced Knowledge Base</h3>
                <ul className="space-y-3">
                  {detail.knowledgeBase.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Lead Dashboard */}
            {detail.leadDashboard.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Lead Dashboard</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Greystone also has a dashboard to manage leads and customer conversations. Instead of leaving every enquiry inside WhatsApp, the dashboard helps the team view incoming leads, staff assignment, customer details and knowledge base status in one place.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This gives Greystone better visibility over the full process:
                </p>
                <ul className="space-y-3">
                  {detail.leadDashboard.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Screenshot Gallery */}
            {detail.screenshots && detail.screenshots.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Inside the system</h2>
                <ScreenshotCarousel shots={detail.screenshots} />
              </div>
            )}

            {/* Advisor Handoff */}
            {detail.handoff.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Advisor Handoff</h3>
                <ul className="space-y-3">
                  {detail.handoff.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Results */}
            {detail.results && (
              <div>
                <h2 className="text-2xl font-semibold mb-3">Results</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{detail.results}</p>
                {detail.resultsPoints.length > 0 && (
                  <ul className="space-y-3">
                    {detail.resultsPoints.map((item) => (
                      <li key={item} className="flex gap-3 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Fallback for non-Greystone stories */}
            {detail.solution.length > 0 && !detail.solutionIntro && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">The solution</h2>
                <ul className="space-y-3">
                  {detail.solution.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {detail.resultsPoints.length > 0 && !detail.results && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">The results</h2>
                <ul className="space-y-3">
                  {detail.resultsPoints.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="rounded-2xl border border-border/60 bg-card/50 p-6 sticky top-24">
              <p className="text-base leading-relaxed">&ldquo;{detail.quote.text}&rdquo;</p>
              <div className="mt-4 pt-4 border-t border-border/40">
                <p className="text-sm font-semibold">{detail.quote.author}</p>
                <p className="text-xs text-muted-foreground">{detail.quote.role}</p>
              </div>
              <Button asChild className="mt-6 w-full bg-gradient-primary hover:opacity-90 rounded-full">
                <a href="/#pricing">Get the same results</a>
              </Button>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerStory;
