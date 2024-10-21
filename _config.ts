import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";
import terser from "lume/plugins/terser.ts";

const site = lume();

site.copy("images");
site.ignore("README.md");
site.data("currentDate", new Date().getFullYear());
site.use(sass());
site.use(terser());

export default site;
