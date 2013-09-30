$.fn.select = (options)->
	list = options.list || {'Not specified': null}

	result = $('<div>')
	result.text options.default || 'Select...'
	ul = $('<ul>')
	result.on 'click', ->
		ul.toggleClass 'show'

	Object.keys(list).forEach (el)->
		li = $('<li>').text(el)
		li.on 'click', ->
			result.attr('data-value', list[el]).text(el)
			ul.toggleClass 'show'
		ul.append(li)
	wrapper = $('<div>').addClass 'options'
	wrapper.append(ul)
	@.append(result).append(wrapper)

	$(document).on 'click', (e)=>
		if @.has( $(e.target) ).length == 0
			ul.removeClass 'show'