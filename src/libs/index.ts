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
