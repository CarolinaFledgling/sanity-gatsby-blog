export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "612dbcd63b66aa9301960a05",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-zsyzdm3q",
                  apiId: "8ad1b53b-8e57-4529-91b5-def74fc177c0",
                },
                {
                  buildHookId: "612dbcd657300680b1f244c6",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-xew3fh8a",
                  apiId: "b2392461-f79d-470e-acff-1c8955776f2c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/CarolinaFledgling/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-xew3fh8a.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
