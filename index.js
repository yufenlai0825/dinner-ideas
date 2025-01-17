var randomNumber1 = Math.floor (Math.random () * 6) + 1 ;  
var imgdice1 = "./images/dinner" + randomNumber1 + ".jpg" ; 


document.querySelector(".img1").setAttribute("src", imgdice1); 

if (randomNumber1 === 1) {
    document.querySelector ("h2").textContent = "Go Italian! 🍝 " ;
} else if (randomNumber1 === 2) {
    document.querySelector ("h2").textContent = "Taco Night! 🌮 " ;
} else if (randomNumber1 === 3) {
    document.querySelector ("h2").textContent = "Soup Season! 🍲 " ;
} else if (randomNumber1 === 4) {
    document.querySelector ("h2").textContent = "Steak! 🥩 " ;
} else if (randomNumber1 === 5) {
    document.querySelector ("h2").textContent = "Sushi Time! 🍣 " ; 
} else if (randomNumber1 === 6) {
    document.querySelector ("h2").textContent = "Thai Food! 🥘 " ; 
}
