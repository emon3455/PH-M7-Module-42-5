let count=0;

const increseCount=()=>{
    count++;
    localStorage.setItem("count",count);
    document.getElementById("count").innerText=count;
}

const clearCount=()=>{
    localStorage.clear();
    count=0;
    displayCount();
}

const displayCount=()=>{

    if(localStorage.getItem("count")){
        const value = localStorage.getItem("count");
        count = value;
        document.getElementById("count").innerText= value;
    }
    else{
        document.getElementById("count").innerText=0;
        count=0;
    }
    
}
displayCount();