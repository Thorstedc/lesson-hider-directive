angular.module('directivePractice').controller('controller', function($scope){
  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review',
   'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

   $scope.announceDay = function(lesson, day) {
     if(!day) {
       day = "it's not scheduled"
     }
     alert(lesson + ' is active on ' + day + '.')
    }
    $scope.lessonDelete = function(lesson) {
        $scope.lessons.forEach(function(value, index) {
            if(value == lesson) {
                $scope.lessons.splice(index,1)
            }
        })
    }

});
