
        var model =[{ name:"Купить молоко",
            description: "Сходить на рынок и купить молоко",
            dates: "2/18/2015",
            passed: false}];
        
        var taskTwo = angular.module('taskTwo',[]);
        
        var taskTwoCtrl = taskTwo.controller('taskTwoCtrl',function($scope){
              $scope.inform = model;
           $scope.answ = "display:none";
            $scope.addNew = function (){
            $scope.inform.push({
                name: $scope.pushName,
                description: $scope.pushDesc,
                dates: $scope.pushDates,
                passed: $scope.pushPassed
            });
                $scope.pushName ="";
                $scope.pushDesc = "";
                $scope.pushDates = "";
                $scope.pushPassed = "";
            }
            
            
            $scope.showText = function(passed){
                return passed ? "Да" : "Нет";
            }
            $scope.detail = function(){
                $scope.answ = "homework1.html";
            }
        });