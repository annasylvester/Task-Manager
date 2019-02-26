const connection = require("./connection.js");

let orm = {
	selectAll: function (tableName) {
		let queryString = "SELECT * FROM ??";
		connection.query(queryString, [tableName], function (err, result) {
			if (err) throw err;
			console.log(result);
		});
	},
	insertOne: function (tableName, taskName) {
		let queryString = "INSERT INTO ?? SET ?";
		console.log(queryString);
		connection.query(queryString, [tableName, taskName], function (err, result) {
			if (err) throw err;
			console.log(result);
		});
	},
	updateOne: function (tableName, taskID) {
		let queryString = "UPDATE ?? SET ? WHERE ?";
connection.query(queryString,[tableName, taskID, ], function (err, result) {
				if (err) throw err;
				console.log(result);
			}
		);
	}
};

module.exports = orm;