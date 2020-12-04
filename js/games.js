let MainContainer = document.getElementById("container");
let p = document.createElement("a");
let MainDiv = document.createElement("div");

let num = Math.floor(Math.random() * 15)

if(num == 0) {
    num === 1;
}

fetch("https://genius.p.rapidapi.com/artists/" + num, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "60933f7a25msh463c4213097c6f4p1cd76cjsn9f98d620d4ef",
		"x-rapidapi-host": "genius.p.rapidapi.com"
	}
})
.then(response => {
    console.log(response);

    p.textContent = response.json.arguments;
    
    MainContainer.appendChild(MainDiv);
    MainDiv.appendChild(p);
})
.catch(err => {
	console.error(err);
});