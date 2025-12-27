import type { APIRoute } from "astro";
import SITES from "../../../sites.ts";

export const GET: APIRoute = async ({ redirect, params }) => {
  const currentSite = SITES.findIndex((site) => site.slug === params.slug);
  if (currentSite === -1) {
    return redirect("/");
  }

  const newSiteIndex = currentSite + 1;
  if (newSiteIndex >= SITES.length) {
    redirect(SITES[0].url);
  }

  return redirect(SITES[newSiteIndex].url);
};

export function getStaticPaths() {
  return SITES.map((site) => ({
    params: { slug: site.slug },
  }));
}
