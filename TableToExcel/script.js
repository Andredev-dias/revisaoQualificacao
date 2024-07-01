function adicionarItem(){
    // Obter os valores dos campos de entrada pegando pelo id do input
    var nome = document.getElementById("nome").value 
    var valor = document.getElementById("valor").value 
    var quantidade = document.getElementById("quantidade").value 
    // Debugar e ou conferir se os valores estão vindo realmente
    console.log(nome, valor, quantidade)

    // Validar se os campos estão preenchidos
    if(!nome || !valor || !quantidade){
            alert("Preencha todos os campos")
            return;
    }

    // Criar uma linha na tabela
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0]
    var novaLinha = tabela.insertRow(tabela.rows.length);
    var celulaNome = novaLinha.insertCell(0)
    var celulaValor = novaLinha.insertCell(1)
    var celulaQuantidade = novaLinha.insertCell(2)
    var celulaTotal = novaLinha.insertCell(3)

    // inserir valores dentro das celulas criadas acima
    celulaNome.innerHTML = nome
    // celulaValor.innerHTML = `$${valor}`
    celulaValor.innerHTML = "$" + valor
    celulaQuantidade.innerHTML = quantidade
    celulaTotal.innerHTML = valor * quantidade

    // Limpar os campos de entrada
    document.getElementById("nome").value = ""
    document.getElementById("valor").value = ""
    document.getElementById("quantidade").value = ""
}

function exportarParaExcel(){
    var tabela = document.getElementById("tabela")
    var nomeArquivo = "tabela_produtos.xlsx"
    var wb = XLSX.utils.table_to_book(tabela, {sheet: "Tabela de Produtos"})
    XLSX.writeFile(wb, nomeArquivo)

}