angular
.module("SearchCtrl", [])
.controller("SearchController", function($scope, SearchService) {

    $scope.searchShow = function(){
        SearchService.search.get({
            artist: $scope.showartist
        }, function(response){
            $scope.display = response
            $scope.album_details = null
            $scope.img = null
            $scope.artist_image = "http://currentartgroupusa.com/wp-content/themes/seller-pro/assets/images/placeholder2.jpg"
        })
    }
    
    $scope.showDetails = function(id, img){
       console.log(id)
        $scope.display = {}
        SearchService.details.get({
            id : id
        }, function(response){
            $scope.album_details = response
            $scope.img = img
            $scope.artist_image = "http://currentartgroupusa.com/wp-content/themes/seller-pro/assets/images/placeholder2.jpg"
            $scope.album_image = "https://s-media-cache-ak0.pinimg.com/originals/07/ca/9b/07ca9bb97ce132953b854e004dc1d640.jpg"
        })
    }
})
