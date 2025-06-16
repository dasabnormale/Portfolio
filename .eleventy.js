// .eleventy.js  (ESM-Modul!)
export default function(eleventyConfig) {
  // CSS 1:1 kopieren
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    dir: {
      input: "src",          // Quelle ist jetzt src/
      includes: "_includes", // Layouts in src/_includes/
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}