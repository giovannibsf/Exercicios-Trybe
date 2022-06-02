const API_URL = 'https://api.coincap.io/v2/assets'



//introduzir elemento


const organiza = async () => {
    const crypto = await fetchCrypto()
     const todas = crypto.filter((element, position) => {
        if (position < 10) {
        const ul = document.getElementById('list');
        const li = document.createElement('li')
        const preco = Number(element.priceUsd)
        li.innerText = `${element.name} (${element.symbol}): ${preco.toFixed(2)}`
        ul.appendChild(li)

        } 
    })
     }

   
const fetchCrypto = async () => {
    const obj = {
        method: 'GET',
        headers: { 'Accept': 'application/json'}
    }
    const result = await fetch(API_URL, obj)
    .then(response => response.json())
    .then(ola => ola.data)
    
    return result    
}


window.onload = () => organiza();