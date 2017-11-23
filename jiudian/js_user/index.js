window.onload=function(){
	var oimg=document.getElementsByClassName('img-lsb')[0]
	var oban=oimg.children
	var ool=document.getElementsByClassName('ol-lsb')[0]
	var aol=ool.children
	var inow=0;
	for(var i=0;i<aol.length;i++){
		aol[i].index=i
		aol[i].onclick=function(){
			inow=this.index
			tab()

		}
	}
	function tab(){
					for(var k=0;k<aol.length;k++){
				aol[k].className=""
				move(oban[k],{opacity:0},1000)
			}
			aol[inow].className="active-lsb"
			move(oban[inow],{opacity:1},1000)
	}
	
	var oul=document.getElementsByClassName("ul-lsb")[0]
	var aul=oul.children
	for(var i=0;i<aul.length;i++){
		aul[i].index=i
        aul[i].onclick=function(){
        	for(var k=0;k<aul.length;k++){
        		aul[k].style.borderColor="gray"
        		aul[k].style.opacity="0.7"
        	}
        	this.style.borderColor="#DA8D5A"
        	this.style.opacity="1"
        }
	}
	
	
	var myapp = angular.module("myapp", ["ngRoute"])
		myapp.controller("cont", ["$scope", function($a) {

		}])
		myapp.config(["$routeProvider", function($a) {
			$a.when("/a", {
				templateUrl: "a.html"
			}).when("/b", {
				templateUrl: "b.html"
			}).when("/c", {
				templateUrl: "c.html"
			}).when("/d", {
				templateUrl: "d.html"
			}).otherwise({
				redirectTo: "/a"
			})

		}])
	
	
	var down=document.getElementsByClassName('down')[0]
	var up=document.getElementsByClassName('up')[0]
	var otxt=document.getElementsByClassName('text-lsb')[0]
	down.onclick=function(){
		move(otxt,{bottom:-170},500)
		up.style.display="block"
		down.style.display="none"
	}
	up.onclick=function(){
		move(otxt,{bottom:0},500)
		down.style.display="block"
		up.style.display="none"
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
