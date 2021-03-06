"use strict";

// Alias "markdown-it" (expected) to "markdownit" (exported)
module.exports = window.markdownit;
if (!module.exports) {
  console.error("markdown-it must be loaded before markdownlint.");
}

// Use browser's URL implementation if not available on url module
var url = require("url");
if (!url.URL) {
  url.URL = URL;
}
