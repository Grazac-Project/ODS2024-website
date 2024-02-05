import { FooterLinkProps, NavbarLinkProps } from "@/types";

export const NAV_LINKS: NavbarLinkProps[] = [
  { id: 1, link: "gallery", label: "gallery" },
  { id: 2, link: "highlights", label: "highlights" },
  { id: 3, link: "blog", label: "Blog" },
];

export const FOOTER_LINKS: FooterLinkProps = {
  company: [
    { id: 1, link: "services?path=services", label: "services" },
    { id: 2, link: "about?path=about", label: "about us" },
    { id: 3, link: "contacts?path=contacts", label: "contacts" },
    { id: 4, link: "jobs?path=jobs", label: "jobs" },
  ],
  help: [
    { id: 1, link: "faq?path=faq", label: "faq" },
    { id: 2, link: "terms?path=terms", label: "terms of services" },
    { id: 3, link: "privacy?path=privacy", label: "privacy policy" },
  ],
  emails: [
    { id: 1, email: "Info@codesgranite.com" },
    { id: 2, email: "Contact@codesgranite.com" },
    { id: 3, email: "Support@codesgranite.com" },
  ],
};

export const speakers = [
  {
    id: 1,
    name: "Olubunmi Fabanwo",
    title: "Affiliate Program Manager",
    title2: "Binance(Africa)",
    src: "/images/speaker1.svg",
  },
  {
    id: 2,
    name: "Harrison Obiefule",
    title: "Co-Lead, SuperteamDAO (Nigeria)",
    src: "/images/speaker2.svg",
  },
  {
    id: 3,
    name: "Joshua Chibueze",
    title: "Co-founder and CMO, Piggyvest",
    src: "/images/speaker3.svg",
  },
  {
    id: 4,
    name: "Olubunmi Fabanwo",
    title: "Affiliate Program Manager",
    title2: "Binance(Africa)",
    src: "/images/speaker1.svg",
  },
  {
    id: 5,
    name: "Harrison Obiefule",
    title: "Co-Lead, SuperteamDAO (Nigeria)",
    src: "/images/speaker2.svg",
  },
  {
    id: 6,
    name: "Joshua Chibueze",
    title: "Co-founder and CMO, Piggyvest",
    src: "/images/speaker3.svg",
  },
];

export const highlights = [
  {
    id: 1,
    title: "Leveraging on social media for business growth",
    img: "/images/highlight1.svg",
  },
  {
    id: 2,
    title: "Raising funds for your startup business",
    img: "/images/highlight2.svg",
  },
  {
    id: 3,
    title: "Getting started in tech - Knowing what to learn",
    img: "/images/highlight3.svg",
  },
  {
    id: 4,
    title: "Leveraging on social media for business growth",
    img: "/images/highlight1.svg",
  },
  {
    id: 5,
    title: "Raising funds for your startup business",
    img: "/images/highlight2.svg",
  },
  {
    id: 6,
    title: "Getting started in tech - Knowing what to learn",
    img: "/images/highlight3.svg",
  },
];
