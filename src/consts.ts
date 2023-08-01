export const SITE_TITLE = "md-demo";
export const SITE_DESCRIPTION = "demo tool for markdown documentation";

export interface tocHeading {
  depth: number;
  text: string;
  slug: string;
  subheadings: tocHeading[];
}
