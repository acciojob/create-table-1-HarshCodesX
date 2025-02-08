function insert_Row() {
    //Write your code here
	const Table = document.getElementById("sampleTable");
	const newRow = document.createElement("tr");
	const cellOne = document.createElement("td");
	cellOne.innerHTML = "New Cell 1"
	const cellTwo = document.createElement("td");
	cellTwo.innerHTML = "New Cell 2"
	newRow.appendChild(cellOne, cellTwo)
	Table.appendChild(newRow);
  
}
