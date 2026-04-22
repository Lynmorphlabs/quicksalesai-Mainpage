import { Composition } from "remotion";
import { ChatVideo } from "./ChatVideo";
import { SchedulingVideo, SCHEDULE_TOTAL } from "./SchedulingVideo";

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
  </>
);