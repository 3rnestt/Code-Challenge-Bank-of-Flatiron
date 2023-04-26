// // Get the transaction table and body
// const transactionTable = document.getElementById("transaction-table");
// const transactionBody = document.getElementById("transaction-body");

// // Add event listener to filter button
// const filterButton = document.getElementById("filter-button");
// filterButton.addEventListener("click", filterTransactions);

// // Fetch data from API
// fetch("http://localhost:3000/transactions")
// 	.then(response => response.json())
// 	.then(data => {
// 		// Render transactions on page load
// 		renderTransactions(data);
// 	});

// // Function to render transactions on the page
// function renderTransactions(transactions) {
// 	// Clear the transaction body
// 	transactionBody.innerHTML = "";

// 	// Loop through the transactions and create table rows
// 	transactions.forEach(transaction => {
// 		const row = document.createElement("tr");
// 		const id = document.createElement("td");
// 		const type = document.createElement("td");
// 		const amount = document.createElement("td");
// 		const date = document.createElement("td");

// 		id.textContent = transaction.id;
// 		type.textContent = transaction.type;
// 		amount.textContent = transaction.amount;
// 		date.textContent = transaction.date;

// 		row.appendChild(id);
// 		row.appendChild(type);
// 		row.appendChild(amount);
// 		row.appendChild(date);

// 		transactionBody.appendChild(row);
// 	});
// }

// // Function to filter transactions by type
// function filterTransactions() {
// 	const transactionType = document.getElementById("transaction-type").value;

// 	// Fetch transactions with selected type
// 	fetch(`http://localhost:3000/transactions?type=${transactionType}`)
// 		.then(response => response.json())
// 		.then(data => {
// 			// Render filtered transactions
// 			renderTransactions(data);
// 		});
// }
