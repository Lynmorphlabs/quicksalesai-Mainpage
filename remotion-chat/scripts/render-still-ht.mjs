import { bundle } from "@remotion/bundler";
import { renderStill, selectComposition, openBrowser } from "@remotion/renderer";
import path from "path";
const bundled = await bundle({ entryPoint: path.resolve("/dev-server/remotion-chat/src/index.ts"), webpackOverride: (c) => c });
const browser = await openBrowser("chrome", {
  browserExecutable: process.env.PUPPETEER_EXECUTABLE_PATH ?? "/bin/chromium",
  chromiumOptions: { args: ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"] },
  chromeMode: "chrome-for-testing",
});
const composition = await selectComposition({ serveUrl: bundled, id: "human-takeover", puppeteerInstance: browser });
const frameArg = parseInt(process.argv[2] ?? "240", 10);
await renderStill({ composition, serveUrl: bundled, output: `/tmp/ht-${frameArg}.png`, frame: frameArg, puppeteerInstance: browser });
await browser.close({ silent: false });
console.log("ok", frameArg);
