let valorFinanciado = document.getElementById('valor-financiado-input')
let qtdParcelas = document.getElementById('quantidade-parcelas-input')
let valorJuros = document.getElementById('valor-juros-input')





let descricaoParcela = document.querySelector('.valor-parcelas .descricao')
let conteudoParcela = document.querySelector('.valor-parcelas .conteudo')

let descricaoJuros = document.querySelector('.valor-juros .descricao')
let conteudoJuros = document.querySelector('.valor-juros .conteudo')


let descricaoTotal = document.querySelector('.valor-total .descricao')
let conteudoTotal = document.querySelector('.valor-total .conteudo')





let resultadoTotal = document.getElementById('valor-total')
let resultadoJuros = document.getElementById('valor-juros')


function calcularParcelas() {
    console.log(valorFinanciado.value, qtdParcelas.value, valorJuros.value)

    let juros_formatado = valorJuros.value/100


    let parte1 = valorFinanciado.value * juros_formatado
    let parte2 = (1 + juros_formatado) ** qtdParcelas.value
    let parte3 = parte1 * parte2

    let parte4 = (1 + juros_formatado) ** qtdParcelas.value
    let parte5 = parte4 - 1



    let parcelas = parte3 / parte5
    let valor_final = parcelas * qtdParcelas.value
    let total_juros = valor_final - valorFinanciado.value


    descricaoParcela.innerHTML = 'Valor da parcela:'
    conteudoParcela.innerHTML = `R$ ${parcelas.toFixed(2)}`


    descricaoJuros.innerHTML = 'Valor pago de juros:'
    conteudoJuros.innerHTML = `R$ ${total_juros.toFixed(2)}`

    
    descricaoTotal.innerHTML = "Valor final pago:"
    conteudoTotal.innerHTML = `R$ ${valor_final.toFixed(2)}`
    
}

