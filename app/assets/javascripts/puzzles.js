$(document).ready(function(){
	var img = document.getElementById("puzzle-image")
	var width = img.clientWidth
	var height = img.clientHeight
	$(".puzzle-div").width(width).height(height)
	$(".puzzle-div").click(function(e){
		target = document.querySelector("div.target")
		$(target).remove()
		var x = e.pageX - $(this).offset().left
		var y = e.pageY - $(this).offset().top
		$(this).append("<div class='target'></div>")
		target = document.querySelector("div.target")
		$(target).css({"top": y-5,"left": x-5})
		$(target).animate({height: "50px", width: "50px", top: "-=25", left: "-=25"},200, function(){
			if (x > 533 && x < 562 && y > 145 && y < 183) {
				alert("WIN")
			}
		})
	})
})