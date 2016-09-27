$(document).ready(function(){
	var time = new Date().getTime()
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
				var winTime = new Date().getTime() - time
				// alert("WIN in " + (winTime/1000).toFixed(1) + " seconds")
				var div = document.createElement("div")
				$(div).addClass("win-prompt")
				$("body").append(div)
				$(".win-prompt").append("<h1>you found him!</h1> <h2> and it only took you " + (winTime/1000).toFixed(1) + " seconds!</h2>")
				$(".win-prompt").append("<button>Next Puzzle?</button>")
				$(".puzzle-div").unbind("click")

			}
		})
	})
})
