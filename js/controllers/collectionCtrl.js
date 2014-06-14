app.controller('collectionCtrl', function ($scope) {
	$scope.chosen = -1;
	$scope.editing = -1;
	$scope.borrow = 0;
	$scope.thief = {};
	$scope.parsing = {
		"name" 		: false,
		"subname" 	: false,
		"mail"		: false,
		"phone"		: false
	}
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
		$scope.borrow = 0;
	};
	$scope.isChosen = function(index) {
		return $scope.chosen == index ? true : false;
	};

	$scope.clickEditing = function(index) {
		$scope.editing = $scope.editing == index ? -1 : index;
	};
	$scope.isEditing = function(index) {
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
		if($scope.thief.name) {
			if($scope.thief.subname) {
				if($scope.thief.mail) {
					if($scope.thief.phone) {
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
	$scope.inputChange = function(word, what) {
		$scope.parsing[what] = word ? true : false;
	};

	$scope.print = function(sth) {
		console.log(sth);
		console.log(myForm.mame.$valid);
	}
});