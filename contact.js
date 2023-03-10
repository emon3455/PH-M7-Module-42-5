document.getElementById("send-name").addEventListener("click", ()=>{
    const value = document.getElementById("name-input").value;
    localStorage.setItem("name",value);
});

document.getElementById("delete-name").addEventListener("click" , ()=>{
    localStorage.removeItem("name");
});

document.getElementById("send-mail").addEventListener("click", ()=>{
    const value = document.getElementById("mail-input").value;
    localStorage.setItem("mail",value);
});

document.getElementById("delete-mail").addEventListener("click" , ()=>{
    localStorage.removeItem("mail");
});


document.getElementById("send-message").addEventListener("click", ()=>{
    const value = document.getElementById("message-input").value;
    localStorage.setItem("message",value);
});

document.getElementById("delete-message").addEventListener("click" , ()=>{
    localStorage.removeItem("message");
});





