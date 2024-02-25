let userScore = 0;
let compScore = 0;
// choice vanni class select garya
const choices = document.querySelectorAll(".choice");
// msg  vanni id select garya 
const msg = document.querySelector("#msg");
// userscore ra compscore select garya  thiea score dhekhauna ko lagi
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
 /*  choice div was  selected   using for each loop where each and every element in an array is  
//  selected  by calling a function on it, which takes the event object as argument. then new play game function is created 
 and  called the  play game function  ani tya tyo userchoice  play game vanni function ma pass garya */


// aaba  computer choice ko palo
const gencompchoice = () => {
     // yo step ma chai tyo 3 ota options lai arrray ma store garya 
    const options =[ "rock", "paper","scissor"];
   // ani tespaxi math.random use garea random number select gara ra options ko random number lai return garya 
     const randidx = Math.floor(Math.random () * 3);
     return  options [randidx];

};
const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin) {
        // yesma chai userscore lai increment garya ani mathi usercore id select garya thieo ni ho tesma gayera print garya 
        userScore++
        userscorepara.innerText = userScore
        console.log("you win ");
        msg.innerText =` you win  ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "red";

      
    }else {
        compScore++
        compscorepara.innerText = compScore
  
        msg.innerText =`you  lost ${compchoice} beats  ${userchoice}`;
        msg.style.backgroundColor = "green";

    }

};
// draw conditon ko lagi yeuta draw  vanni function call garya ani chaini kura  lekha 
const draw = () => {
    console.log("draw");
    // msg vaneko typ paragraph ko id ho ani  innertext vaneko tes para vitra  ko text change garni vaneko ho
    msg.innerText = "It's a draw!";
    msg.style.backgroundColor = "#edaf05";
  
};

// play game function
const playgame = (userchoice) => {
    console.log("user choice is ", userchoice);
    // computer choice
    const compchoice = gencompchoice();
    console.log("comp choice: ", compchoice);

   
    let userwin;

// terenary operator use garya
    if (userchoice === compchoice) {
        // mathi ko draw fuction theo ni ho teii function lai call garya simple 
        draw();
    } else {
        userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? true : false;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

// choice class select garya ani getattribute by id garya tes paxi playgame function lai call garera userchoice pass garya
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");

        playgame(userchoice);
    });
});
