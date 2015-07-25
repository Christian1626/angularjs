/**
 * Created by Christian on 25/07/2015.
 */
app.controller('PostsCtrl',function($scope,PostFactory){
    $scope.loading = true;
    $scope.posts= PostFactory.getPosts().then(function(posts){
        $scope.loading = false;
        $scope.posts=posts
    }, function(msg) {
        alert(msg);
    });
});