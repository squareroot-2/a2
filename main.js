// Page selection

const page_selection = document.querySelector("#page-selection");

const main_page = document.querySelector("#main-page");
const page_2 = document.querySelector("#page-2");
const page_3 = document.querySelector("#page-3");
const game_page = document.querySelector("#page-4")

const pagebutton_text = ["About", "History", "Notable Formulas", "Games"]
const pages = [main_page, page_2, page_3, game_page];

const loading_page = document.querySelector("#loading-page");
let loaded = false;
loading_page.addEventListener("click", prepare);

const footer = document.querySelector("footer");

const h2_loading_text = document.querySelector("#aura-loading");
const random_text = [
	'Fill the aura of an <span id="rainbow-text"> endless amount of </span> digits?',
	'Ready to learn to be a <span id="rainbow-text">PI</span>-oneer..?',
	'<span id="rainbow-text"> 3.14159265</span>...',
	'Still discovering digits of <span id="rainbow-text">pi</span>...',
	'Usually, <span id="rainbow-text">pies are made as a circle</span>.',
	'Still counting <span id="rainbow-text"> digits of pi...</span>',
	'Face my <span id="rainbow-text"> Irrationality!</span>'
]

let random_num = Math.floor( Math.random() * random_text.length );
h2_loading_text.innerHTML = random_text.at(random_num);
 
function prepare() {
	if (!loaded)
	{
		loaded = true;
		
		clearInterval(colorInterval);
		
		rainbow_text.style.color = "inherit";
		
		loading_page.style.transition = "all 0.75s";
		loading_page.style.color = "rgba(255,0,0,1)";
		
		setTimeout(function(){
			loading_page.style.transition = "all 0.5s";

			loading_page.style.backgroundColor = "rgba(0,0,0,0.4)";
			loading_page.style.color = "rgba(0,0,0,0)";
		}, 400);

		setTimeout(function(){
			loading_page.style.transition = "all 1.8s";

			loading_page.style.height = "10vh";
			loading_page.style.width = "45vw";

			if (window.screen.width < 800)
			{
				loading_page.style.width = "90vw";
			}

			window.addEventListener("resize", function()
			{
				if (window.screen.width < 800)
				{
					loading_page.style.width = "90vw";
				}
				else
				{
					loading_page.style.width = "45vw";
				}

				let width_vw = loading_page.style.width.substr(0,2);
				loading_page.style.left = (100 - width_vw) / 2 + "vw";
				loading_page.style.top = "1.75vh";
			});

			loading_page.style.borderRadius = "5% / 35%";
			
			let width_vw = loading_page.style.width.substr(0,2);

			loading_page.style.left = (100 - width_vw) / 2 + "vw";
			loading_page.style.top = "1.75vh";
			
			footer.classList.remove("hiddenSection");
		}, 900);
		
		setTimeout(function(){
			loading_page.style.transition = "all 0.05s";
			
			for (const child of loading_page.children) 
			{
				loading_page.removeChild(child);
			}
			
			// Deletes all children of the loading page as it's repurposed as a menu//
			loading_page.replaceChildren();
			
			loading_page.style.flexDirection = "row";
			loading_page.style.justifyContent = "space-around";
			
			// --- MENU BUTTON RESET --- //
			let menu_button = document.createElement("button");
			menu_button.textContent = "";
			menu_button.classList.add('loading_button');
			menu_button.style.opacity = 0;
			menu_button.onclick = function() {
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: 'smooth'
				});
				
				setTimeout(resetElements, 500);
			};
			loading_page.appendChild(menu_button);

			let menu_icon = document.createElement("div");

			menu_icon.style.width = "50px";
			menu_icon.style.height = "50px";

			menu_icon.style.backgroundImage = "url(images/retry.png)";
			menu_icon.style.backgroundSize = "cover";
			menu_icon.style.backgroundRepeat = "norepeat";

			menu_button.appendChild(menu_icon);

			// --- MENU BUTTONS --- //

			let hamburger_menu = document.createElement("div");
			hamburger_menu.classList.add("hamburger_menu");

			let menu_buttons = [];
			for (let i = 0; i < pages.length; i++)
			{
				let child = pages[i];
				let hamburgerElement_button = document.createElement("button");

				hamburgerElement_button.textContent = pagebutton_text[i];
				hamburgerElement_button.classList.add('loading_button');
				hamburgerElement_button.classList.add('hamburger_elements');

				hamburgerElement_button.onclick = function() {
					showMenuElements(child);
				};

				hamburger_menu.appendChild(hamburgerElement_button);
				menu_buttons.push(hamburgerElement_button);
			}

			hamburger_menu.style.opacity = 0;

			loading_page.append(hamburger_menu);

			// -- HAMBURGGGERR -- //

			let hamburger_button = document.createElement("button");
			let hamburger_icon = menu_icon.cloneNode(true);
			
			hamburger_icon.style.backgroundImage = "url(images/hamburger.png)";

			hamburger_button.classList.add('loading_button');
			hamburger_button.id = "hamburger";

			hamburger_button.style.opacity = 0;

			let thing = 0;
			hamburger_button.onclick = function() {
				if (thing == 0) 
				{
					hamburger_menu.style.display = "flex";
					thing = 1;
				}
				else if (thing == 1)
				{
					hamburger_menu.style = "";
					thing = 0;
				}
			}

			hamburger_button.append(hamburger_icon);
			loading_page.append(hamburger_button);

			// --- MENU BUTTON SCROLL UP --- //

			let menu_button_6 = document.createElement("button");
			menu_button_6.textContent = "";
			menu_button_6.classList.add('loading_button');
			menu_button_6.style.opacity = 0;
			menu_button_6.onclick = function() {
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: 'smooth'
				});
			};
			loading_page.appendChild(menu_button_6);

			let menu_icon_2 = menu_icon.cloneNode(true);
			menu_icon_2.style.backgroundImage = "url(images/scrollup.png)";
			menu_button_6.appendChild(menu_icon_2);

		}, 900+1800);

		setTimeout(function(){
			for (const child of loading_page.children) 
			{
				child.style.transition = "opacity 0.8s";
				child.style.opacity = 1;
			}
		}, 900+1800+500);

		setTimeout(function(){
			for (const child of loading_page.children) 
			{
				child.style = "";
			}
		}, 900+1800+500+800);
	}
};

