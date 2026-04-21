import { Composition } from "remotion";
import { ChatVideo } from "./ChatVideo";

export const RemotionRoot = () => (
  <Composition
    id="main"
    component={ChatVideo}
    durationInFrames={210}
    fps={30}
    width={1200}
    height={1200}
  />
);