$('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

var count = 0;

function myfun(){
    if(count<=150){
        document.getElementById("count1").innerHTML=count;
        count++;
        setTimeout(() => {
            myfun()
            
        }, 30);
    }
   
}
myfun()

var count1 = 0;

function myfun1(){
    if(count1<=4){
        document.getElementById("count2").innerHTML=count1;
        count1++;
        setTimeout(() => {
            myfun1()
            
        }, 30);
    }
   
}
myfun1()

var count2 = 0;

function myfun2(){
    if(count2<=20){
        document.getElementById("count3").innerHTML=count2;
        count2++;
        setTimeout(() => {
            myfun2()
            
        }, 30);
    }
   
}
myfun2()

var count3 = 0;

function myfun3(){
    if(count3<=500){
        document.getElementById("count4").innerHTML=count3;
        count3++;
        setTimeout(() => {
            myfun3()
            
        }, 30);
    }
   
}
myfun3()
