

alert("Welcome to my page")
// use an object to store details
const userValues = {
    "ramadanel" : {
        firstName: "Ramadan",
        city: "Lagos",
        email: "ramadan@gmail.com",
        password: "Ramad193",
        accountCreated: true,
        
    },
    "khayranel" : {
        firstName: "Khayr",
        city: "Abuja",
        email: "khayr@gmail.com",
        password: "khyar457",
        accountCreated: true,
        
    },
    "nishabel" : {
        firstName: "Nisha",
        city: "Port-Harcourt",
        email: "nisha@gmail.com",
        password: "Ramadfy193",
        accountCreated: true
    },
}
// validateUsername[username]
function UserDetails(){
    let username = prompt("Enter your userName")
    while (validateUsername(username) == false){
        username = prompt("Username not valid! Username must be less than ten(10)")
    }
    if (username == null){
        return
    }

    // Validate password

    let password = prompt ("Enter your password")
    while (validatePassword(password) == false){
        password = prompt("Invalid! Password must be greater than 6")
    }
    if (password == null){
        return
    }
    let confirmPassword  = prompt("confirm password")
    while (confirmPassword !== password){
        confirmPassword = prompt("Kindly confirm your password again")
    }
    if (confirmPassword == null){
        return
    }

    let user = userValues[username]
    if (user == undefined){
        alert("user not found! Kindly try with a valid username")
        return
    }
    
    // display user details
    alert(`
    Details you created an account with:
    first Name: ${user.firstName},
    City: ${user.city},
    Email: ${user.email},
    Account Created: ${user.accountCreated},
        
    `)
    
}
UserDetails()
// end of program

alert("Thanks for your time")

function validateUsername(username) { 
    if (username == null){
        return true
    }
    else if (username.length < 10) {
        return true
    }
    else {
        return false
    }
   
}
function validatePassword(password) {
    if (password == null){
        return true
    }
    else if (password.length < 6) {
        return false

    }
    else{
        return true
    }
}
