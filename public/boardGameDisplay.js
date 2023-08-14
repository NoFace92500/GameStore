//get the ul element
const ul = document.querySelector('ul');

//GET array of board games from localhost:8080/api/v1/boardGames
fetch('http://localhost:8080/api/v1/boardGames')
    .then(response => response.json())
    .then(boardGames => {
        //loop through the array of board games
        boardGames.forEach(boardGame => {
            //create a new li element
            const li = document.createElement('li');
            //set the text of the li element to the board game name
            li.textContent = boardGame.name;
            //append the li element to the ul element
            ul.appendChild(li);
        });
    });