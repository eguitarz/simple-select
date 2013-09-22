$.fn.select = (options)->
	list = options.list || {'Not specified': null}

	result = $('<div>')
	result.text 'Select...'
	ul = $('<ul>').css 'display', 'none'
	Object.keys(list).forEach (el)->
		li = $('<li>').attr('data-value', list[el]).text(el)
		ul.append(li)
	@.append(result).append(ul)

	# events
	result.on 'click', ->
		ul.toggle()