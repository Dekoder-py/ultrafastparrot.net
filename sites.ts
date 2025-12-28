const SITES: {
  name: string;
  slug: string;
  url: string;
  email: string;
}[] = [
  {
    name: "Ingo Wolf",
    slug: "ingo",
    url: "https://ingo.au",
    email: "me@ingo.au",
  },
    {
    name: "Josh",
    slug: "josh",
    url: "https://site.slitrostudio.me",
    email: "hey@slitrostudio.me",
  },
];

export default SITES.sort((a, b) => a.name.localeCompare(b.name));
