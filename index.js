
function random1(){
    var rando1 = Math.floor(Math.random()*6+1)
    return rando1;

}
function random2(){
 
    var rando2 = Math.floor(Math.random()*6+1)
    return rando2;
}


function winner(rando1,rando2){
    
    var winner_class=document.getElementsByClassName('winner');
    if(rando1===rando2){
        winner_class[0].classList.add("decide-winner")
        
    }else if(rando1>rando2){
        winner_class[1].classList.add("decide-winner")
        
    }else{
        winner_class[2].classList.add("decide-winner")

    }
}
function logic(){
    
    rando1=random1();
    rando2=random2();
    
    var p = document.querySelectorAll('.dice');
    p[0].classList.remove("hide")
    p[1].classList.remove("hide")
    
    var d = document.getElementsByClassName('dice');

    var img1 = new Image();
    img1.src=`images/dice${rando1}.png`
    d[0].appendChild(img1)

    var img2 = new Image();
    img2.src=`images/dice${rando2}.png`
    d[1].appendChild(img2)
    winner(rando1,rando2)

}

function poper(){
    var winner_class=document.getElementsByClassName('winner');
    if(rando1===rando2){
        winner_class[0].classList.remove("decide-winner")
    }else if(rando1>rando2){
        winner_class[1].classList.remove("decide-winner")
        
    }else{
        winner_class[2].classList.remove("decide-winner")
    }

    var c = document.querySelectorAll('.dice img');
    c[0].remove();
    c[1].remove();

    var d = document.querySelectorAll('.dice');
    d[0].classList.add("hide")
    d[1].classList.add("hide")
    
    logic();
}

logic();

