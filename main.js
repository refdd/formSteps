// selector 
const card = document.querySelector(".card");
const inputChek = document.querySelector(".checkbox-animate label input");
const nextButton = document.querySelector(".next_button");

console.log(inputChek)


// evnts
card && card.addEventListener("click", ()=>{
    card.classList.toggle("active")
    if (card.classList.contains("active")  ){
        nextButton.classList.add("active");
        nextButton.classList.add("twark");
        nextButton.innerHTML="Next Step";
      } else {
        nextButton.classList.remove("active");
        nextButton.classList.remove("twark");
        nextButton.innerHTML="Select Your Destination";
      }
    if(inputChek.checked == false) {
       inputChek.checked = true; 
    }
    else {
        if(inputChek.checked == true) {
           inputChek.checked = false; 
         }   
    }
})
// evnts

inputChek.addEventListener('change', function() {
    if (this.checked) {
        card.classList.add("active");
        nextButton.classList.add("active");
        nextButton.classList.add("twark");
        nextButton.innerHTML="Next Step";
    } else {
        card.classList.remove("active")
        nextButton.classList.remove("active");
        nextButton.classList.remove("twark");
        nextButton.innerHTML="Select Your Destination";
    }
  });
//   if button active 
nextButton && nextButton.addEventListener('click', ()=>{
    if(nextButton.classList.contains("active")){
        window.open("./calendar/calendar.html");
        }else{
          alert("Please select")
        }
})
