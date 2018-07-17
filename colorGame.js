window.setTimeout(function() {//Using this to allow html to load before javascript
}, 50);

	var colors = generateRandomColors(6);
	var squares = document.querySelectorAll(".square");
	var pickedColor = pickColor();
	var colorDisplay = document.querySelector("#colorDisplay");
	var messageDisplay = document.querySelector("#message");
	var h1 = document.querySelector("h1");
	var resetButton = document.querySelector("#buttonReset");
	var easyBtn = document.querySelector("#easyBtn");
	var hardBtn = document.querySelector("#hardBtn");
	
	colorDisplay.textContent = pickedColor;

	easyBtn.addEventListener("click", function(){
		resetButton.textContent = "New Colours";
		easyBtn.classList.add("selected");
		hardBtn.classList.remove("selected");
		colors = generateRandomColors(3);
		messageDisplay.textContent  = "";
		pickedColor= pickColor();
		for (var i = 0; i < colors.length; i++) {
			squares[i].style.backgroundColor = colors[i];
		}
		for (var i = 3; i < 6; i++){
			squares[i].style.display = "none";
		}
		h1.style.backgroundColor = "steelblue";
		colorDisplay.textContent = pickedColor;
	});

	hardBtn.addEventListener("click", function(){
		resetButton.textContent = "New Colours";
		hardBtn.classList.add("selected");
		easyBtn.classList.remove("selected");
		colors = generateRandomColors(6);
		messageDisplay.textContent  = "";
		pickedColor= pickColor();
		for (var i = 3; i < 6; i++){
			squares[i].style.display = "";
		}
		for (var i = 0; i < colors.length; i++) {
			squares[i].style.backgroundColor = colors[i];
		}
		h1.style.backgroundColor = "steelblue";
		colorDisplay.textContent = pickedColor;
	});

	resetButton.addEventListener("click",function(){
		messageDisplay.textContent  = "";
		this.textContent = "New Colours";
		colors = generateRandomColors(colors.length);
		pickedColor = pickColor();
		for (var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
		}
		h1.style.backgroundColor = "steelblue";
		colorDisplay.textContent = pickedColor;
	});

	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor){
				gameWon(pickedColor);
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}

	function gameWon(color){
		messageDisplay.textContent = "Correct!"
		for (var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = color;
		}
		h1.style.backgroundColor = color;
		resetButton.textContent = "Play Again?"
	}

	function pickColor(){
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
	}

	function generateRandomColors(size){
		var temp = [];
		var rand1;
		var rand2;
		var rand3;
		for (var i = 0; i < size; i++){
			rand1 = generateColorStr();
			rand2 = generateColorStr();
			rand3 = generateColorStr();
			temp[i] = "rgb(" + rand1 + ", " + rand2 + ", " + rand3 + ")";
		}
		return temp;
	}
	
	function generateColorStr(){
		return Math.floor(Math.random() * 256);
	}