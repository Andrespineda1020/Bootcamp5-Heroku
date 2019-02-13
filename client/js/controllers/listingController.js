angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;
	  /**TODO
	  *Save the article using the Listings factory. If the object is successfully
	  saved redirect back to the list page. Otherwise, display the error
	 */
   $scope.addListing = function() {
//adding a new entry as a combination of all the details about a particular entry
     var addLis= {

     "code": $scope.code,
     "name": $scope.name,
     "coordinates": {
         "latitude": $scope.latitude,
         "longitude": $scope.longitude
     },
     "address":$scope.address
       }
   $scope.listings.push(addLis);
    res.redirect(listings);
   };
   $scope.deleteListing = function(index) {
//deleting entry
     $scope.listings.splice(index,1);
     //location.reload();
     res.redirect(listings);
	   /**TODO
        Delete the article using the Listings factory. If the removal is successful,
		navigate back to 'listing.list'. Otherwise, display the error.
       */
  };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);
