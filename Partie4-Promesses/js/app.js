/**
 * Created by Christian on 25/07/2015.
 */
var app = angular.module('ControllerExample', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',{templateUrl:'templates/home.html',controller:'PostsCtrl'})
        .when('/comments/:id',{templateUrl:'templates/comments.html',controller:'CommentsCtrl'})
        .otherwise({redirectTo:'/'})
});