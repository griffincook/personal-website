(function() {
    angular.module('index', [])
        .controller('mainController', function($scope, $timeout) {
            init();
            let flipped = 0;

            function init() {
                $scope.scrollLock = "noScroll";
                $scope.displayAboutMe = false;
                $scope.displayProjects = false;
                $scope.displayWork = false;
                $scope.pictureClass = "indexHeadshot";
                $scope.pictureSrc = "images/headshot_scaled_down.png";
                $scope.headshotTransparency = "transparent";
                $scope.titlesTransparency = "transparent";
                $scope.aboutTransparency = "transparent";
                $scope.projectTransparency = "transparent";
                $scope.workTransparency = "transparent";
                fade();
            }

            function fade() {
                $timeout(function(){
                    $scope.headshotTransparency = "opaque";
                    $timeout(function(){
                        $scope.pictureClass = "spin";
                        $timeout(function(){
                            $scope.pictureClass = "indexHeadshot";
                            $scope.pictureSrc = "images/headshot_scaled_down_flipped.png";
                            $timeout(function(){
                                $scope.pictureClass = "spin";
                                $timeout(function(){
                                    $scope.pictureClass = "indexHeadshot";
                                    $scope.pictureSrc = "images/headshot_scaled_down.png";
                                }, 500);
                            }, 500);
                        }, 500);
                    }, 800);
                }, 800);
                $timeout(function(){
                    $scope.titlesTransparency = "opaque";
                }, 1600);
                $timeout(function(){
                    $scope.aboutTransparency = "opaque";
                }, 2400);
                $timeout(function(){
                    $scope.projectTransparency = "opaque";
                }, 2900);
                $timeout(function(){
                    $scope.workTransparency = "opaque";
                    $scope.scrollLock = "";
                }, 3400);
            }

            $scope.toggleAboutMe = function() {
                $scope.displayAboutMe = !$scope.displayAboutMe;
            };

            $scope.toggleProjects = function() {
                $scope.displayProjects = !$scope.displayProjects;
            };

            $scope.toggleWork = function() {
                $scope.displayWork = !$scope.displayWork;
            };

            $scope.spinPicture = function() {
                flipped++;
                $scope.pictureClass = "spin";
                $timeout(function(){
                    $scope.pictureClass = "indexHeadshot";
                    if (flipped === 1) {
                        $scope.pictureSrc = "images/headshotFlipped.png";
                    }
                    else if (flipped === 2) {
                        $scope.pictureSrc = "images/headshot_scaled_down.png";
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
                let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) /6;
                if ($(document).scrollTop() >= h) {
                    $('.banner').addClass('fixed');
                } else {
                    $('.banner').removeClass('fixed');
                }
            }
        });
})();
