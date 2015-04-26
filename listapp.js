 var app = angular.module('listApp', []);

app.controller('SimpleController', function($scope, $window){
    $scope.historys=[];
    $scope.index = 0;
    $scope.addStartName = function(){
            $scope.newId = $scope.newUrl.split('?v=')[1];
            $scope.newId = "http://www.youtube.com/embed/" + $scope.newId +"?autoplay=1";
            $scope.index =  $scope.index + 1;
            $scope.historys.push({index: $scope.index, id: $scope.newId, name: $scope.newName});
        
    }


   $scope.openCategory = function($event, id) {
            $scope.yt = {
            videoid: id
          };
        alert($scope.yt.videoid);
    }

});
