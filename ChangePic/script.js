function changeImage(){
    const html = document.documentElement
    html.classList.toggle("light")

    var imagem = document.querySelector("#profile")
    var btn = document.getElementById("btnStyle")
    var dt = document.getElementById("data")
    var paragraph = document.getElementById("p")
    var gender = document.getElementById("gender")

    var registro = new Date()
    dt = registro

    if(html.classList.contains("light")){
        imagem.setAttribute("src", "../Imagens/img1.png")
        btn.style.color = "lightgreen"
        btn.style.borderColor = "lightgreen"
        paragraph.style.color = "lightgreen"
        document.getElementById("data").textContent = formatarData(dt)
        gender.textContent = "Homem" 
    }else{
        imagem.setAttribute("src", "../Imagens/img2.png")
        btn.style.color = "lightpink"
        btn.style.borderColor = "lightpink"
        paragraph.style.color = "lightpink"
        document.getElementById("data").textContent = formatarData(dt)
        gender.textContent = "Mulher" 
    }
}

function formatarData(item){
    var options = {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    };
    return item.toLocaleString("pt-BR", options)
}