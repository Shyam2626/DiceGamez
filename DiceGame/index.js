document.getElementById("btn").addEventListener("click", () => {

    console.log("hii brhh");

    let ply1Score = Math.floor(Math.random() * 6) + 1;
    let ply2Score = Math.floor(Math.random() * 6) + 1;

    document.querySelector("#img1").setAttribute("src", `images/dice${ply1Score}.png`);
    document.querySelector("#img2").setAttribute("src", `images/dice${ply2Score}.png`);

    if (ply1Score > ply2Score) {
        document.getElementById("result").innerHTML = "AWW! Player1 Won 🎲"
    }

    else if (ply1Score < ply2Score) {
        document.getElementById("result").innerHTML = "AWW! Player2 Won 🎲"
    }

    else {
        document.getElementById("result").innerHTML = "Well It's a Tie ❗❗❗"
    }

});