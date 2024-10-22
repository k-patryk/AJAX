$(document).ready(function () {
	$(".btn").click(function () {
		$.get("https://akademia108.pl/api/ajax/get-post.php")
			.done(function (data) {
				getData(data);
			})
			.fail(function (error) {
				console.error("Error fetching data:", error);
			});
	});

	const getData = (data) => {
		const keys = ["userId", "id", "title", "body"];

		keys.forEach((key) => {
			$("body").append(`<p>${key}: ${data[key]}</p>`);
		});
	};
});
