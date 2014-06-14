app.controller('collectionCtrl', function ($scope) {
	$scope.collection = [
		{
			"type"		: "book",
			"name"		: "Władca Pierścieni",
			"borrowed"	: false,
		},
		{
			"type"		: "book",
			"name"		: "Władca Pierścieni1",
			"borrowed"	: false,
		},
		{
			"type"		: "film",
			"name"		: "Władca Pierścieni2",
			"borrowed"	: true,
		},
		{
			"type"		: "book",
			"name"		: "Władca Pierścieni3",
			"borrowed"	: true,
		},
		{
			"type"		: "film",
			"name"		: "Władca Pierścieni4",
			"borrowed"	: false,
		},
		{
			"type"		: "game",
			"name"		: "Władca Pierścieni5",
			"borrowed"	: true,
		},
	]
});