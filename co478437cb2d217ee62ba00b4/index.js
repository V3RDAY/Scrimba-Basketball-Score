let home = document.getElementById("home")
let guest = document.getElementById("guest")
let count1 = 0
let count2 = 0


function incrementHomeScore(amount){
    count1 += amount 
    home.innerText = count1
}

function  incrementGuestScore(amount){
    count2 += amount
    guest.innerText = count2
}


