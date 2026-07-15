const page_selection = document.querySelector("#page-selection");

const main_page = document.querySelector("#main-page");
const page_2 = document.querySelector("#page-2");

const loading_page = document.querySelector("#loading-page");
let loaded = false;
loading_page.addEventListener("click", prepare);

const footer = document.querySelector("footer");

let colorInterval = null;

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
			menu_button.onclick = resetElements;
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
	
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
}

function showMenuElements(page)
{
	resetElements();

	page.classList.remove("hiddenSection");
}

const rainbow_text = document.querySelector("#rainbow-text");
let hue = 0;

function switch_color()
{
	rainbow_text.style.color = `hsl(${hue}, 100%, 50%)`;
	hue++;
	
	if (hue>=360) hue=0;
}

colorInterval = setInterval(switch_color, 10)