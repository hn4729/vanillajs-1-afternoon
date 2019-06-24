let board = [];

function play(clickedId) {
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);
    let win = 0;

    if (playerSpan.innerText === "X") {
        playerSpan.innerText = "O";
        clickedElement.innerText = "X";
        board[clickedId] = "X";
    } else {
        playerSpan.innerText = "X";
        clickedElement.innerText = "O"
        board[clickedId] = "O";
    }
    
    console.log(board);

    //Check Row
    if (board[0] === board[1] && board[1] === board[2] && (board[1] === "X" || board[1] === "Y")) {
        window.alert(`${board[0]} has won!`);
        win = 1;
    } else if (board[3] === board[4] && board[4] === board[5] && (board[4] === "X" || board[4] === "Y")) {
        window.alert(`${board[3]} has won!`);
        win = 1;
    } else if (board[6] === board[7] && board[7] === board[8] && (board[7] === "X" || board[7] === "Y")) {
        window.alert(`${board[6]} has won!`);
        win = 1;
    }

    //Check Column
    if (board[0] === board[3] && board[3] === board[6] && (board[3] === "X" || board[3] === "Y")) {
        window.alert(`${board[0]} has won!`);
        win = 1;
    } else if (board[1] === board[4] && board[4] === board[7] && (board[4] === "X" || board[4] === "Y")) {
        window.alert(`${board[3]} has won!`);
        win = 1;
    } else if (board[2] === board[5] && board[5] === board[8] && (board[5] === "X" || board[5] === "Y")) {
        window.alert(`${board[5]} has won!`);
        win = 1;
    }

    //Check Diagonal
    if (board[0] === board[4] && board[4] === board[8] && (board[4] === "X" || board[4] === "Y")) {
        window.alert(`${board[0]} has won!`);
        win = 1;
    } else if (board[2] === board[4] && board[4] === board[6] && (board[4] === "X" || board[4] === "Y")) {
        window.alert(`${board[2]} has won!`);
        win = 1;
    }

    //No Winner
    let fullBoard = board.filter(value => value === "X" || value === "O");

    if (fullBoard.length === 9 && win === 0) {
        window.alert("Cat's game, there is no winner");
    }
    
}