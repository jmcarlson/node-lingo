$(function() {

	// console.log('window test');

	$('#translateButton').on('click', function(e) {
		e.preventDefault();

		var textToTranslate = $('#inputText').val();
		var fromLang = $('#sourceLang').val();
		var toLang = $('#targetLang').val();

		if(fromLang !== toLang) {
			var objectText = {
				text: textToTranslate,
				from: fromLang,
				to: toLang
			};
			// console.log(objectText);

			$.post('/translateText', objectText, function(data) {
				console.log('client translated data', data);
				$('#translatedText').text(data);
			})

		}
		else {
			console.log('Can not have same lang for to/from');
		}
	})
})