import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";

const site = lume();

site.copy("images");
//site.copy("styles");
site.ignore("README.md");
site.data("currentDate", new Date().getFullYear());
site.use(sass());

export default site;
