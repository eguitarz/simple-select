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
      var li;
      li = $('<li>').attr('data-value', list[el]).text(el);
      return ul.append(li);
    });
    this.append(result).append(ul);
    return result.on('click', function() {
      return ul.toggle();
    });
  };

}).call(this);
