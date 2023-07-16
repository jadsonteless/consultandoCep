const body = document.querySelector('body');
body.style.cssText = `
  background: #1C1C1C;
  color: #F8F8FF;
`
async function buscarCEP() {
  try {
    const inputCep = document.querySelector('#cepInput').value;
    const url = `https://viacep.com.br/ws/${inputCep}/json`

    const response = await fetch(url);
    const dadosJson = await response.json();

    // mostra dados na pagina
    addElementoHtml(dadosJson)
  } catch (error) {
    console.error(error)
  }
}

// Criando função para mostras dados
function addElementoHtml(dadosJson) {
  document.querySelector('h2').innerText = 'Dados do CEP 👇';
  document.querySelector('#cep').innerHTML = dadosJson.cep;
  document.querySelector('#rua').innerHTML = dadosJson.logradouro;
  document.querySelector('#bairro').innerHTML = dadosJson.bairro;
}