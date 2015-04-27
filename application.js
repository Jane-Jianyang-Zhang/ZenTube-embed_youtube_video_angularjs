
var ytApp = angular.module('YouTubeApp', []);

ytApp.controller("YouTubeCtrl", function($scope) {
    $scope.historys=[];

    $scope.addStartName = function(){
      if ($scope.historys.indexOf($scope.yt.videoid) === -1) {
        $scope.historys.push({id: $scope.yt.videoid, name: $scope.name});
      };
    }

    $scope.openCategory = function($event, id) {
        $scope.yt.videoid = id;
        //alert($scope.yt.videoid);
    }

    //initial settings
    $scope.yt = {
      width: 600, 
      height: 480, 
      videoid: "YD5KC01rrAA",
    };

  });

ytApp.directive('youtube', function($window) {
  return {
    restrict: "E",

    scope: {
      height: "@",
      width: "@",
      videoid: "@"
    },

    template: '<div></div>',

    link: function(scope, element) {
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;

      $window.onYouTubeIframeAPIReady = function() {

        player = new YT.Player(element.children()[0], {
          playerVars: {
            autoplay: 1,
            html5: 1,
            theme: "light",
            modesbranding: 0,
            color: "white",
            iv_load_policy: 3,
            showinfo: 1,
            loop: 1,
            controls: 1,
            playlist:scope.videoid
          },

          height: scope.height,
          width: scope.width,
          videoId: scope.videoid, 
        });
      }

      scope.$watch('videoid', function(newValue, oldValue) {
        if (newValue == oldValue) {
          return;
        }
       
        player.cueVideoById(scope.videoid);
       
      }); 

      scope.$watch('height + width', function(newValue, oldValue) {
        if (newValue == oldValue) {
          return;
        }

        player.setSize(scope.width, scope.height);

      });
    }  
  };
});
