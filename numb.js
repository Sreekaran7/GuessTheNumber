var msg1 = document.getElementById( "message1" )
var answer = Math.floor( Math.random() * 100 ) + 1;
var guesses_num = [];
console.log( answer )
function play ()
{
  var user_guess = document.getElementById( "guess" ).value;
  console.log( user_guess )
  if ( user_guess < 1 || user_guess > 100 )
  {
    alert( "Please Enter a number Between 1 to 100" );
  }
  else
  {
    guesses_num.push( user_guess );
    node = null;

    for ( let i = 0; i < guesses_num.length; i++ )
    {
      node = document.getElementById( "message3" ).innerHTML + ( "<div class='guess-message'> You guessed " + guesses_num[ i ] + "<div>" );
    }
    document.getElementById( "message3" ).innerHTML = node

    if ( user_guess < answer )
    {

      msg1.textContent = "Your Guess is Too low!"
      msg1.classList.remove( "success" )

    }

    else if ( user_guess > answer )
    {
      msg1.textContent = "Your Guess is Too High!"
      msg1.classList.remove( "success" )

    }
    else if ( user_guess == answer )
    {
      msg1.textContent = "Awesome job, You got it!"
      msg1.classList.add( "success" )

    }
  }
}

function reset ()
{
  guesses_num = [];
  document.getElementById( "message3" ).innerHTML = null;
  msg1.innerHTML = null;
  document.getElementById( "guess" ).value = null;
}

