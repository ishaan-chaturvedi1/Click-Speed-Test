
let Clicker = document.querySelector(".container");

let clicked = 0;

Clicker.addEventListener("click", ()=> {
    {clicked = clicked + 1}
    if (clicked == 1){
        document.querySelector("h3").innerHTML =  0
        var maininterval = setInterval(() => {
            document.querySelector("h3").innerHTML =  i + 1
            i++
        }, 1000);
    }
    document.addEventListener("keydown", (e)=> {
        if (e.key == "d"){
            console.log(e)
            clearInterval(maininterval)
            document.querySelector("h2").innerHTML = `Your click speed is ${Math.ceil(clicked/i)}`
            document.querySelector(".container").style.display = "none";
        }
    })
    document.querySelector("h1").innerHTML = `You clicked ${clicked} times`
})

let i = 0;

let restart = document.body.querySelector("#restartbutton");

restart.addEventListener("click", ()=> {
    document.body.querySelector("h1").innerHTML = "Start the Test By clicking on the gray box."
    document.querySelector("h2").innerHTML = "Your click speed."
    document.querySelector("h3").innerHTML = "Time left."
    document.querySelector(".container").style.display = "block"
    i = 0;
    {clicked = 0;}
})


