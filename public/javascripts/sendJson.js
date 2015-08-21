/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



angular.module('app').controller('sendJsonController',

function senddata($http,$scope){
    var jsonstring=document.getElementbyId("inputFields");
    
    $http.post('fields/addFields',jsonstring).sucess(function(msg){
     $scope.status=msg;   
    });
});


