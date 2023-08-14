//get the ul element
const ul = document.querySelector('ul');

//GET array of students from localhost:8080/api/v1/videoGames
fetch('http://localhost:8080/api/v1/videoGames')
    .then(response => response.json())
    .then(videoGames => {
        //loop through the array of video games
        videoGames.forEach(videoGame => {
            //create a new li element
            const li = document.createElement('li');
            //set the text of the li element to the video game name
            li.textContent = videoGame.name;
            //append the li element to the ul element
            ul.appendChild(li);
        });
    });