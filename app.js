/* ----------------------------------------
                --------------------------------------------
                                   -----------------------------------------
                                   *****************************************
                                                                                                 **********
                                   ********* BY JEEWANTHA UPUL *************              ***************************
                                                                                                 **********
                                   *****************************************
                                   -----------------------------------------
                ----------------------------------------------
    ---------------------------------------
*/

var finalScore,currentPlayer,currentScore,gamePlaying;

initializing();

 //-------------------------------------------------------- DICE BUTTON ------------------------------------

document.querySelector('.btn-roll').addEventListener('click', function () {
    if(gamePlaying){
        var dice = Math.floor(Math.random() * 6 + 1);
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';
    
        if( dice != 1){
            currentScore+=dice;
            document.querySelector('#current-' + currentPlayer).textContent = currentScore;
        }
        else{
            currentScore = 0;
            document.querySelector('#current-' + currentPlayer).textContent = currentScore;
    
            nextPlayer();
        }
    }

});

//-------------------------------------------------------- HOLD BUTTON -------------------------------------

document.querySelector('.btn-hold').addEventListener('click' , function(){
         
    if(gamePlaying){
        finalScore[currentPlayer]+=currentScore;

        document.querySelector('#score-' + currentPlayer).textContent = finalScore[currentPlayer];

        if( finalScore[currentPlayer] >= 100){
            document.querySelector('#name-' + currentPlayer).textContent = 'WINNER !';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + currentPlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + currentPlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
        else{
            nextPlayer();
        } 
    }

    });
 
 // ------------------------------ FOR RETURNING TO NEXT PLAYER  ---------------------------//

function nextPlayer(){
    currentScore = 0;
    currentPlayer === 1 ? currentPlayer = 0 : currentPlayer = 1;

    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

// ------------------------------- NEW START BUTTON -------------------------------------------

document.querySelector('.btn-new').addEventListener('click' , initializing);

//--------------------------------------------- INITIALIZING GAME ---------------------------------

function initializing(){
    finalScore = [0,0];
    currentPlayer = 0;
    currentScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

                                         //-------- ALL MADE TO ZERO ------- 

document.querySelector('#score-0').textContent = '0';
document.querySelector('#score-1').textContent = '0';
document.querySelector('#current-0').textContent = '0';
document.querySelector('#current-1').textContent = '0';

document.querySelector('#name-0' ).textContent = 'PLAYER 1';
document.querySelector('#name-1' ).textContent = 'PLAYER 2';

                         // removing the active theme
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
                        
document.querySelector('.player-0-panel').classList.add('active');
}
 