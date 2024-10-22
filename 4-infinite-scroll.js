const keys = ["id", "name", "website"];
const names = ["User  ID", "User  Name", "User  URL"];
let preloading = false;
const loadingIndicator = document.querySelector(".loader");

const getData = () => {
	if (!preloading) {
		preloading = true;
		loadingIndicator.style.display = "block";
		fetch("https://akademia108.pl/api/ajax/get-users.php")
			.then((res) => res.json())
			.then((data) => {
				data.forEach((user) => {
					keys.forEach((key, index) => {
						let p = document.createElement("p");
						p.innerText = `${names[index]}: ${user[key]}`;
						document.body.appendChild(p);
					});
					let separator = document.createElement("p");
					separator.innerText = "--------";
					document.body.appendChild(separator);
				});
			})
			.finally(() => {
				loadingIndicator.style.display = "none";
				preloading = false;
			});
	}
};

const scrollToEndOfPage = () => {
	if (
		document.documentElement.clientHeight +
			document.documentElement.scrollTop >=
		document.documentElement.scrollHeight - 10
	) {
		console.log(preloading);
		console.log("Scrolled to the end.");
		getData();
	}
};

window.addEventListener("scroll", function () {
	scrollToEndOfPage();
});
