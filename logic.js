
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3")
    ;
let gameOver = new Audio("gameover.mp3")

let turn = "X";
let isgameOver = false;
// function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// function to check for a win 
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxText')
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 25, 90],
        [2, 4, 6, 5, 15, 135],
        [0, 4, 8, 5, 15, 45],

    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " won";
            isgameOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "196px";
            music.play();
            document.querySelector(".line").style.width="20vw"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

// game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxText');

    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if (!isgameOver)
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

        }
    })
})

reset.addEventListener('click', (e) => {
    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isgameOver = false;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0";
    music.pause();
    document.querySelector(".line").style.width="0vw"
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

})
