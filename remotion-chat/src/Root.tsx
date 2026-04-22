import { Composition } from "remotion";
import { ChatVideo } from "./ChatVideo";
import { SchedulingVideo, SCHEDULE_TOTAL } from "./SchedulingVideo";
import { AgentSelectVideo, AGENT_SELECT_DURATION } from "./AgentSelectVideo";

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
    width={1200}
    height={1200}
  />
  </>
);