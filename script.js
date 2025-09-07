
console.log("hlo");
const cards = document.querySelector('#cards');

fetch(`http://192.168.1.3:8000/movieapi/`)
.then((data)=> {return data.json()})
.then((info)=> {


	for(let i= 0; i<info.length; i++){


		const box1= document.createElement("div");
		cards.appendChild(box1);
		box1.classList.add("main");
		


		

		const img1= document.createElement("img");
		img1.src = info[i].image;
		box1.appendChild(img1);
		img1.classList.add("box2");
		



		const name = document.createElement("h3");
		box1.appendChild(name);
		 name.innerText = "NAME : "+ info[i].name;
		 	box1.classList.add("box3");


		 const rate = document.createElement("p");
		rate.appendChild(rate);
		rate.innerText = "RATE : "+ info[i].rating;
		box1.classList.add("box4");



		const description = document.createElement("p");
		description.appendChild(description);
		 description.innerText = "DESCRIPTION: "+ info[i].description;
		 box1.classList.add("box5");





}});
