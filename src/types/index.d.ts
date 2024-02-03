export type NavbarLinkProps = {
  id?: number;
  link: string;
  label: string;
};

export type FooterLinkProps = {
  company: NavbarLinkProps[];
  help: NavbarLinkProps[];
  emails: { id?: number; email: string }[];
};
