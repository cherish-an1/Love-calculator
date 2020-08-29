// button listener
// var button = document.querySelector('button');

function checkLovePercent() {
    var yourName = document.getElementById('yourName').value;
    var crushName = document.getElementById('crushName').value;

    var loveScore = Math.random();
    loveScore = Math.floor(loveScore * 100) + 1;

    // A place for % result to be printed out 
    var resultNumber = document.querySelector("#resultNumber");
    // A place for the following explanation to be printed out 
    var explanation = document.querySelector("#explanation");
    // Hiding form for result 
    var hideForResult = document.querySelector('.hideForResult');
    // hide the textSection
    var textSection = document.querySelector("#textSection")
    // show the gifs
    var img = document.createElement('img');
    var src = document.getElementById("gifImages");
    // Showing Try Again button
    var tryAgain = document.querySelector('#tryAgain');
    // Shortcut for result
    var yourResultIs = yourName + " & " + crushName ;

    if (loveScore >= 95) {
        textSection.style.display = "none";
        explanation.style.visibility = "visible";
        resultNumber.style.visibility = "visible";
        resultNumber.innerHTML = loveScore + "%";
        img.src = "asset/giphy1.gif";
        src.appendChild(img);
        explanation.innerHTML = "Perfect!!!... Love dokita is pleased to announce to you that this ship has sailed." + yourName + "" + crushName + "" + ", best love story in history. ";
        hideForResult.style.display = "none";
        tryAgain.style.visibility = "visible";
    }
    else if (loveScore >= 75 && loveScore < 95) {
        textSection.style.display = "none";
        explanation.style.visibility = "visible";
        resultNumber.style.visibility = "visible";
        resultNumber.innerHTML = loveScore + "%";
        img.src = "asset/giphy2.gif";
        src.appendChild(img);
        explanation.innerHTML = "Awwww.... Love dokita is happy to tell you that you've found that special one. Now is the time to make memories and enjoy every moment. ";
        hideForResult.style.display = "none";
        tryAgain.style.visibility = "visible";
    }
    else if (loveScore >= 55 && loveScore < 74){
        textSection.style.display = "none";
        explanation.style.visibility = "visible";
        resultNumber.style.visibility = "visible";
        resultNumber.innerHTML = loveScore + "%";
        img.src = "asset/giphy3.gif";
        src.appendChild(img);
        explanation.innerHTML = "Hmmmm.... Love dokita isnt quite sure about this ship, but there is a very high chance of it sailing or maybe not. Anyway, still give it your best shot!!!. Follow your heart, go after what you want.";
        hideForResult.style.display = "none";
        tryAgain.style.visibility = "visible";
    }
    else if (loveScore >= 25 && loveScore < 55){
        textSection.style.display = "none";
        explanation.style.visibility = "visible";
        resultNumber.style.visibility = "visible";
        resultNumber.innerHTML = loveScore + "%";
        img.src = "asset/giphy4.gif";
        src.appendChild(img);
        explanation.innerHTML = "Oopss... Someone is ganna get their heart broken again. Love dokita thinks that the chances of a relationship working out is very low. I'll advice you move on, save yourself further heart damage. ";
        hideForResult.style.display = "none";
        tryAgain.style.visibility = "visible";
    }
    else {
        textSection.style.display = "none";
        explanation.style.visibility = "visible";
        resultNumber.style.visibility = "visible";
        resultNumber.innerHTML = loveScore + "%";
        img.src = "asset/giphy5.gif";
        src.appendChild(img);
        explanation.innerHTML = "Lol... This ship is unsailable, Love dokita insists that you give up on love. I'll advice you focus on yourself. Get a hobby!!!. " ;
        hideForResult.style.display = "none";
        tryAgain.style.visibility = "visible";
    }
}