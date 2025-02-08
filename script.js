// function insert_Row() {
//     //Write your code here
// 	const Table = document.getElementById("sampleTable");
// 	const newRow = document.createElement("tr");
// 	const cellOne = document.createElement("td");
// 	cellOne.innerHTML = "New Cell1"
// 	const cellTwo = document.createElement("td");
// 	cellTwo.innerHTML = "New Cell2"
// 	newRow.appendChild(cellOne)
// 	newRow.appendChild(cellTwo)
// 	Table.appendChild(newRow);
  
// }








window.onload = function() {
    document.querySelector('input[type="button"]').addEventListener('click', insert_Row);
}

function insert_Row() {
    const Table = document.getElementById("sampleTable");
    const newRow = document.createElement("tr");
    const cellOne = document.createElement("td");
    const cellTwo = document.createElement("td");
    cellOne.innerHTML = "New Cell1";
    cellTwo.innerHTML = "New Cell2";
    newRow.appendChild(cellOne);
    newRow.appendChild(cellTwo);
    Table.appendChild(newRow);
}
