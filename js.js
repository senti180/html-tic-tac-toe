let currentPlayer = 0;
let playedElements = [["", "", ""], ["", "", ""], ["", "", ""]];
let currentSymbol = "circle";

let played = 0;

let asd = {
    1: 0,
    2: 1,
    3: 2,
    4: 0,
    5: 1,
    6: 2,
    7: 0,
    8: 1,
    9: 2
}

let winner = "";

function play(el) {
    if (playedElements[Math.ceil(el.id / 3) - 1][asd[el.id]] !== "") return;
    if (!playedElements[Math.ceil(el.id / 3) - 1].includes(el.id)) {
        currentSymbol = currentPlayer == 0 ? "circle" : "cross";
        document.getElementById("player").innerText = currentPlayer == 0 ? "Cross" : "Circle";
        currentPlayer = !currentPlayer;
        handleMove(el);
    }
    played++;
    if (played >= 9 && !checkWin()) handleTie();
}

function handleMove(el) {
    playedElements[Math.ceil(el.id / 3) - 1][asd[el.id]] = currentSymbol;
    el.src = `${currentSymbol}.svg`;
    console.log(playedElements);
    if (checkWin()) handleWin();
}

function checkWin() {
    let win = false;
    for (let i = 0; i < 3; i++) {
        if (playedElements[i][0] == playedElements[i][1] && playedElements[i][1] == playedElements[i][2] && playedElements[i][0] != "") {
            winner = playedElements[i][0] == "circle" ? "Circle" : "Cross";
            win = true;
        }
        if (playedElements[0][i] == playedElements[1][i] && playedElements[1][i] == playedElements[2][i] && playedElements[0][i] != "") {
            winner = playedElements[0][i] == "circle" ? "Circle" : "Cross";
            win = true;
        }
    }
    if (playedElements[0][0] == playedElements[1][1] && playedElements[1][1] == playedElements[2][2] && playedElements[0][0] != "") {
        winner = playedElements[0][0] == "circle" ? "Circle" : "Cross";
        win = true;
    }
    if (playedElements[0][2] == playedElements[1][1] && playedElements[1][1] == playedElements[2][0] && playedElements[0][2] != "") {
        winner = playedElements[0][2] == "circle" ? "Circle" : "Cross";
        win = true;
    }
    return win;
}


function handleWin() {
    setTimeout(() => {
        alert(`${winner} wins!`);
        clearValues();
    }, 400);
}

function clearValues() {
    currentPlayer = 0;
    playedElements = [["", "", ""], ["", "", ""], ["", "", ""]];
    currentSymbol = "circle";

    played = 0;

    asd = {
        1: 0,
        2: 1,
        3: 2,
        4: 0,
        5: 1,
        6: 2,
        7: 0,
        8: 1,
        9: 2
    }

    for (let i = 1; i < 10; i++) {
        document.getElementById(`${i}`).src = "empty.svg";
    }

    document.getElementById("player").innerText = currentPlayer == 0 ? "Circle" : "Cross";
}

function handleTie() {
    setTimeout(() => {
        alert(`Tie!`);
        clearValues();
    }, 400);
}