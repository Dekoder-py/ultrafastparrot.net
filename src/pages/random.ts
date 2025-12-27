import type { APIRoute } from "astro";
import SITES from "../../sites.ts";

export const GET: APIRoute = async ({ redirect }) => {
  return redirect(SITES[Math.floor(Math.random() * SITES.length)].url);
};
