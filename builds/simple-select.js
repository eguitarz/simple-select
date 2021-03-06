(function() {
  $.fn.select = function(options) {
    var list, result, ul, wrapper,
      _this = this;
    list = options.list || {
      'Not specified': null
    };
    result = $('<div>');
    result.text('Select...');
    ul = $('<ul>');
    result.on('click', function() {
      return ul.toggleClass('show');
    });
    Object.keys(list).forEach(function(el) {
      var li;
      li = $('<li>').text(el);
      li.on('click', function() {
        result.attr('data-value', list[el]).text(el);
        return ul.toggleClass('show');
      });
      return ul.append(li);
    });
    wrapper = $('<div>').addClass('options');
    wrapper.append(ul);
    this.append(result).append(wrapper);
    return $(document).on('click', function(e) {
      if (_this.has($(e.target)).length === 0) {
        return ul.removeClass('show');
      }
    });
  };

}).call(this);
