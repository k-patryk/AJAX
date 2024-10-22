let btnGetData = document.querySelector(".btn");

const keys = ["userId", "id", "title", "body"];

const getData = () => {
	fetch("https://akademia108.pl/api/ajax/get-post.php")
		.then((res) => res.json())
		.then((data) => {
			keys.forEach((key) => {
				let p = document.createElement("p");
				p.innerText = `${key}: ${data[key]}`;
				document.body.appendChild(p);
			});
		});
};

btnGetData.addEventListener("click", getData);
