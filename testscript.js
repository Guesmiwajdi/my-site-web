
var btnplus = document.getElementsByClassName('btn-plus');


for (let i=0;i<btnplus.length;i++){
    btnplus[i].addEventListener('click',function(){
        btnplus[i].nextElementSibling.innerText ++;
        totalPrice();
    });
}


let btnmoins = document.getElementsByClassName('btn-moins');



for (let minus of btnmoins){
    minus.addEventListener('click',function(){
        minus.previousElementSibling.innerText --;
        totalPrice()

    })
}
let likebtn = document.getElementsByClassName('fas fa-heart');



for (let likes of likebtn){
    likes.addEventListener('click',function(){

        if ( likes.style.color ==="gray"){
            likes.style.color = "red"
          } else {
            likes.style.color ="gray"
          }
          totalPrice();

    })
}

let btnremove = document.getElementsByClassName('fa-solid fa-trash');
 
for (remov of btnremove ){
    remov.addEventListener('click',function(){
        remov.parentElement.remove()
        totalPrice();

    })
}

    //remove of btnremove ){
     // remove.addEventListener('click',function(){
        //  remove.parentElement.remove();
        function totalPrice(){
            let quantity=document.getElementsByClassName('quantity');
        console.log(quantity);
            let prix=document.getElementsByClassName('prix');
            console.log(prix);
            let sum = 0;
            for(let i=0; i<prix.length; i++){
                sum+=prix[i].innerText * quantity[i].innerText ;
                document.getElementById("totalPrix").innerText=sum;
            }
        }
  
 
 
