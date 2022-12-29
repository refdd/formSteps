// variables
const exactDate = document.querySelector(".ExactDate");
const Approximate = document.querySelector(".Approximate");
const containnerDate = document.querySelector(".containnerDate");
const approximteSection = document.querySelector(".approximteCantainer");
const mouth = document.querySelectorAll(".singilMonth")
const approximte = document.querySelectorAll(".singleApprox")
const selectType = document.querySelector(".selectType")

// calendar data

document.addEventListener("DOMContentLoaded", () => {
  const calendar = new VanillaCalendar("#return", {
    actions: {
      clickDay(event, dates) {
        console.log( " start date  " +  dates);
      },
    },
  });
  calendar.init();
});
document.addEventListener("DOMContentLoaded", () => {
  const calendar = new VanillaCalendar("#departure", {
    actions: {
      clickDay(event, dates) {
        console.log( " end  date  " +  dates);
      },
    },
  });
  calendar.init();
});
//   open and close the calendar taps
exactDate &&
  exactDate.addEventListener("click", () => {
    exactDate.classList.add("active");
    Approximate.classList.remove("active");
    containnerDate.classList.add("open")
    approximteSection.classList.remove("open")
    selectType.innerHTML="I know the exact dates of my trip"
  });
Approximate &&
  Approximate.addEventListener("click", () => {
    Approximate.classList.add("active");
    exactDate.classList.remove("active");
    approximteSection.classList.add("open")
    containnerDate.classList.remove("open")
    selectType.innerHTML=" I have approximate dates"

  });


//   event slected  month

mouth && mouth.forEach((item ) =>{
    item.addEventListener("click", () =>{
        mouth.forEach((e)=> {e.classList.remove('avtive')})
        item.classList.add("avtive")
    })
})
//   event slected approximte

approximte && approximte.forEach((item ) =>{
    item.addEventListener("click", () =>{
        approximte.forEach((e)=> {e.classList.remove('active')})
        item.classList.add("active")
    })
})