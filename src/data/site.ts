export type SiteContent = {
  name: string;
  url: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
  };
};

export const site: SiteContent = {
  name: "Lucas Romano",
  url: "https://lromano97.github.io",
  email: "romano.97lucas@gmail.com",
  links: {
    github: "https://github.com/lromano97",
    linkedin: "https://www.linkedin.com/in/lucaseromano/",
  },
};
