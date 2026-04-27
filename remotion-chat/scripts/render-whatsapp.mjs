import { bundle } from "@remotion/bundler";
import { renderMedia, renderStill, selectComposition, openBrowser } from "@remotion/renderer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const mode = process.argv[2] ?? "video"; // "still" or "video"

const bundled = await bundle({
  entryPoint: path.resolve(__dirname, "../src/index.ts"),
  webpackOverride: (c) => c,
});

const browser = await openBrowser("chrome", {
  browserExecutable: process.env.PUPPETEER_EXECUTABLE_PATH ?? "/bin/chromium",
  chromiumOptions: {
    args: ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"],
  },
  chromeMode: "chrome-for-testing",
});

const composition = await selectComposition({
  serveUrl: bundled,
  id: "whatsapp",
  puppeteerInstance: browser,
});

if (mode === "still") {
  const frame = parseInt(process.argv[3] ?? "120", 10);
  await renderStill({
    composition,
    serveUrl: bundled,
    output: `/tmp/whatsapp-frame-${frame}.png`,
    frame,
    puppeteerInstance: browser,
  });
  console.log(`✅ Still rendered for frame ${frame}`);
} else {
  await renderMedia({
    composition,
    serveUrl: bundled,
    codec: "h264",
    outputLocation: "/dev-server/src/assets/whatsapp-convo.mp4",
    puppeteerInstance: browser,
    muted: true,
    concurrency: 1,
  });
  console.log("✅ Rendered to /dev-server/src/assets/whatsapp-convo.mp4");
}

await browser.close({ silent: false });