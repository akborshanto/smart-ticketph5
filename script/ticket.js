/* function-select-ticket============================*/
let count = 0;
let addSelect = document.getElementsByClassName("add-select");

/* one-cliclk */

/* count-plus-minus */
let countPlus = 0;
let countMinus = 40;

/* total-taka */
let perTicketTaka = 0;
let totalPrice=0;
let ticket=550;
/* POribohohon-MAINPART==================================== */
for (let addSelects of addSelect) {
  
  /* listener */
  addSelects.addEventListener("click", function (e) {
    e.target.setAttribute("disabled", true);

    const addColor = addSelects.classList.add("bg-green-500");

    /* count-minus and plus */

    if (countMinus > 0 && countPlus < 4) {
      countMinus -= 1;
      const countMinusDisplay = (document.getElementById(
        "seat-count-minus"
      ).innerText = countMinus);
      //console.log(countMinusDisplay)
    }

    countPlus += 1;
    const countPlusDisplay = (document.getElementById(
      "seat-plus-count"
    ).innerText = countPlus);

    /* opt */
    if (countPlus > 40) {
      countPlus += 1;
//alert("TICKET FULL");

      const countPlusDisplay = (document.getElementById(
        "seat-plus-count"
      ).innerText = countPlus);

    }

    /* bg-remove */
    if (countPlus > 4) {
      const addColor = addSelects.classList.remove("bg-green-500");
      document.getElementById("addSelect").setAttribute("disabled", true);
    }

    /* dynamic-seat-count */
    const addSelectss = addSelects.innerText;

    /* ticket */
    const ticket = document.createElement("h3");
    ticket.innerHTML = addSelectss;
    document.getElementById("seat-dynamic-price").appendChild(ticket);
    /* economic */
    const economic = document.createElement("h3");
    economic.innerHTML = "Economic";
    document.getElementById("seat-dynamic-price").appendChild(economic);
    /* price 550 */
    const seatPrice = document.createElement("h3");
    seatPrice.innerHTML = 550;
    document.getElementById("seat-dynamic-price").appendChild(seatPrice);

    /* Price-calculate ===== somossa ============*/

if( countPlus > 0){


 const totalTaka = perTicketTaka += 550
console.log(totalTaka)
    /* total-taka DISPLAy */
    const totalTakaDisplay = (document.getElementById("total-taka").innerText =
     totalTaka);
   let grandTotalDisplay = (document.getElementById("grand-taka").innerText =
     totalTaka);

}


//console.log(parseFloat(totalTaka))



    /* total-taka DISPLAy */
    //const totalTakaDisplay = (document.getElementById("total-taka").innerText =
    //  totalTaka);
   // let grandTotalDisplay = (document.getElementById("grand-taka").innerText =
     // totalTaka);

    /* grans-taka */
  });
  
}
/* =============================================================== */
/* next-button */

/* coupone-input */
const couponButton = document.getElementById("coupon-button");

couponButton.addEventListener("click", function () {
//  let couponInput = document.getElementById("coupon-input").value.toUpperCase();
let couponInput = document.getElementById("coupon-input").value;
  if (couponInput === "NEW15" || couponInput === "Couple 20") {
    document.getElementById("coupon-input").classList.add("hidden");
    couponButton.classList.add("hidden");
  } else {
    alert("invalid coupon");
    document.getElementById("coupon-input").value = "";
  }
});


const dis=document.getElementById('dis').value;;
console.log(dis)