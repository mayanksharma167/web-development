console.log("Movie guess")

movie = "avatar"
guess = prompt("guess the movie or quit to exit: ")
while((guess != movie) && (guess != "quit" ))
{
    guess = prompt("wrong guess! guess again ")
}
if(guess == movie){
    console.log("you entered the correct movie")
}
else{
    console.log("you quit!")
}
