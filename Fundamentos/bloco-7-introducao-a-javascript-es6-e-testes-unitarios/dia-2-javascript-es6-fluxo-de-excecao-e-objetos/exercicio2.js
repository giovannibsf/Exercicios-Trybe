const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
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
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
//   Exercicio 1 - Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// Note que o parâmetro da função já está sendo passado na chamada da função
  

const customerInfo = (order) => {
    const entregadora = order.order.delivery.deliveryPerson;
    const recebedor = order.name;
    const tel = order.phoneNumber;
    const rua = order.address.street;
    const num = order.address.number;
    const ap = order.address.apartment;
    
    return `Olá ${entregadora}, entrega para: ${recebedor}, telefone: ${tel}, ${rua}, Nº: ${num}, AP: ${ap}`
      
  }
  customerInfo(order);


//   Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.
  
  
  
  
  const orderModifier = (order) => {
    order.name = "Luiz Silva";
    const comprador = order.name;
    const arraySabores = Object.keys(order.order.pizza)
    const bebida = order.order.drinks.coke.type;
    order.payment.total = "50,00";
    const preco = order.payment.total;


    return `Olá ${comprador}, o total do seu pedido de ${arraySabores[0]}, ${arraySabores[1]} e ${bebida} é R$ ${preco}. `
    
  
  }
  
  console.log(orderModifier(order));


  