const randomNumbers = Array.from({ length: 30 }, () =>
	Math.floor(Math.random() * 100)
);
const table = document.createElement("table");
table.border = 1;
let rowIndex = 0;
for (let i = 0; i < 5; i++) {
	const row = table.insertRow();
	for (let j = 0; j < 6; j++) {
		const cell = row.insertCell();
		const number = randomNumbers[rowIndex++];
		cell.textContent = number;

		if (number >= 50) {
			cell.classList.add("orange");
		}
	}
}
document.body.appendChild(table);
