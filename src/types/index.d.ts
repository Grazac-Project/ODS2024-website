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
