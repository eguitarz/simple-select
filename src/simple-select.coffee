$.fn.select = (options)->
	list = options.list || {'Not specified': null}

	result = $('<div>')
	result.text 'Select...'
	ul = $('<ul>').css 'display', 'none'
	Object.keys(list).forEach (el)->
		ul.append("<li data-value=\"#{list[el]}\">#{el}</li>")
	@.append(result).append(ul)