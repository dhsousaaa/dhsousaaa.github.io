function calcularJuros() {

    let btnCalcular = document.querySelector('#btnCalcular');
    let divDetalhesJuros = document.querySelector('.detalhes-calculo');
    divDetalhesJuros.style.display = 'none';
    btnCalcular.addEventListener('click', (e) => {
        let valor = Number(document.querySelector('#valor').value);
        let juros = Number(document.querySelector('#juros').value);
        let dias = Number(document.querySelector('#dias').value);
        let mensagemJuros = document.querySelector('.mensagem-calculo');
        let tipoJuros = document.getElementsByName('tipo-juros');
        let arChecked = [];
    
        e.preventDefault();
        if (!valor) {
            alert('Valor não preenchido!');
            return;
        }

        if (!juros) {
            alert('Juros não preenchido!');
            return;
        }

        if (!dias) {
            alert('Dias para atraso não preenchido!');
            return;
        }
        
        for (var i=0; i<tipoJuros.length; i++) {
            if (tipoJuros[i].checked) {
                arChecked.push(tipoJuros[i].value);
            }
        }

        let valorJuros = 0;
        if (arChecked[0] == 'pro-rata') {
            let taxaProRata = juros / 30;
            valorJuros = (valor * taxaProRata) / 100;
            let Valortotal = (valorJuros.toFixed(2) * dias) + valor;
            let textoValorJuros = `Juros ${juros}% a.m R$${valorJuros.toFixed(2)} por dia * ${dias} dias de atraso, o valor total é R$${Valortotal.toFixed(2)}`;
            mensagemJuros.innerText = textoValorJuros;
            divDetalhesJuros.style.display = 'block';
        }

        if (arChecked[0] == 'percentual') {
            valorJuros = (valor * juros) / 100;
            let Valortotal = valorJuros + valor;
            let textoValorJuros = `Juros ${juros}% a.m R${valorJuros.toFixed(2)}, o valor total é R$${Valortotal.toFixed(2)}`;
            mensagemJuros.innerText = textoValorJuros;
            divDetalhesJuros.style.display = 'block';
        }

        valorJuros = (valor * juros) / 100;
        return valorJuros;
    });
}


function criarDetalhesCalculoJuros()
{
    let valor = document.querySelector('#valor').value;
    let juros = document.querySelector('#juros').value;
    let dias = document.querySelector('#dias').value;
    let tipoJuros = document.getElementsByName('tipo-juros');
    let arChecked = [];

    for (var i=0; i<tipoJuros.length; i++) {
        if (tipoJuros[i].checked) {
            arChecked.push(tipoJuros[i].value);
        }
    }

    if (arChecked[0] == 'pro-rata') {
        let taxaProRata = juros / 30;
        let textoDetalhada = `Juros de {$taxaProRata}`;
    }
}

calcularJuros();