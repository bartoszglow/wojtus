app.controller('collectionCtrl', function ($scope) {
	$scope.chosen = -1;
	$scope.editing = -1;
	$scope.borrow = 0;
	$scope.thief = {};
	$scope.properties = [
		"Type",
		"Name",
		"Author",
		"Borrowed",
	];
	$scope.types = [
		"book",
		"film",
		"game"
	];
	$scope.collection = [
		{
			"type"		: "book",
			"author"	: "J.R.R. Tolkien",
			"name"		: "Władca Pierścieni",
			"borrowed"	: false,
			"thief"		: {}
		},
		{
			"type"		: "book",
			"author"	: "J.R.R. Tolkien",
			"name"		: "Władca Pierścieni1",
			"borrowed"	: false,
			"thief"		: {}
		},
		{
			"type"		: "film",
			"author"	: "J.R.R. Tolkien",
			"name"		: "Władca Pierścieni2",
			"borrowed"	: true,
			"thief"		: {
				"name"		: "Wojciech",
				"subname"	: "Kalpmoc",
				"mail"		: "wojciech@kalpmoc.pl",
				"phone"		: "0700"
			}
		},
		{
			"type"		: "book",
			"author"	: "J.R.R. Tolkien",
			"name"		: "Władca Pierścieni3",
			"borrowed"	: true,
			"thief"		: {
				"name"		: "Wojciech",
				"subname"	: "Kalpmoc",
				"mail"		: "wojciech@kalpmoc.pl",
				"phone"		: "0700"
			}
		},
		{
			"type"		: "film",
			"author"	: "J.R.R. Tolkien",
			"name"		: "Władca Pierścieni4",
			"borrowed"	: false,
			"thief"		: {}
		},
		{
			"type"		: "game",
			"author"	: "J.R.R. Tolkien",
			"name"		: "Władca Pierścieni5",
			"borrowed"	: true,
			"thief"		: {
				"name"		: "Wojciech",
				"subname"	: "Kalpmoc",
				"mail"		: "wojciech@kalpmoc.pl",
				"phone"		: "0700"
			}
		},
	];

	$scope.clickChoose = function(index) {
		$scope.chosen = $scope.chosen == index ? -1 : index;
	};
	$scope.isChosen = function(index) {
		return $scope.chosen == index ? true : false;
	};

	$scope.clickEditing = function(index) {
		$scope.editing = $scope.editing == index ? -1 : index;
	};
	$scope.isEditing = function(index) {
		console.log($scope.editing);
		return $scope.editing == index ? true : false;
	};

	$scope.clickReturn = function(index) {
		$scope.collection[index].borrowed = false;
	};
	$scope.clickBorrow = function(index) {
		$scope.collection[index].borrowed = false;
		$scope.borrow = 1;
	};
	$scope.clickDelete = function(index) {
		$scope.collection.splice(index,1);
		$scope.chosen = -1;
	};
	$scope.clickAccept = function(index) {
		if(!$scope.thief.name) {
			alert("Podaj imie");
		} else {
			if(!$scope.thief.subname) {
				alert("Podaj nazwisko");
			} else {
				if(!$scope.thief.mail) {
					alert("Podaj poprawny email");
				} else {
					if(!$scope.thief.phone) {
						alert("Podaj telefon");
					} else {
						$scope.borrow = 0;
						$scope.collection[index].borrowed = true;
						$scope.collection[index].thief = angular.copy($scope.thief);
					}
				}
			}
		}
	};
	$scope.clickDoNotAccept = function() {
		$scope.thief = {};
		$scope.borrow = 0;
	};
});