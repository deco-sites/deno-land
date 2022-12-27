import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 378,
  site: "deno-land",
  domains: ["deno-land.deco.site"],
});
