import { games } from "../js/spotifydata.js";

const MainContainer = document.getElementById("container");

let num = Math.floor(Math.random() * 20);

const PhotoBoxes = games.map(SpacePhotos => {
    let CatBox = games.find(Cat => {
        return Cat.albums === SpacePhotos.albums;
    });

    return {
        Name: CatBox.albums.items[num].artists[0].name,
        Album: CatBox.albums.items[num].name,
        Link: CatBox.albums.items[num].external_urls.spotify,
        
        
        
    };


});




PhotoBoxes.forEach(SpacePhotos => {
	let pee = document.createElement("h1");
	
	// let img = document.createElement("img");
	let Mana = document.createElement("a");
	let Where = document.createElement("a");

	let MainDiv = document.createElement("div");

	pee.className = "pee";
	Mana.className = "peenoa";
    Where.className = "peeno";
    
    
	

	MainDiv.className = "MainDiv";

	pee.textContent = SpacePhotos.Name;
	// img.src = SpacePhotos.img
    Mana.textContent = SpacePhotos.Album;
    Mana.setAttribute("href", SpacePhotos.Link);
    Mana.setAttribute("target", "_blank");
    // Where.textContent = SpacePhotos.Link;
    // Where.setAttribute("href", SpacePhotos.Link);
    // MainDiv.setAttribute("href", SpacePhotos.Link);

	

	MainContainer.appendChild(MainDiv);
	MainDiv.appendChild(pee);
	// MainDiv.appendChild(img);
    MainDiv.appendChild(Mana);
    MainDiv.appendChild(Where);


    console.log(pee);
});

