function AppCtrl ($scope, $http) {
	console.log("Hello world from AppCtrl controller!");

	var refresh = function(){
		$http.get('/candidatedb').success(function(response){
			console.log("I got the data I requested.");
			console.log(response);
			$scope.contactList = response;
			$scope.contact="";
		});
	};
	refresh();

	$scope.addContact = function(){
		console.log($scope.contact);
		$http.post('/candidatedb', $scope.contact).success(function(response){
			console.log(response);
			refresh();
		});
	};

	$scope.removeContact = function(id){
		console.log(id);
		$http.delete('/candidatedb/' + id).success(function(response){
			refresh();
		});
	};

	$scope.editContact = function(id){
		console.log(id);
		$http.get('/candidatedb/' + id).success(function(response){
			$scope.contact = response;
		});
	};

	$scope.updateContact = function(){
		console.log($scope.contact._id);
		$http.put('/candidatedb/' + $scope.contact._id, $scope.contact).success(function(response){
			refresh();
		});
	};

	$scope.clearContact = function(){
		$scope.contact = "";
	};
}