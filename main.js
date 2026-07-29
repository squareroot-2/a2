// screw off validators sob
/*jshint esversion: 6 */

// Page selection

const page_selection = document.querySelector("#page-selection");

const main_page = document.querySelector("#main-page");
const page_2 = document.querySelector("#page-2");
const page_3 = document.querySelector("#page-3");
const game_page = document.querySelector("#page-4");

const pagebutton_text = ["About", "History", "Notable Formulas", "Games"];
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
];

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
			loading_page.style.minHeight = "60px";

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
				let hamburgerElement_button = document.createElement("button");

				hamburgerElement_button.textContent = pagebutton_text[i];
				hamburgerElement_button.classList.add('loading_button');
				hamburgerElement_button.classList.add('hamburger_elements');

				hamburger_menu.appendChild(hamburgerElement_button);
				menu_buttons.push(hamburgerElement_button);
			}

			// event delegation
			hamburger_menu.addEventListener('click', function(event) {
				let button_click = event.target;

				if (!pagebutton_text.includes(button_click.textContent)) return;
				let button_index = pagebutton_text.indexOf(button_click.textContent);

				showMenuElements(pages[button_index]);
			});

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
			};

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
}

function resetElements()
{
	for (const child of page_selection.children) 
	{
		if (!child.classList.contains("hiddenSection"))
		{
			child.classList.add("hiddenSection");
		}
	}

	for (let i = 0; i<questions.childElementCount; i++)
	{
		var answer = document.querySelector(`input[name='q${i+1}']:checked`);
		
		questions.children[i].style = "";

		if (answer) answer.checked = false;
	}
	
	game_begin = false;
	game_menu.style = "";

	scorebox.textContent = "Not submitted";
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
});

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
});

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
colorInterval = setInterval(switch_color, 10);

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

var answers=["3.1415", "Leonard Euler", "1900BC" , "1 inscribed polygon and 1 circumscribed polygon"];
function CheckAns()
{
	let score = 0;
	let not_answered = 0;
	
	for (let i = 0; i<questions.childElementCount; i++)
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
	else if (not_answered >= 1) scorebox.textContent = `Score: ${score}/${answers.length}, Empty: ${not_answered}/${answers.length}`;
	else scorebox.textContent = `Score: ${score}/${answers.length}`;
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
});

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

const circle_detect = document.querySelector("#click_input");
const gameBeat = document.querySelector(".game_beat");

const pi = "31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";

let game_score = 0;
let game_begin = false;
let index_pi = 0;

// GODLY, PERFECT, GREAT, GOOD, BAD 
let timings = [0, 0, 0, 0, 0];

const min_speed = 750;
let anim_Time = min_speed;	
gameBeat.style.animationDuration = `${anim_Time/1000}s`;

function calcTiming(i)
{
	let key_distance = 10;
	if (index_pi > 0) key_distance = Math.abs(Number(pi[i]) - Number(pi[i-1]));
	let speed = min_speed + (75 * key_distance) - (4 * i);
	return speed;
}

let time_end = 0;
let chart_duration = 0;
for (let i = 0; i < pi.length; i++)
{
	chart_duration += (calcTiming(i)+100);
}

function game_Update()
{
	if (game_page.classList.contains("hiddenSection")) return;
	if (!game_begin) return;
 
	if (!hit && index_pi != 0) misses++;
	hit = false;

	console.log("New beat going!");
	
	// Set new animation time

	anim_Time = calcTiming(index_pi);
	
	gameBeat.style.animationDuration = `${anim_Time/1000}s`;
	gameBeat.style.opacity = 1;

	gameBeat.classList.add("animation_play");
	gameBeat.textContent = pi[index_pi];

	index_pi++;

	gameScoreboard.textContent = `score:${game_score}, misses:${misses}`;
	progressTxt.textContent = `${pi.slice(index_pi-	1)}`;

	setTimeout(function() 
	{
		gameBeat.classList.remove("animation_play");
	}, anim_Time+50);

	console.log(index_pi);
	if ( index_pi < (pi.length) )
	{
		setTimeout(function(){
			game_Update();
		}, anim_Time+100);
	}
	else
	{
		let accuracy = 4 * (timings[0] + timings[1]) + 3 * timings[2] + 2 * timings[3] + timings[4];
		accuracy = accuracy / (4 * pi.length);
		accuracy = 100 * accuracy;
		accuracy = Math.floor(accuracy * 100) / 100;

		gameScoreboard.textContent = "game end: " + misses;
		game_menu.querySelector("p").innerHTML = 
	
		`
		Timings: <br>
		GODLY: ${timings[0]}, <br>
		PERFECT: ${timings[1]}, <br>
		GREAT: ${timings[2]}, <br>
		GOOD: ${timings[3]}, <br>
		BAD: ${timings[4]}, <br>
		MISSES: ${misses} <br>

		Accuracy: ${accuracy}%
		`;

		game_menu.style.top = "50%";
		game_begin = false;
	}
}

