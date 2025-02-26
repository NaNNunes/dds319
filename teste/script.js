let users = ["user@gmail.com","user2@gmail.com"];
let usersPass = ["123", "321"];

let go = () => {
    let strEmail = document.querySelector('input#usrEmail');
    let userMail = strEmail.value;

    let strPswd = document.querySelector("input#pss");
    let pass = strPswd.value;

    let link = document.querySelector('a#loginBtn');
    

    if(userMail == ""){
        alert("Informe um email");
    }
    else{
        checkMail(userMail);
    }
}

let checkMail = (mail) =>{
    
    for (i = 0; i < users.length; i++){
        if(users[i] == mail){
            alert("1")
            return checkPass(pass);
        } 
    }
}
let checkPass = (pass) =>{
    alert("2");
    for(i = 0; i < usersPass; i++){
        if(usersPass[i] == pass){
            return link.href = "home.html";
        }
    }
}