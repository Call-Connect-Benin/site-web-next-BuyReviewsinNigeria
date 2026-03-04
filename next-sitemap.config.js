/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://buyreviewsinnigeria.com",
  generateRobotsTxt: true,
  trailingSlash: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
  },
  transform: async (config, path) => {
    // Higher priority for key pages
    const highPriority = ["/", "/services/", "/industries/", "/locations/", "/pricing/"];
    const mediumPriority = ["/about/", "/contact/", "/how-it-works/", "/why-choose-us/"];

    let priority = config.priority;
    if (highPriority.includes(path)) priority = 1.0;
    else if (mediumPriority.includes(path)) priority = 0.8;
    else if (path.startsWith("/services/")) priority = 0.9;
    else if (path.startsWith("/industries/")) priority = 0.8;
    else if (path.startsWith("/locations/")) priority = 0.8;
    else if (path.startsWith("/blog/")) priority = 0.6;

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
