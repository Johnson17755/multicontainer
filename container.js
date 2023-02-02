   let count = 0;
   let increment = 0;
   let margin = 0;
   let slider = document.getElementsByClassName("slider-width")[0];
   let itemDisplay = 0;
   if(screen.width > 990){
    itemDisplay =document.getElementsByClassName("slider-container")[0].getAttribute("item-display-d");
    margin = itemDisplay * 5;
   }
   if(screen.width > 700 && screen.width < 990){
    itemDisplay =document.getElementsByClassName("slider-container")[0].getAttribute("item-display-t");
    margin = itemDisplay * 6.8;
   }
   if(screen.width > 280 && screen.width < 700){
    itemDisplay =document.getElementsByClassName("slider-container")[0].getAttribute("item-display-m");
    margin = itemDisplay * 20;
   }
   
   let item = document.getElementsByClassName("item");
   let itemleft = item.length % itemDisplay;   // item.length will go through the 15 div.. what this does it will display 4 item in all devices
   let itemSlide = Math.floor(item.length / itemDisplay) - 1; //which means 15 div, divided by 4. math.floor remove the decimal
   for(let i = 0; i < item.length; i++){
       item[i].style.width = (screen.width / itemDisplay) - margin + "px" ;
   }

   let next = () => {
    if(increment !== itemSlide + itemleft){
        if(increment === itemSlide){
            increment = increment + itemleft;
            count = count - (screen.width / itemDisplay) * itemleft;
        }
        else{
            increment ++;
            count = count - screen.width;
        }
    }
       slider.style.left = count + "px";
   }

   const prev = () => {
    if(increment !== 0){
        if(increment === itemleft){
            increment = increment - itemleft;
            count = count + (screen.width / itemDisplay) * itemleft;
        }
        else{
            increment --;
            count = count + screen.width;
        }
    }
       slider.style.left = count + "px";
   }