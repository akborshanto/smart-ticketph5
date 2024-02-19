/* function-select-ticket============================*/

let addSelect = document.getElementsByClassName("add-select");
/* count-plus-minus */
let countPlus = 0;
let countMinus = 40;
/* dynamic-price */
let price = 0;
/* total-taka */
let perTicketTaka = 0;

/* POribohohon-MAINPART==================================== */
for (let addSelects of addSelect) {
  /* listener */
  addSelects.addEventListener("click", function (e) {
    /* select-bg */
    const addColor = addSelects.classList.add("bg-green-500");

    
    /* count-minus and plus */

    if (countMinus > 0) {
      countMinus -= 1;
      const countMinusDisplay = (document.getElementById(
        "seat-count-minus"
      ).innerText = countMinus);
    }
    countPlus += 1;
    const countPlusDisplay = (document.getElementById(
      "seat-plus-count"
    ).innerText = countPlus);
    /* opt */
    if (countPlus > 40 ) {
      countPlus += 1;
     // alert("TICKET FULL");
      const countPlusDisplay = (document.getElementById(
        "seat-plus-count"
      ).innerText = countPlus);
    }
/* bg-remove */
if( countPlus > 4  ){
   
    const addColor = addSelects.classList.remove("bg-green-500");
  //  const disabled=addSelects.classList.add('disabled')
  //  document.getElementById("addSelect").disabled = true;


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

    perTicketTaka += 550;




    /* total-taka DISPLAy */
    const totalTakaDisplay = (document.getElementById("total-taka").innerText =
      perTicketTaka);
    let grandTotalDisplay = (document.getElementById("grand-taka").innerText =
      perTicketTaka);

    /* grans-taka */


  

  });





}
/* =============================================================== */
/* next-button */



/* coupone-input */
const couponButton = document.getElementById("coupon-button");

couponButton.addEventListener("click", function () {
  let couponInput = document.getElementById("coupon-input").value.toUpperCase();

  if (couponInput === "NEW15" || couponInput === "COUPLE 20" ) {





    document.getElementById("coupon-input").classList.add("hidden");
    couponButton.classList.add("hidden");
  }else{

  
    alert("invalid coupon")
    document.getElementById("coupon-input").value = ""
  } 






});


   


