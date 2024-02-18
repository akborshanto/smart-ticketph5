///1............not Compolete Banner-button

/* function-select-ticket============================*/

let addSelect=document.getElementsByClassName('add-select')
/* count-plus-minus */
let countPlus=0;
let countMinus=40;

for (let addSelects of addSelect ){ 
    
/* listener */
addSelects.addEventListener('click',function(){
    /* select-bg */
    const addColor=addSelects.classList.add("bg-green-500")

/* count-minus and plus */

if( countMinus > 0){
    countMinus -= 1;
    const countMinusDisplay=document.getElementById('seat-count-minus').innerText=countMinus;
}
countPlus += 1;
const countPlusDisplay=document.getElementById('seat-plus-count').innerText=countPlus;
// }if (countPlus < 40){
  //  countPlus += 1;
    //const countPlusDisplay=document.getElementById('seat-plus-count').innerText=countPlus;
// }







   


  








 
})


}






