let passengers = document.querySelector("#Passengers");
let btn = document.querySelector("#subbtn");
let depart = document.querySelector("#Depart");
let returnDate = document.querySelector("#Return");
let oneway = document.querySelector("#oneway")
let returnRadio = document.querySelector("#return")
let toggle = [oneway, returnRadio]

toggle.forEach(item => {
  item.addEventListener("click", () => {
    if (oneway.checked == true) {
      returnDate.style.display = "none"
      return
    }

    if (oneway.checked == false) {
      returnDate.style.display = "block"
      return
    }
  })
})


btn.addEventListener("click", (d1, d2) => {
  let date1 = new Date(depart.value);
  let date2 = new Date(returnDate.value);
  let d = new Date();

  if (date1 > date2) {
    depart.style.backgroundColor = "red";
    returnDate.style.backgroundColor = "red";
    alert("Please enter valid date");
  } else if (date1 < d.setDate(d.getDate() - 1)) {
    depart.style.backgroundColor = "red";
    alert("date");
  } else {
    if (parseInt(passengers.value) < 1) {
      passengers.style.backgroundColor = "red";
      alert("Passengers cannot be less than 1");
    } else {
      console.log("no problem");
    }
  }
});
