import lume from "lume/mod.ts";

const site = lume();

site.copy("images");
site.ignore("README.md");
site.data("currentDate", new Date().getFullYear());
site.filter("uppercase", (value) => value.toUpperCase());

export default site;
