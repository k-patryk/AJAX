$(document).ready(function () {
	$.get(
		"https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php"
	).done(function (data) {
		console.log(data);
		const newDiv = $("<div></div>");
		newDiv.html(
			"<strong>Imię:</strong> " +
				data.imie +
				"<br>" +
				"<strong>Nazwisko:</strong> " +
				data.nazwisko +
				"<br>" +
				"<strong>Zawód:</strong> " +
				data.zawod +
				"<br>" +
				"<strong>Firma:</strong> " +
				data.firma
		);
		$("body").append(newDiv);
	});
});
