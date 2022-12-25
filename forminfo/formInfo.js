new TomSelect("#select-beast",{
	create: true,
	sortField: {
		field: "text",
		direction: "asc"
	}
});
new TomSelect("#select-code",{
	create: true,
    itemClass: 'refat',
	sortField: {
		field: "text",
		direction: "asc"
	}
});
new TomSelect("#select-budget",{
	create: true,
    itemClass: 'refat',
	sortField: {
		field: "text",
		direction: "asc"
	}
});


const children = document.getElementById("Children");
const aduilt = document.getElementById("aduilt");
const Infants = document.getElementById("Infants");
const addButton = document.querySelectorAll(".add")  
const removeButton = document.querySelectorAll(".remove")  
let childrenText = 0;
let aduiltText = 0;
let InfantsText = 0;

children.innerHTML ="children"
aduilt.innerHTML ="aduilt"
Infants.innerHTML ="Infants"

// event conter 
// add
function addCounter(type) {
	if(type == "aduilt"){
		aduilt.innerHTML = aduiltText += 1
	}
	if(type == "Children"){
		children.innerHTML = childrenText += 1
	}
	if(type == "infants"){
		Infants.innerHTML = InfantsText += 1
	}
	
}


// reomve
function removeCounter (type){

	if(type == "aduilt"  ){
	if(aduilt.innerHTML <= 1 ){
		aduilt.innerHTML = "aduilt"
	}else{

		aduilt.innerHTML = aduiltText -= 1
	}
	}
	if(type == "Children"){
		if(children.innerHTML <= 1 ){
			children.innerHTML = "Children"
		}else{
	
			children.innerHTML = childrenText -= 1
		}
	}
	if(type == "infants"){
		if(Infants.innerHTML <= 1 ){
			Infants.innerHTML = "infants"
		}else{
	
			Infants.innerHTML = InfantsText -= 1
		}
	}
}