function remove_button_style()
{
	circle_detect.style = "";
}

const gameScoreboard = document.querySelector("#game_scoreboard");
const hitIndicator = document.querySelector("#hitIndicator");
const progressTxt = document.querySelector("#progress");
const timerTxt = document.querySelector("#timeLeft");

let misses = 0;
let hit = true;

const game_menu = document.querySelector("#game_menu");

game_menu.querySelector("button").addEventListener("click", function(){
	game_menu.style.top = "-100%";

	setTimeout(game_Start, 1000);
});

function game_Timer()
{
	if (!game_begin) return;
	
	let timeleft_ms = time_end-performance.now();

	let timeleft = (timeleft_ms)/1000;
	timeleft = Math.floor(timeleft * 10)/10;

	let percentage = 100*(chart_duration-timeleft_ms)/chart_duration;
	percentage = Math.floor(percentage * 10)/10;

	if (timeleft < 0) timeleft = 0;
	if (percentage > 100) percentage = 100;

	timerTxt.textContent = `Time left: ${timeleft}. Chart ${percentage}% completed.`;

	setTimeout(game_Timer, 50);
}

function game_Start()
{
	if (game_begin) return;

	game_begin = true;

	time_end = performance.now() + chart_duration;
	game_Timer();

	game_score = 0;
	misses = 0;
	index_pi = 0;

	game_Update();
	hit = false;
}

function key_press(key)
{
	hit = true;
	gameBeat.style.opacity = 0;
	circle_detect.textContent = key;
	circle_detect.style.backgroundColor = "red";
	setTimeout(remove_button_style, 100);

	let gameBeat_moment = window.getComputedStyle(gameBeat);
	let clickbeat_Pos = window.getComputedStyle(circle_detect);
	
	let gl = Number(gameBeat_moment.left.slice(0, -2));
	let cl = Number(clickbeat_Pos.left.slice(0, -2));

	let distance = Math.abs(gl-cl);
	
	let hitIndicate = "";
	
	let circle_size = circle_detect.clientWidth;

	if (key == gameBeat.textContent)
	{
		// GODLY
		if (distance < (circle_size/45))
		{
			hitIndicate = "GODLY!";
			hitIndicator.style.color = "#f7fc99";
			timings[0]++;
			game_score += 2000;
		}

		// PERFECT
		else if (distance < (circle_size/5))
		{
			hitIndicate = "PERFECT!";
			hitIndicator.style.color = "#ff9ef9";
			timings[1]++;
			game_score += 1000;
		}

		// GREAT
		else if (distance < (circle_size/2))
		{
			hitIndicate = "GREAT!";
			hitIndicator.style.color = "#34fe74";
			timings[2]++;
			game_score += 500;
		}

		// GOOD
		else if (distance < (circle_size/2) + (circle_size/4))
		{
			hitIndicate = "GOOD!";
			hitIndicator.style.color = "#afffe8";
			timings[3]++;
			game_score += 250;
		}

		// BAD
		else if (distance < circle_size + (circle_size/4))
		{
			hitIndicate = "BAD!";
			hitIndicator.style.color = "#ffdf86";
			timings[4]++;
			game_score += 100;
		}

		// MISS
		else
		{
			misses++;
			hitIndicate = "MISS!";
			hitIndicator.style.color = "#ffd2d2";
			game_score -= 100;
		}
	}
	else
	{
		// MISS
		misses++;
		hitIndicate = "MISS!";
		hitIndicator.style.color = "#ffd2d2";
		game_score -= 25;
	}

	hitIndicator.textContent = hitIndicate;
	hitIndicator.classList.add("animation_play");

	setTimeout(function()
	{
		hitIndicator.classList.remove("animation_play");
	}, 600);	
}

let lon = ['0','1','2','3','4','5','6','7','8','9'];
document.addEventListener("keydown", function(event){
	if (!lon.includes(event.key)) return;
	if (gameBeat.style.opacity == 0) return;

	key_press(event.key);
});

let game_buttons = document.querySelector(".gameButtons");

game_buttons.addEventListener("click", function(event) {
	let sender = event.target;

	if (!lon.includes(sender.textContent)) return;
	if (!game_begin) return;

	key_press(sender.textContent);
});