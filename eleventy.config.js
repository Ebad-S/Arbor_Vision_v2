module.exports = function (eleventyConfig) {
  // Shortcodes
  eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`);

  // Filters
  eleventyConfig.addFilter("currentYear", () => `${new Date().getFullYear()}`);

  // Date filter for sitemap
  eleventyConfig.addFilter("date", (dateObj, format) => {
    if (!dateObj) return "";
    const d = new Date(dateObj);
    if (format === "%Y-%m-%d") {
      return d.toISOString().split("T")[0];
    }
    return d.toISOString();
  });

  // Passthrough copy: static assets go directly to _site
  eleventyConfig.addPassthroughCopy({ "src/static": "." });
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/icons");
  eleventyConfig.addPassthroughCopy("src/assets/video");
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/js");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
