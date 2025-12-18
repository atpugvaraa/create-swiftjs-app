import { serve } from "bun";

// 1. Bundle the React App
const build = await Bun.build({
  entrypoints: ["./src/App.tsx"],
  outdir: "./build",
  minify: true,
});

if (!build.success) {
  console.error("Build failed:", build.logs);
  process.exit(1);
}

console.log("✅ Build Successful!");
console.log(`🌐 Serving at http://localhost:3000`);

// 2. Start the Server
serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);

    // Route: The Root URL (/)
    // We generate the HTML string programmatically here.
    if (url.pathname === "/") {
      return new Response(
        `
        <!DOCTYPE html>
        <html lang="">
          <head>
            <title>SwiftReact App</title>
            <style>body { margin: 0; font-family: sans-serif; }</style>
          </head>
          <body>
            <div id="root"></div>
            <script type="module" src="/App.js"></script>
          </body>
        </html>
      `,
        {
          headers: { "Content-Type": "text/html" },
        },
      );
    }

    // Route: The JavaScript Bundle
    // When the browser asks for /App.js, we serve the built file from ./build
    if (url.pathname === "/App.js") {
      return new Response(Bun.file("./build/App.js"), {
        headers: { "Content-Type": "application/javascript" },
      });
    }

    return new Response("404 Not Found", { status: 404 });
  },
});
