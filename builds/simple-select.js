(function() {
  $.fn.select = function(options) {
    var list, ul;
    list = options.list || {
      'Not specified': null
    };
    ul = $('<ul>');
    Object.keys(list).forEach(function(el) {
      return ul.append("<li data-value=\"" + list[el] + "\">" + el + "</li>");
    });
    return this.html(ul);
  };

}).call(this);
