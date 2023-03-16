//countdown function
function countDown (num){
    let timer = setInterval(function() {
         num -= 1;
         console.log(num);
         if (num == 1){
             clearInterval(timer);
             console.log("DONE!");
         }
     }, 1000) 
 }

 //randomGame function
function randomGame(){
    let counter = 0;
    let timer = setInterval(function() {
        let randomNumber = Math.random();
        counter+= 1;
        if (randomNumber > 0.75){
            clearInterval(timer);
            console.log(counter, "attempt(s) to generate:", randomNumber);
        }
    }, 1000);
}