var test = angular.module('test', []);

test.directive("test", function() {
  return {
    template : `<p>I was made in a directive constructor!</p>`
  };
});