(function() {
    angular.module('index', [])
        .controller('mainController', function($scope, $timeout) {
            $scope.pictureClass = "indexHeadshot";
            $scope.pictureSrc = "images/headshot.png";
            let flipped = 0;

            $scope.spinPicture = function() {
                flipped++;
                $scope.pictureClass = "spin";
                $timeout(function(){
                    $scope.pictureClass = "indexHeadshot";
                    if (flipped === 1) {
                        $scope.pictureSrc = "images/headshotFlipped.png";
                    }
                    else if (flipped === 2) {
                        $scope.pictureSrc = "images/headshotText.png";
                    }
                    else if (flipped === 3) {
                        $scope.pictureSrc = "images/headshotFlippedText.png";
                    }
                    else if (flipped === 4) {
                        $scope.pictureSrc = "images/headshotGoofy.png";
                    }
                    else if (flipped === 5) {
                        $scope.pictureSrc = "images/headshotFlippedGoofy.png";
                    }
                    else if (flipped === 6) {
                        $scope.pictureSrc = "images/headshotGoofyText.png";
                    }
                    else if (flipped === 7) {
                        $scope.pictureSrc = "images/headshotFlippedGoofyText.png";
                        $timeout(function () {
                            let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                            scrollTo({left: 0, top: h, behavior: "smooth"});
                        }, 500);
                    }
                    else if (flipped === 8) {
                        $scope.pictureSrc = "images/headshotGoofyText2.png";
                    }
                    else {
                        $scope.pictureSrc = "images/headshotCircleEmpty.png";
                    }
                }, 500)
            };

            $scope.navBarCtrl = function() {
                document.addEventListener("scroll", manageScrollBar);
            };

            function manageScrollBar() {
                let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) /4;
                if ($(document).scrollTop() >= h) {
                    $('.banner').addClass('fixed');
                } else {
                    $('.banner').removeClass('fixed');
                }
            }
        });
})();