function resetElements()
{
	for (const child of page_selection.children) 
	{
		if (!child.classList.contains("hiddenSection"))
		{
			child.classList.add("hiddenSection");
		}
	}

	for (i = 0; i<questions.childElementCount; i++)
	{
		var answer = document.querySelector(`input[name='q${i+1}']:checked`);
		
		questions.children[i].style = "";

		if (answer) answer.checked = false;
	}

	scorebox.textContent = "Not submitted"
}

function showMenuElements(page)
{
	resetElements();

	page.classList.remove("hiddenSection");

	for (let i = 0; i < page.childElementCount; i++)
	{
		let child = page.children[i];
		child.style.backgroundPosition = '50% 50%';
	}
	
	page.scrollIntoView({ 
		behavior: "smooth"
	});
}

// History page 2

let id = 0;

const history_articles = document.querySelector("#history-articles");
const history_pageScore = document.querySelector("#history-pageScore");

const left_button = document.querySelector("#go-left");
const right_button = document.querySelector("#go-right");

history_pageScore.textContent = `Page: ${id+1}/${history_articles.childElementCount}`;

left_button.addEventListener('click', function()
{
	for (const child of history_articles.children)
	{
		if (!child.classList.contains("hiddenSection"))
		{
			child.classList.add("hiddenSection");
		}
	}

	id--;
	
	if (id >= history_articles.childElementCount) id = 0;
	else if (id < 0) id = history_articles.childElementCount-1;

	history_pageScore.textContent = `Page: ${id+1}/${history_articles.childElementCount}`;
	history_articles.children[id].classList.remove("hiddenSection");
})

right_button.addEventListener('click', function()
{
	for (const child of history_articles.children)
	{
		if (!child.classList.contains("hiddenSection"))
		{
			child.classList.add("hiddenSection");
		}
	}

	id++;
	
	if (id >= history_articles.childElementCount) id = 0;
	else if (id < 0) id = history_articles.childElementCount-1;

	history_pageScore.textContent = `Page: ${id+1}/${history_articles.childElementCount}`;
	history_articles.children[id].classList.remove("hiddenSection");
})

// Loading page rainbow text
const rainbow_text = document.querySelector("#rainbow-text");
let hue = 0;

function switch_color()
{
	rainbow_text.style.color = `hsl(${hue}, 100%, 50%)`;
	hue++;
	
	if (hue>=360) hue=0;
}

