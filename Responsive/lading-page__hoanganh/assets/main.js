var next = document.querySelectorAll(".room__slider-icon");
var item = document.querySelectorAll(".room__slider-item");
console.log(next);
console.log(item);
var l = 0 ;
next[1].onclick = () => {
    l++ ;
    for(var i of item)
    {
        if(l==0){ i.style.left = "0px";}
        if(l==1){ i.style.left = "-328px";}
        if(l==2){ i.style.left = "-660px";}
        if(l==3){ i.style.left = "-990px";}
        if(l==4){ i.style.left = "-1325px";}
        // if(l==4){ i.style.left = "-1325px";}
        if(l>4){ l = 4}
    }
}
next[0].onclick = () => {
    l-- ;
    for(var i of item)
    {
        if(l==0){ i.style.left = "0px";}
        if(l==1){ i.style.left = "-328px";}
        if(l==2){ i.style.left = "-660px";}
        if(l==3){ i.style.left = "-990px";}
        if(l==4){ i.style.left = "-1325px";}
        if(l<0){ l = 0}
        }
}