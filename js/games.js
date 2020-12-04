import { games } from "../js/gamesdata.js";

const MainContainer = document.getElementById("container");

const PhotoBoxes = games.map(SpacePhotos => {
    let CatBox = games.find(Cat => {
        return Cat.first_name === SpacePhotos.first_name;
    });

    return {
		Name: CatBox.first_name,
		mana: CatBox.last_name,
		where: CatBox.team.full_name,
        
    };

});


PhotoBoxes.forEach(SpacePhotos => {
	let pee = document.createElement("h1");
	
	let img = document.createElement("img");
	let Mana = document.createElement("p");
	let where = document.createElement("p");

	let MainDiv = document.createElement("div");

	pee.className = "pee";
	Mana.className = "peeno";
	where.className = "peeno";
	

	MainDiv.className = "MainDiv";

	pee.textContent = SpacePhotos.Name + " " + SpacePhotos.mana;
	img.src = SpacePhotos.img
	Mana.textContent = SpacePhotos.mana;
	where.innerHTML = "Team: " + SpacePhotos.where;

	

	MainContainer.appendChild(MainDiv);
	MainDiv.appendChild(pee);
	// MainDiv.appendChild(img);
	// MainDiv.appendChild(Mana);
	MainDiv.appendChild(where);


    console.log(pee);
});

