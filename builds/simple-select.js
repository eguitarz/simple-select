(function() {
  $.fn.select = function(options) {
    var list, result, ul;
    list = options.list || {
      'Not specified': null
    };
    result = $('<div>');
    result.text('Select...');
    ul = $('<ul>').css('display', 'none');
    Object.keys(list).forEach(function(el) {
      return ul.append("<li data-value=\"" + list[el] + "\">" + el + "</li>");
    });
    return this.append(result).append(ul);
  };

}).call(this);
