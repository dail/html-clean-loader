var htmlclean = require("htmlclean");

module.exports = function(source) {
  if (this.cacheable) {
    this.cacheable();
  }
  var opts = this.options['html-clean-loader'] || {};
  return htmlclean(source, opts);
}
