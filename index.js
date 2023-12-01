document.querySelector(".btn").addEventListener("click", ()=>{
    let diceOne = Math.floor(Math.random() * 6 + 1);
    let diceTwo = Math.floor(Math.random() * 6 + 1);

    document.querySelector(".img1").setAttribute("src","./images/dice" + diceOne + ".png");
    document.querySelector(".img2").setAttribute("src","./images/dice" + diceTwo + ".png");

    let winner = document.querySelector("h1")

    if (diceOne > diceTwo) {
        winner.innerHTML = "Player 1 Won!"
    }else if (diceOne < diceTwo ) {
        winner.innerHTML = "Player 2 Won!"
    }else { 
        winner.innerHTML = "It's a Draw!" 
    }
})