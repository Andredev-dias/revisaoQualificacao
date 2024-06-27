function checkMajority(){
    document.getElementById("clientAge").textContent = " ";
    var wasBorn = document.getElementById("clientBirth").valueAsNumber;
    var res = document.getElementById("result");

    if(isNaN(wasBorn)){
        res.textContent = "Type only numbers";
        res.style.color = "red";
        return;
    }

    const thisYear = new Date().getFullYear();
    const age = thisYear - wasBorn;
    
    if(age >= 18){
        res.textContent = "Over 18, ENTRY";
        res.style.color = "green";
        document.getElementById("clientAge").textContent = `${age} - years old`;
    }else{
        res.textContent = "Under 18, NOT ALLOWED";
        res.style.color = "orange";
        document.getElementById("clientAge").textContent = age + " - " + " years old";
    }
}







