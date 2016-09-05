var  app = angular.module('App',["smoothScroll", "ngRoute", "ngCookies"])


app.controller("mainCtrl",["$scope", "smoothScroll","$http","$cookieStore", function ($scope, smoothScroll, $http, $cookieStore) {
    $scope.images=[
        {url: "filter_img/image1.jpg", category: 'web', hover:'images/Hover.png'},
        {url:"filter_img/image2.jpg" , category:"photo"},
        {url:"filter_img/image3.jpg", category:"design"},
        {url: "filter_img/image4.jpg", category:'web'},
        {url: "filter_img/image5.jpg", category:'photo'},
        {url: "filter_img/image6.jpg", category: 'design'},
        {url: "filter_img/image7.jpg", category: 'web'},
        {url: "filter_img/image8.jpg", category: 'photo'},
        {url: "filter_img/image9.jpg", category: 'design'},
        {url: "filter_img/image10.jpg", category: 'web'},
        {url: "filter_img/image11.jpg", category: 'photo'},
        {url: "filter_img/image12.jpg", category: 'web'},
        ];
    $scope.filter_value = 'all';
    $scope.setFilter = function(value) {
        $scope.filter_value = value;
    };
    $scope.filterFunc = function (image) {
        if ($scope.filter_value == 'all') {
            return image;
        } else {
            if (image.category == $scope.filter_value) {
                return image;
            }
        }
    }
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

    $scope.name = $cookieStore.get("name") || "";
    $scope.email = $cookieStore.get("email") || "";
    $scope.send = function () {

        var now = new Date();
        var exp = new Date(now.getFullYear(), now.getMonth()+1, now.getDate());
 /*put cookies*/
        $cookieStore.put("name", $scope.name, {expires: exp});
        $cookieStore.put("email", $scope.email, {expires: exp});


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