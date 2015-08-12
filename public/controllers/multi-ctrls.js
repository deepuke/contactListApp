var myApp = angular.module("myApp", []);

myApp.factory("Msg", function() {
	return {
		message : "This is a message from Service factory"
	};
});

myApp.factory("Peoples", function() {
	return {
		contacts : [{
			name : "Deepu",
			phone : "9497777330"
		}, {
			name : "Anisha",
			phone : "8086065852"
		}, {
			name : "Deepa",
			phone : "9048012330"
		}, {
			name : "Aneesh",
			phone : "8086501019"
		}]
	};
});

myApp.filter("reverse", function() {
	return function(text) {
		return text.split("").reverse().join("");
	};
});

function firstCtrlr($scope, Msg) {
	$scope.data = Msg;
}

function secondCtrlr($scope, Msg) {
	$scope.data = Msg;
	$scope.reverseMessage = function(message) {
		return message.split("").reverse().join("");
	};
}

function contactList($scope, Peoples) {
	//$scope.contactLists = Peoples.contacts;
	$scope.testArr = ["A", "B", "C", "D", "E", "F"];
	$scope.myColor = "";
	$scope.colors = [{
		value : '3',
		name : 'black',
		shade : 'dark'
	}, {
		value : '7',
		name : 'white',
		shade : 'light',
		notAnOption : true
	}, {
		value : '2',
		name : 'red',
		shade : 'dark'
	}, {
		value : '1',
		name : 'blue',
		shade : 'dark',
		notAnOption : true
	}, {
		value : '4',
		name : 'yellow',
		shade : 'light',
		notAnOption : false
	}];
}
