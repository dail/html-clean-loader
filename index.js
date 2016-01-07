var htmlclean = require("htmlclean");

module.exports = function(source) {
  var callback = this.async();
  if (this.cacheable) {
    this.cacheable();
  }
  var opts = this.options['html-clean-loader'] || {};
  var html = htmlclean(source, options);
  callback(html);
}
