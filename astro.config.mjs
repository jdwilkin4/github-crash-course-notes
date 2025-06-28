// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Git and GitHub Crash Course",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/jdwilkin4/github-crash-course-notes",
        },
      ],
      sidebar: [
        {
          label: "Introduction",
          items: [{ label: "About this resource", slug: "introduction/about" }],
        },
        {
          label: "Guides",
          items: [
            { label: "Git Basics", slug: "guides/git-basics" },
            { label: "GitHub Basics", slug: "guides/github-basics" },
            {
              label: "GitHub Project Management",
              slug: "guides/project-management",
            },
            { label: "GitHub Actions", slug: "guides/github-actions" },
          ],
        },
        {
          label: "Resources",
          items: [
            { label: "Additional Resources", slug: "resources/resources" },
            { label: "Glossary", slug: "resources/glossary" },
          ],
        },
      ],
    }),
  ],
});
