
$( document ).ready(function() {


    // need to PUT THIS SOMEWHERE ELSE..?
    $("#hangman-board").hide();
    //Press any key to get started
    var btn_start = document.getElementById("button-start");
    var hangman_box = document.getElementById("hangman-box");

    reset_game();

    $(document).keypress( function(event){
        new_game();    
        console.log('Handler for .keypress function called. = ' + event.charCode);    
    } );

    // new game 
    function new_game(){
        console.log("new game");

        //start new hangman board for word
        hangman_board_init();
        //stop tracking keypress function
        $(document).keydown(function(){
            console.log("keypress function is stopped...");
            return false; 
        });
    }

    function reset_game(){
        $("#hangman-body").hide();
    }

    //show the hangman board, reset letters left
    function hangman_board_init(){
        var hangman_word = document.getElementById("hangman-board");
        var hangman_text = document.getElementById("get-started");
        var letters_left = document.getElementById("letters-left");

        $("#hangman-board").show();
        $(hangman_text).html("CURRENT WORD!");
        $(letters_left).html("0");
        $(hangman_word).html("IRON MAN")

        console.log("BOARD IS ACTIVE");
    }

    //wins var


    //display word as underscores (for each letter in word...)


    //number of guesses remaining


    //letters guessed

    //After the user wins/loses the game should automatically choose another word and make the user play it.

    //play song on win

    //play song on lose

    //organize into an object
});