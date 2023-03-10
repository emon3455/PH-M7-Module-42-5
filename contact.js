document.getElementById("send-name").addEventListener("click", ()=>{
    const value = document.getElementById("name-input").value;
    localStorage.setItem("name",value);
    document.getElementById("name-input").value="";
});

document.getElementById("delete-name").addEventListener("click" , ()=>{
    localStorage.removeItem("name");
});

document.getElementById("send-mail").addEventListener("click", ()=>{
    const value = document.getElementById("mail-input").value;
    localStorage.setItem("mail",value);
    document.getElementById("mail-input").value="";
});

document.getElementById("delete-mail").addEventListener("click" , ()=>{
    localStorage.removeItem("mail");
});


document.getElementById("send-message").addEventListener("click", ()=>{
    const value = document.getElementById("message-input").value;
    localStorage.setItem("message",value);
    document.getElementById("message-input").value="";
});

document.getElementById("delete-message").addEventListener("click" , ()=>{
    localStorage.removeItem("message");
});
// -------------nasic add and delete done------------

// function for clear all.
document.getElementById("reset").addEventListener("click" , ()=>{
    localStorage.clear();
    document.getElementById("name-input").value="";
    document.getElementById("mail-input").value="";
    document.getElementById("message-input").value="";
})

// function to set all:
document.getElementById("send-all").addEventListener("click", ()=>{

    let obj ={};
    const name = document.getElementById("name-input").value;
    const mail = document.getElementById("mail-input").value;
    const message = document.getElementById("message-input").value;

    obj.name=name;
    obj.mail=mail;
    obj.message=message;

    const stringOBJ = JSON.stringify(obj);

    localStorage.setItem("user",stringOBJ);


})





