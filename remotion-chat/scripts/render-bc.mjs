import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition, openBrowser } from "@remotion/renderer";
import path from "path";
const bundled = await bundle({ entryPoint: path.resolve("/dev-server/remotion-chat/src/index.ts"), webpackOverride: (c) => c });
const browser = await openBrowser("chrome", {
  browserExecutable: process.env.PUPPETEER_EXECUTABLE_PATH ?? "/bin/chromium",
  chromiumOptions: { args: ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"] },
  chromeMode: "chrome-for-testing",
});
const composition = await selectComposition({ serveUrl: bundled, id: "broadcast", puppeteerInstance: browser });
await renderMedia({ composition, serveUrl: bundled, codec: "h264", outputLocation: "/dev-server/src/assets/feature-broadcast.mp4", puppeteerInstance: browser, muted: true, concurrency: 1 });
await browser.close({ silent: false });
console.log("✅", composition.durationInFrames);
