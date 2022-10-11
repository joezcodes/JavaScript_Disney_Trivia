	// Colors
	let color1 = 'green';
	let color2 = 'red';
	let color3 = 'white';

	// Button and text elements 
	let btn1 = document.getElementById('button');
	let answer = document.getElementById('text');
	
	// Answer areas for color change
	let box1 = document.getElementById('ans1');
	let box2 = document.getElementById('ans2');
	let box3 = document.getElementById('ans3');
	let box4 = document.getElementById('ans4');

	//check boxes elements 
	let cbox1 = document.getElementById('cbox1');
	let cbox2 = document.getElementById('cbox2');
	let cbox3 = document.getElementById('cbox3');
	let cbox4 = document.getElementById('cbox4');

	// Function if check boxes are checked	
	function clickMe() {
		if (cbox1.checked){
		   wrongColor1();
		}
		else if (cbox2.checked){
		   wrongColor2();
		}
		else if (cbox3.checked){
		   correctColor3();
		} 
		else if (cbox4.checked){
		   wrongColor4();
		}
		
	}

	// functions for correct colors boxes 1 thru 4
	function correctColor1(){
		box1.style.background = color1;
		box1.style.color = color3;
	}

	function correctColor2(){
		box2.style.background = color1;
		box2.style.color = color3;
	}

	function correctColor3(){
		box3.style.background = color1;
		box3.style.color = color3;
	}

	function correctColor4(){
		box4.style.background = color1;
		box4.style.color = color3;
	}


	// functions for wrong colors boxes 1 thru 4
	function wrongColor1(){
		box1.style.background = color2;
		box1.style.color = color3;
	}

	function wrongColor2(){
		box2.style.background = color2;
		box2.style.color = color3;
	}

	function wrongColor3(){
		box3.style.background = color2;
		box3.style.color = color3;
	}

	function wrongColor4(){
		box4.style.background = color2;
		box4.style.color = color3;
	}

	// Display correct answer
	function solution() {
		answer.style.display = "block";
	}

	// event listener for when button is clicked
	// run 2 functions
	btn1.addEventListener('click', () => {
		solution();
		clickMe();

	})