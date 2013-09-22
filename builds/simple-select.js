(function() {
  $.fn.select = function(options) {
    var list, result, ul;
    list = options.list || {
      'Not specified': null
    };
    result = $('<div>');
    result.text('Select...');
    ul = $('<ul>').css('display', 'none');
    result.on('click', function() {
      return ul.toggle();
    });
    Object.keys(list).forEach(function(el) {
      var li;
      li = $('<li>').text(el);
      li.on('click', function() {
        result.attr('data-value', list[el]).text(el);
        return ul.toggle();
      });
      return ul.append(li);
    });
    return this.append(result).append(ul);
  };

}).call(this);
