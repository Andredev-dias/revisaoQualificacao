function login(){
    var nome = $("#nome").val()
    var senha = $("#senha").val()

    if(nome && senha && nome === "admin" && senha === "admin"){
        const user = {
            name: nome,
            dataEntrada: new Date(),
            id: Math.floor(Math.random() * 100)
        }
        localStorage.setItem("usuario", JSON.stringify(user))
        console.log("Entrou no sistema", user)
        window.location.href = "../Calculos/batata.html"
    }else{
        document.getElementById("error-modal").style.display = "flex"
        document.getElementById("nome").style.border = "2px solid lightpink"
        document.getElementById("senha").style.border = "2px solid lightpink"
        console.log("Preencha os campos")
    }
}


function fecharError(){
    document.getElementById("error-modal").style.display = "none"
    document.getElementById("nome").style.border = "2px solid #909090"
    document.getElementById("senha").style.border = "2px solid #909090"
}


function showPassword(){
    var inputSenha = document.querySelector('#senha')
    if(inputSenha.getAttribute("type") === "password"){
        inputSenha.setAttribute("type", "text")
    }else{
        inputSenha.setAttribute("type", "password")
    }
}