let colorInterval = null;
colorInterval = setInterval(switch_color, 10)

// Full screen
const btnFS=document.querySelector("#btnFS");
const btnWS=document.querySelector("#btnWS");

btnFS.addEventListener("click", enterFullscreen);
btnWS.addEventListener("click", exitFullscreen);

btnWS.style.display = "none";

function enterFullscreen() { //must be called by user generated event
	if (document.documentElement.requestFullscreen) {
	document.documentElement.requestFullscreen();
	} else if (document.documentElement.mozRequestFullScreen) { // Firefox
	document.documentElement.mozRequestFullScreen();
	} else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
	document.documentElement.webkitRequestFullscreen();
	} else if (document.documentElement.msRequestFullscreen) { // IE/Edge
	document.documentElement.msRequestFullscreen();
	}

	btnFS.style.display = "none";
	btnWS.style.display = "block";
}

function exitFullscreen() {
	if (document.exitFullscreen) {
	document.exitFullscreen();
	} else if (document.mozCancelFullScreen) { // Firefox
	document.mozCancelFullScreen();
	} else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
	document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) { // IE/Edge
	document.msExitFullscreen();
	}

	btnFS.style.display = "block";
	btnWS.style.display = "none";
}

// Quiz
const questions=document.querySelector("#questions");

const btnSubmit=document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click",CheckAns);

const scorebox=document.querySelector("#scorebox");

var answers=["3.1415", "Leonard Euler", "1900BC" , "1 inscribed polygon and 1 circumscribed polygon"]
function CheckAns()
{
	score = 0;
	not_answered = 0;
	
	for (i = 0; i<questions.childElementCount; i++)
	{
		var answer = document.querySelector(`input[name='q${i+1}']:checked`);
		if (!answer) 
		{
			questions.children[i].style.borderColor = "white";
			not_answered++;
			continue;
		}

		if(answer.value==answers[i])
		{
			questions.children[i].style.borderColor = "lime";
			score++;
		}
		else
		{
			questions.children[i].style.borderColor = "red";
		}
	}

	if (not_answered == answers.length) scorebox.textContent = 'Answer the questions!';
	else if (not_answered >= 1) scorebox.textContent = `Score: ${score}/${answers.length}, Empty: ${not_answered}/${answers.length}`
	else scorebox.textContent = `Score: ${score}/${answers.length}`
}

// Document 
document.addEventListener("scroll", function(){
	let visiblePage;
	for (const child of page_selection.children) 
	{
		if (!child.classList.contains("hiddenSection"))
		{
			visiblePage = child;
		}
	}

	if (!visiblePage) return;

	for (let i = 0; i < visiblePage.childElementCount; i++)
	{
		let child = visiblePage.children[i];
		child.style.backgroundPosition = `50% calc(50% + ${window.scrollY}px - ${ (i+1) * 100}vh)`;
	}
})

let linkButton1 = document.querySelector("#link-1");
let linkButton2 = document.querySelector("#link-2");

linkButton1.addEventListener("click", function()
{
	window.open('https://www.youtube.com/watch?v=YokKp3pwVFc','_blank');
});

linkButton2.addEventListener("click", function()
{
	window.open('https://en.wikipedia.org/wiki/Euler%27s_formula','_blank');
});

// GAMEEEEEE

// W:900, H:450

const game_canvas = document.querySelector("#game");
const gm_ctx = game_canvas.getContext("2d");

const pi = "55555" //"31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";

let keypress_time = performance.now();
let keypress_type = "";

let mistakes = 0; 
let presses = 0;

// Stats
let num = 0;
let combo = 0;
let highest_combo = 0;

// COOL STUFF
let RV = (Math.random() * 5) + 50;
let TV = performance.now();
let SOV = 0;

