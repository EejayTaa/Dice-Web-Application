
var images = ["images/dice1.png", "images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];





var randomNum1 = Math.ceil(Math.random() * images.length - 1);
var randomNum2 = Math.ceil(Math.random() * images.length - 1); 
main(randomNum1, randomNum2);




function main(r1, r2){
    let counter = 0;

    document.getElementById('player1Btn').addEventListener('click', function(){
        var img1 = document.getElementsByClassName('img1')[0];
        img1.setAttribute('src', images[r1]);
        document.getElementById('player1Btn').disabled = true;
        counter++;
    });
    
    document.getElementById('player2Btn').addEventListener('click', function(){
        var img2 = document.getElementsByClassName('img2')[0];
        img2.setAttribute('src', images[r2]);
        document.getElementById('player2Btn').disabled = true;
        counter++;
        if(counter == 2){
            winner(r1,r2);
        }
        
    });
}

function winner(r1,r2){
    var pointsP1 = 0;
    var pointsP2 = 0;
    if(r1 > r2){
        document.querySelector('h1').innerText = "Player 1 Wins!";
        document.getElementById('scorep1').innerText = ++pointsP1;
    }else if(r2 > r1){
        document.querySelector('h1').innerText = "Player 2 Wins!";
        document.getElementById('scorep2').innerText = ++pointsP2;
    }
    else{
        document.querySelector('h1').innerText = "Draw!";
    }        
}

