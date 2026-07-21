// Page selection

const page_selection = document.querySelector("#page-selection");

const main_page = document.querySelector("#main-page");
const page_2 = document.querySelector("#page-2");

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
			loading_page.style.width = "40vw";
			
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

			let menu_button_2 = document.createElement("button");

			menu_button_2.textContent = "About Pi";
			menu_button_2.classList.add('loading_button');

			menu_button_2.style.opacity = 0;

			menu_button_2.onclick = function() {
				showMenuElements(main_page);
			};

			loading_page.appendChild(menu_button_2);

			let menu_button_3 = document.createElement("button");

			menu_button_3.textContent = "History";
			menu_button_3.classList.add('loading_button');

			menu_button_3.style.opacity = 0;

			menu_button_3.onclick = function() {
				showMenuElements(page_2);
			};

			loading_page.appendChild(menu_button_3);

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
		if (answer) answer.checked = false;
	}

	scorebox.textContent = "Not submitted"
}

function showMenuElements(page)
{
	resetElements();

	page.classList.remove("hiddenSection");
	
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
score=0;

var answers=["3.1415", "Leonard Euler", "1900BC" , "Leonard Euler"]
function CheckAns()
{
	score = 0;
	
	for (i = 0; i<questions.childElementCount; i++)
	{
		var answer = document.querySelector(`input[name='q${i+1}']:checked`);
		if (!answer) continue;
		if(answer.value==answers[i])score++;
	}

	scorebox.textContent = `Score: ${score}/${answers.length}`
}