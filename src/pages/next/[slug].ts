import type { APIRoute } from "astro";
import SITES from "../../../sites.ts";

export const GET: APIRoute = async ({ redirect, params }) => {
  const currentSite = SITES.findIndex((site) => site.slug === params.slug);
  if (currentSite === -1) {
    return redirect("/");
  }

  console.log("Site index:", currentSite);
  const newSiteIndex = currentSite + 1;
  console.log("New site index:", newSiteIndex);
  console.log("Sites length:", SITES.length);

  if (newSiteIndex >= SITES.length) {
    return redirect(SITES[0].url);
  } else {
    return redirect(SITES[newSiteIndex].url);
  }
};

export function getStaticPaths() {
  return SITES.map((site) => ({
    params: { slug: site.slug },
  }));
}
