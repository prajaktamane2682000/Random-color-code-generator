//To get the hex code color

const getColor = ()=>{
    //Hex code
    const randomNumber= Math.floor(Math.random()* 16777215);
   // console.log(randomNumber);
    const randomCode= "#" + (randomNumber).toString(16);
   // console.log(randomCode);
    document.body.style.backgroundColor=randomCode;
    document.getElementById("code").innerText= randomCode;

   
}


document.getElementById("btn1").addEventListener(
    "click",
    getColor
)

getColor()

