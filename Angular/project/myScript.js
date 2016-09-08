var  app = angular.module('App',["smoothScroll", "ngRoute"])


app.controller("mainCtrl",["$scope", "smoothScroll","$http", function ($scope, smoothScroll, $http) {
$scope.serv = "first_icon";/*for ng-switch*/
    $scope.first = function () {
        $scope.serv = "first_icon"
    };
    $scope.sec = function () {
        $scope.serv = "sec_icon"
    };
    $scope.third = function () {
        $scope.serv = "third_icon"
    };
    $scope.fourth = function () {
        $scope.serv = "fourth_icon"
    };
$scope.email = "Your email here";
    $scope.massage = "Enter your massage here";
    $scope.name = "Your name here";
    $scope.nameRegex = /^[A-Z a-z]*$/;
    $scope.mailRegex = /^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$/gi;
    $scope.massageRegex =/^.{19,}/;
    $scope.news = {}
    $scope.news = function () {
        $http.get("data.json").success(function (response) {
            $scope.items = response;

        })
    }
    $scope.news()
    $scope.sortFunc = function (item) {
        // return +(item.date.split('/')[0]);
        var dat = item.date.split('/');
        return new Date( +dat[2], +dat[0], +dat[1]);
    }
    $scope.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    $scope.portf ={proj: 0,
        clicks: 0,
        mails: 0,
        joked: 0};

    $scope.more = function () {

    }

}]);
app.directive("scroll", function ($window, $interval, $timeout) {
    return function(scope, element, attrs) {
        var func = 0;
        /*next block for counter*/
          angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 2000) {
                 func+=1;
                if(func>1){return false}
                var int=  $interval(function () {
                    scope.portf.proj+=10;
                    scope.portf.clicks+=24230;
                    scope.portf.mails+=16;
                    scope.portf.joked+=3;
                }, 10)
                $timeout(function () {
                    $interval.cancel(int);
                    scope.portf.proj=3054;
                    scope.portf.clicks = 7234873;
                    scope.portf.mails = 4670;
                    scope.portf.joked = 939;
                }, 3000)


            }
            scope.$apply();

        })
    };
});