let table;
let currentCell = 0;

function createTableIfNeeded() {
	if (!table) {
		table = document.createElement("table");
		table.border = 1;
		document.body.appendChild(table);

		for (let i = 0; i < 5; i++) {
			const row = table.insertRow();
			for (let j = 0; j < 6; j++) {
				row.insertCell();
			}
		}
	}
}

function foo() {
	createTableIfNeeded();

	const randomNumber = Math.floor(Math.random() * 100);

	const rows = table.rows;
	const totalCells = rows.length * rows[0].cells.length;
	if (currentCell < totalCells) {
		const rowIndex = Math.floor(currentCell / 6);
		const cellIndex = currentCell % 6;
		const cell = rows[rowIndex].cells[cellIndex];
		cell.textContent = randomNumber;

		if (randomNumber >= 50) {
			cell.classList.add("orange");
		}

		currentCell++;
	} else {
		alert("Таблица уже полностью заполнена!");
	}
}
