
const treatData = (dataCambio, dataMoedas) => {
  const filtred = dataCambio.filter(({rank})=> rank <=10)
  const treatedValues = filtred.map(({name, priceUsd, symbol})=> ({name, priceUsd, symbol}))

  const cambio = dataMoedas.usd.brl
  const body = document.querySelector('body')

  treatedValues.forEach(({name, priceUsd, symbol})=> {
    const div = document.createElement('div')
    div.innerHTML = `A moeda ${name} que tem o preço em reaus ${(priceUsd*cambio).toFixed(2)} e que tem o simbolo ${symbol}`
    body.appendChild(div)
  })
}

const getApi = async () => {
  try {
    const urlCambio = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json'
    const urlMoedas = 'https://api.coincap.io/v2/assets/'

    const arrayResponse = await Promise.all([fetch(urlMoedas), fetch(urlCambio)])
    const arrayData = await Promise.all(arrayResponse.map( async (response) => await response.json()))
    const [ dataCambio, dataMoedas ] = arrayData

    treatData(dataCambio.data, dataMoedas)
    return console.log(dataMoedas)
  } catch (error) {
    console.error(error)
  }
}

getApi()
