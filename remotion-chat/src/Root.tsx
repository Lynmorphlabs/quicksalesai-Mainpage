import { Composition } from "remotion";
import { ChatVideo } from "./ChatVideo";
import { SchedulingVideo, SCHEDULE_TOTAL } from "./SchedulingVideo";
import { AgentSelectVideo, AGENT_SELECT_DURATION } from "./AgentSelectVideo";
import { KnowledgeBaseVideo, KB_DURATION } from "./KnowledgeBaseVideo";
import { ChatWidgetVideo, CW_DURATION } from "./ChatWidgetVideo";
import { LeadScraperVideo, LS_DURATION } from "./LeadScraperVideo";
import { CallAgentVideo, CA_DURATION } from "./CallAgentVideo";

export const RemotionRoot = () => (
  <>
  <Composition
    id="main"
    component={ChatVideo}
    durationInFrames={210}
    fps={30}
    width={1200}
    height={1200}
  />
  <Composition
    id="scheduling"
    component={SchedulingVideo}
    durationInFrames={SCHEDULE_TOTAL}
    fps={30}
    width={1200}
    height={1200}
  />
  <Composition
    id="agent-select"
    component={AgentSelectVideo}
    durationInFrames={AGENT_SELECT_DURATION}
    fps={30}
    width={1600}
    height={1200}
  />
  <Composition
    id="knowledge-base"
    component={KnowledgeBaseVideo}
    durationInFrames={KB_DURATION}
    fps={30}
    width={1600}
    height={1200}
  />
  <Composition
    id="chat-widget"
    component={ChatWidgetVideo}
    durationInFrames={CW_DURATION}
    fps={30}
    width={1600}
    height={1200}
  />
  <Composition
    id="lead-scraper"
    component={LeadScraperVideo}
    durationInFrames={LS_DURATION}
    fps={30}
    width={1600}
    height={1200}
  />
  <Composition
    id="call-agent"
    component={CallAgentVideo}
    durationInFrames={CA_DURATION}
    fps={30}
    width={1600}
    height={1200}
  />
  </>
);