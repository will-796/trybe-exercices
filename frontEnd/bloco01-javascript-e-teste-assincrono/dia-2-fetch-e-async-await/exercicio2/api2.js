
const filterDataBC = ({ data }) => {
  const tenPrimeiros = data.filter((element, index) => index <= 10).sort((a,b)=> b.priceUsd-a.priceUsd);
  return tenPrimeiros;
};

const createDivs = (dataBC, dataCambio) => {
  const filtredBC = filterDataBC(dataBC);
  const container = document.querySelector("#table-container");
  filtredBC.forEach((element) => {
    const { name, priceUsd } = element;
    const emReaus = (priceUsd*dataCambio.usd.brl).toFixed(2)
    const div = document.createElement("div");
    div.innerHTML = `A moeda ${name} tem um valor de ${emReaus} reaus :)`;
    container.appendChild(div);
  });
};

const bagulho = async () => {
  try {
    const responses = await Promise.all([
      fetch("https://api.coincap.io/v2/assets"),
      fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json"),
    ]);
    const [dataBC, dataCambio] = await Promise.all(responses.map(async (response) => await response.json()));
    createDivs(dataBC, dataCambio);
  } catch (error) {
    console.log(error);
  }
};

window.onload = () => bagulho();