function update_canva()
{
	// Clear all
	gm_ctx.clearRect(0,0, game_canvas.width, game_canvas.height);

	//// Background

	// Create gradient
	const grad = gm_ctx.createRadialGradient(
		(game_canvas.width/2), // x pos of circle start
		(game_canvas.height/2), // y pos of circle start
		200, // radius of circle start
		(game_canvas.width/2), // x pos of circle end
		(game_canvas.height/2), // x pos of circle end
		800 // radius of circle end
	);

	grad.addColorStop(0,"#cd85c9");
	grad.addColorStop(1,"#aa7ebc");

	// Fill rectangle with gradient
	gm_ctx.fillStyle = grad;
	gm_ctx.fillRect(
		0,
		0,
		game_canvas.width,
		game_canvas.height
	);

	gm_ctx.beginPath();

	// Set start-point

	gm_ctx.moveTo(
		0, 
		(game_canvas.height/2)
	);

	const thing = 100;
	
	if ( ((performance.now() - TV) / 1000) > 0.05) 
	{
		RV = (Math.random() * 5) + 50;
		TV = performance.now();
		SOV++;
	}
	
	for (let i = 0; i < thing; i++)
	{
		gm_ctx.lineTo(
			( (i+1)/thing ) * game_canvas.width, 
			(game_canvas.height/2) + Math.sin( ((i+1) / 2 * thing) + (SOV*0.05)) * RV
		);
	}

	gm_ctx.stroke();

	//// GAMEPLAY

	// Box

	let rect_stroke = "#000000";
	let rect_color = "#8e7575";
	let combo_color = "#f7f9ff"
	
	if ( ((performance.now() - keypress_time) / 1000) < 0.125) 
	{
		// SUCCESSFUL PRESS -- PRESS CORRECT KEY
		if (keypress_type == "success") 
		{
			rect_color = "#bcffba", combo_color = "#046101";
		}

		// FAILURE PRESS -- MESSED UP COMBO
		else if (keypress_type == "fail") 
		{
			rect_color = "#ffb2b2", combo_color = "#6b1111";
		}
	} 
	else 
	{
		rect_color = "#8e7575";
		combo_color = "#063d06";
	}

	// STROKE
	gm_ctx.strokeStyle = rect_stroke;
	gm_ctx.lineWidth = 3;

	// FILL
	gm_ctx.fillStyle = rect_color;

	// DRAW
	let size = [100, 120+20];

	gm_ctx.strokeRect(
		(game_canvas.width/2) - (size[0]/2),
		(game_canvas.height/2 + 300) - (size[1]/2), 
		size[0],
		size[1]
	);

	gm_ctx.fillRect(
		(game_canvas.width/2) - (size[0]/2),
		(game_canvas.height/2 + 300) - (size[1]/2), 
		size[0],
		size[1]
	);
	
	// Text
	gm_ctx.fillStyle = combo_color;
	gm_ctx.font = '120px Latin Modern Math';

	var textString = pi.substring(num).split("").join(" ");

	gm_ctx.fillText(
		textString,
		(game_canvas.width/2) - (gm_ctx.measureText("3").width / 2),
		(game_canvas.height)/2 - 300
	);

	gm_ctx.fillStyle = combo_color;
	gm_ctx.font = '30px Arial';

	// STATS
	let text = `Combo: ${combo}`;
	gm_ctx.fillText(
		text,
		(game_canvas.width/2) - (gm_ctx.measureText(text).width / 2),
		(game_canvas.height/2) + 40
	);

	gm_ctx.fillStyle = combo_color;
	gm_ctx.font = '30px Arial';

	if (combo >= highest_combo) highest_combo = combo;

	text = `Highest Combo: ${highest_combo}`;
	gm_ctx.fillText(
		text,
		(game_canvas.width/2) - (gm_ctx.measureText(text).width / 2),
		(game_canvas.height/2)
	);

	let accuracy = 100;
	if (presses>0) accuracy = 100 * ( (presses-mistakes) /presses);
	accuracy = Math.round(accuracy * 100) / 100

	text = `Accuracy: ${accuracy}%`;
	gm_ctx.fillText(
		text,
		(game_canvas.width/2) - (gm_ctx.measureText(text).width / 2),
		(game_canvas.height/2) - 40
	);

	// New frame
	requestAnimationFrame(update_canva);
}

let lon = [0,1,2,3,4,5,6,7,8,9]
document.addEventListener("keypress", function(event){
	// Ignore if not on game page
	if (game_page.classList.contains("hiddenSection")) return;

	if (lon.includes( Number(event.key) ))
	{
		if (event.key == pi[num])
		{
			num++;
			combo++;
			keypress_type = "success";
		}
		else
		{
			combo = 0;
			keypress_type = "fail";
			mistakes++;
		}

		presses++;
		keypress_time = performance.now();
	}
	else if (event.key == 'r')
	{
		keypress_type = "";
		mistakes = 0; 
		presses = 0;
		num = 0;
		combo = 0;
		highest_combo = 0;
	}
});

update_canva();