/**
 * Created by Christian on 25/07/2015.
 */
app.controller('CommentsCtrl', function($scope,PostFactory,$routeParams) {
    $scope.loading = true;
    console.log($routeParams);
    console.log(PostFactory.getPost($routeParams));
    var post = PostFactory.getPost($routeParams.id).then(function(post){
        $scope.loading=false;
        $scope.title = post.name;
        $scope.comments = post.comments;
    });
});