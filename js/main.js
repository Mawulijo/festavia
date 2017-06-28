$(document).ready(function () {
	$('.carousel').carousel({
		interval: 5000 //changes the speed
	});//carousel images
	$("#suggestions").submit(function () {
		alert("Thanks for the comment ;-)");
		}) //onsubmit
    $("#contact").submit(function () {
		alert("Thanks. We will get right back tou you.");
		})
}); //ready