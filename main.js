
// selector 
const card = document.querySelectorAll(".card");
const inputChek = document.querySelectorAll(".checkbox-animate label input");
const nextButton = document.querySelector(".next_button");
const selectedText = document.querySelectorAll(".cardSlected");
const counntryText = document.querySelectorAll(".cardContent");
  
// function  add chack box 
const checkbox = (index)=>{
 if(inputChek[index].checked == false) {
  inputChek[index].checked = true; 
            }
            else {
                if(inputChek[index].checked == true) {
                  inputChek[index].checked = false; 
                 }   
            }
}
// ---------
card && card.forEach((item , index )=>{
  item.addEventListener("click", ()=>{
    item.classList.toggle("active")
    counntryText[index].classList.toggle("active")
    selectedText[index].classList.toggle("active")
      checkbox(index)
      refatbox(index) 
   
  })
})
// function select check box 
let arele = []
const refatbox = (index)=>{
// arele.push(index)
if(arele.includes(index)){
  const reomveall =  arele.filter(item => item !== index)
  arele = [...reomveall]
}else{
  arele.push(index)
}
if (arele.length !== 0  ){
        nextButton.classList.add("active");
        nextButton.classList.add("twark");
        nextButton.innerHTML="Next Step";
      } else {
        nextButton.classList.remove("active");
        nextButton.classList.remove("twark");
        nextButton.innerHTML="Select Your Destination";
      }
      //   if button active 
nextButton && nextButton.addEventListener('click', ()=>{
  if(arele.length !== 0 ){
      window.open("./calendar/calendar.html");
      }
})
 
}
// function chack box 
inputChek && inputChek.forEach((item , index )=>{
  item.addEventListener("change", (e)=>{
    if (e.target.checked) {
              card[index].classList.add("active");
          } else {
              card[index].classList.remove("active")
          }
  })
})
