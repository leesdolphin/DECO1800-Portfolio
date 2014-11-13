
function language_to_name(language) {
	if(!language) {
		return "";
	}
	switch(language.toLowerCase()) {
		case "javascript":{
			return "JavaScript";
		}
		case "coffeescript":{
			return "CoffeeScript";
		}
		case "css":{
			return "CSS";
		}
		case "scss":{
			return "SCSS";
		}
	}
	return language;
}

function make_code_display(src, lang) {
	var $main = $("<div class='source'></div>");
	var $header = $("<div class='header'></div>").appendTo($main);
	$("<div class='filename'></div>").text(src).appendTo($header);
	$("<div class='language'></div>").text(language_to_name(lang)).appendTo($header);
	var $pre = $("<pre></pre>").addClass("line-numbers").appendTo($main);
	load_and_render(src, lang, $pre);
	return $main;
}


function load_and_render(file, lang, element) {
	var $element = $(element);
	$element.empty().text("Loading '" + file + "'...");
	$.ajax({
		url: file,
		type: 'GET',
		dataType: 'text',
		complete: function(data, status) {
			if(status === 'success') {
				$code = $("<code></code>").text(data.responseText.trim());
				$element.empty().append($code).addClass("language-" + lang);

				Prism.highlightElement($code[0]);
			} else {
				$element.empty().text("Failed to load '" + file + "'. Try refreshing the page.");
			}
		}
	})
}



$(document).ready(function() {
	$(".code-sample").each(function(idx, elm) {
		var $elm = $(elm);

		var lang = $elm.attr("language");
		var src = $elm.attr("src");

		if(!src || !lang) {
			return;
		}


		$elm.empty(); // Reset.
		var $main = make_code_display(src, lang).addClass("current").appendTo($elm);

		var compLang = $elm.attr("compiled-language");
		var compName = language_to_name(compLang);
		var compSrc = $elm.attr("compiled-src");

		if(compLang && compSrc) {
			var $compiled = make_code_display(compSrc, compLang).appendTo($elm);

			$elm.find(".header").addClass("switcher").on("click", function() {
				if($main.hasClass("current")) {
					// Switch to compiled.
					$main.removeClass('current');
					$compiled.addClass('current');
				} else {
					// Switch to main.
					$main.addClass('current');
					$compiled.removeClass('current');
				}
			});
		}



	})
});
