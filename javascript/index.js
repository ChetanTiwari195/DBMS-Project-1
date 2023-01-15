let passengers = document.querySelector("#Passengers");
let btn = document.querySelector("#subbtn");
let depart = document.querySelector("#Depart");
let returnDate = document.querySelector("#Return");
let selecDate = [depart, returnDate];
let oneway = document.querySelector("#oneway");
let returnRadio = document.querySelector("#return");
let toggle = [oneway, returnRadio];

// adds date placeholder for date inputs
selecDate.forEach((selec) => {
  selec.addEventListener("focus", function () {
    if(this.type == "date"){
      this.type="text"
    }
    else{
      this.type="date"
    }
    
  })
})

// adds date placeholder for date inputs
selecDate.forEach((selec) => {
  selec.addEventListener("blur", function () {
    if(this.type == "date"){
      this.type="text"
    }
    else{
      this.type="date"
    }
    
  })
})

// to toggle return field on and off
toggle.forEach((item) => {
  item.addEventListener("click", () => {
    if (oneway.checked == true) {
      returnDate.style.display = "none";
      return;
    }

    if (oneway.checked == false) {
      returnDate.style.display = "block";
      return;
    }
  });
});

//for invalid inputs like departure date less than current date, return date less than departure date and number of passangers should not be less tha 0
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
