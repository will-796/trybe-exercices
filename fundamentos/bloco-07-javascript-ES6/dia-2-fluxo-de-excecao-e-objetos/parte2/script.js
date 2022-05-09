const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const {
    order: {delivery: {deliveryPerson}},
    name,
    phoneNumber,
    address
  } = order
  return console.log(`Olá ${deliveryPerson} entrega para:${name}, Telefone: ${phoneNumber}, ${address.street}, ${address.number}, ${address.apartment} `)
};

customerInfo(order);

const orderModifier = (order) => {
  const pizzas = Object.keys(order.order.pizza)
  const refrigerante = order.order.drinks.coke.type
  const total = order.payment.total = 50
  return console.log(`Olá Willian, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${refrigerante} é R$ ${total},00.`);
};

orderModifier(order);
