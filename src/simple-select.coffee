$.fn.select = (options)->
	list = options.list || {'Not specified': null}

	result = $('<div>')
	result.text 'Select...'
	ul = $('<ul>').css 'display', 'none'
	result.on 'click', ->
		ul.toggle()

	Object.keys(list).forEach (el)->
		li = $('<li>').text(el)
		li.on 'click', ->
			result.attr('data-value', list[el]).text(el)
			ul.toggle()
		ul.append(li)
	@.append(result).append(ul)