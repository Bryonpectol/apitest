import { games } from "../js/maindata.js";

const MainContainer = document.getElementById("container");

const PhotoBoxes = games.map(SpacePhotos => {
    let CatBox = games.find(Cat => {
        return Cat.name === SpacePhotos.name;
    });

    return {
		Name: CatBox.name,
		Pop: CatBox.population,
		Call: CatBox.callingCodes,
		Region: CatBox.region,
		SubR: CatBox.subregion,
		Cap: CatBox.capital,
		Currencies: CatBox.currencies,
		Loc: CatBox.latlng,
		Time: CatBox.timezones,
        
    };

});


PhotoBoxes.forEach(SpacePhotos => {
	let pee = document.createElement("h1");
	let popu = document.createElement("p");
	let call = document.createElement("p");
	let reg = document.createElement("p");
	let subr = document.createElement("p");
	let Cap = document.createElement("p");
	let cur = document.createElement("p");
	let loc = document.createElement("a");
	let time = document.createElement("p");


	let MainDiv = document.createElement("div");

	pee.className = "pee";
	reg.className = "peeno";
	subr.className = "peeno";
	popu.className = "peeno";
	call.className = "peeno";
	Cap.className = "peeno";
	cur.className = "peeno";
	loc.className = "peenoa";
	time.className = "peeno";

	MainDiv.className = "MainDiv";

	pee.textContent = SpacePhotos.Name;
	popu.innerHTML = "Population: " + SpacePhotos.Pop;
	call.innerHTML = "Calling Code: " + SpacePhotos.Call;
	reg.innerHTML = "Region: " + SpacePhotos.Region;
	subr.innerHTML = "Sub-Region: " + SpacePhotos.SubR;
	Cap.innerHTML = "Capital: " + SpacePhotos.Cap;
	cur.innerHTML = "Currencies: " + SpacePhotos.Currencies;
	loc.innerHTML = "Google Maps Location";
	time.innerHTML = "Timezone(s): " + SpacePhotos.Time;

	loc.href="https://www.google.com/maps/place/" + SpacePhotos.Loc;
	loc.setAttribute("target", "_blank")

	MainContainer.appendChild(MainDiv);
	MainDiv.appendChild(pee);
	MainDiv.appendChild(Cap);
	MainDiv.appendChild(reg);
	MainDiv.appendChild(subr);
	MainDiv.appendChild(popu);
	MainDiv.appendChild(call);
	MainDiv.appendChild(cur);
	MainDiv.appendChild(time);
	MainDiv.appendChild(loc);


    console.log(pee);
});

