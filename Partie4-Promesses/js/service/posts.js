/**
 * Created by Christian on 25/07/2015.
 */
//factory
app.factory('PostFactory',function($http, $q, $timeout){
    var factory = {
        posts : false,
        getPosts: function() {
            var deferred = $q.defer();
            if(factory.posts != false) {
                deferred.resolve(factory.posts);
            } else {
                $http.get('posts.json')
                    .success(function (data, status) {
                        factory.posts = data;
                        $timeout(function () {
                            deferred.resolve(data);
                        }, 500);

                    }).error(function (data, status) {
                        deferred.reject('Impossible de récupérer les articles');
                    });
            }
            return deferred.promise;
        },
        getPost: function(id){
            var deferred = $q.defer();
            var post = {};
            var posts = factory.getPosts().then(function(posts){
                angular.forEach(posts, function(value, key) {
                    if(value.id == id) {
                        post = value;
                    }
                });
                deferred.resolve(post);
            },function(msg){
                deferred.reject('Impossible de récupérer l\'article');
                alert(msg);
            });

            return deferred.promise;
        },
    };
    return factory;
});