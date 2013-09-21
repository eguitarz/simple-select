$.fn.select = (options)->
	list = options.list || {'Not specified': null}
	$(@).on 'click', =>
		ul = $('</ul>')
		Object.keys(list).forEach (el)->
			ul.append("<li data-value=\"#{list[el]}\">#{el}</li>")
		$(@).append ul