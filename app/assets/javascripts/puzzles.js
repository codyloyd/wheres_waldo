$(document).ready(function(){
	var solution_x = gon.solution_x
	var solution_y = gon.solution_y
	var img = document.getElementById("puzzle-image")
	var width = img.clientWidth
	var height = img.clientHeight
	$(".puzzle-div").width(width).height(height)
	$(".puzzle-div").click(function(e){
		target = document.querySelector("div.target")
		$(target).remove()
		var x = e.pageX - $(this).offset().left
		var y = e.pageY - $(this).offset().top
		console.log(x,y)
		$(this).append("<div class='target'></div>")
		target = document.querySelector("div.target")
		$(target).css({"top": y-5,"left": x-5})
		$(target).animate({height: "50px", width: "50px", top: "-=25", left: "-=25"},200, function(){
			if (x > solution_x - 20 && x < solution_x + 20 && y > solution_y - 20 && y < solution_y + 20) {
				alert("WIN")
			}
		})
	})
})
