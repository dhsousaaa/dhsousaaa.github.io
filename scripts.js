const AR_LINHA_DIGITAVEL = [
    '75691111100101130850704671610014100000000004650'
];
const input = document.querySelector('input');

function gerar()
{
  let btnGerar = document.querySelector('#btnGerar');
  btnGerar.addEventListener('click', (e) => {
    let linhaDigitavel = gerarLinhaDigitavel();
    input.value = linhaDigitavel;
    input.setAttribute('disabled', 'disabled');
  });
}

function copyToClipBoard(){
  navigator.clipboard.writeText(input.value).then( ()=> {
    alert('Copiado para área de trabalho!')
  })
}


function gerarLinhaDigitavel()
{
    let valor = Math.floor(Math.random() * 9000) + 5000;
    let linhaDigitavel = substr_replace(
        AR_LINHA_DIGITAVEL[0],
        ("0000000000" + valor).slice(-10),
        -10
    );
    return linhaDigitavel;
}

function substr_replace(str, replace, start, length) {
    if (start < 0) {
      start = start + str.length
    }
    length = length !== undefined ? length : str.length
    if (length < 0) {
      length = length + str.length - start
    }
    return [
      str.slice(0, start),
      replace.substr(0, length),
      replace.slice(length),
      str.slice(start + length)
    ].join('')
}

gerar();
