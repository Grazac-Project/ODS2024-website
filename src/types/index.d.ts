import { Prisma } from "@prisma/client";

export type NavbarLinkProps = {
  id?: number;
  link: string;
  label: string;
};

export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export type SearchResult = {
  public_id: string;
};

export type Folder = { name: string; path: string };

export interface HighlightsProps {
  id: number;
  title: string;
  img: string;
  date: string;
  speaker: string;
  description: any;
}

export type SidebarProps = {
  id?: number;
  label: string;
  icon: Icon;
  link: string;
};

export type CartWithProducts = Prisma.CartGetPayload<{
  include: { items: { include: { product: true } } };
}>;

export type Fullproduct = Prisma.ProductGetPayload<{
  include: {
    reviews: true;
    feature: true;
    categories: true;
    sizes: true;
  };
}>;
