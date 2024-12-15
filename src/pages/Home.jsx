import React, { useState, createContext, useContext } from 'react';
const MenuContext = createContext();
function Food() {
  const [order, setOrder] = useState({});

  function addToOrder(item) {
    const currentOrder = { ...order };
    if (currentOrder[item.name]) {
      currentOrder[item.name].count += 1;
    } else {
      currentOrder[item.name] = { price: item.price, count: 1 };
    }
    setOrder(currentOrder);
  }

  function removeFromOrder(item) {
    const currentOrder = { ...order };
    if (currentOrder[item.name]?.count > 1) {
      currentOrder[item.name].count -= 1;
    } else {
      delete currentOrder[item.name];
    }
    setOrder(currentOrder);
  }

  return (
    <MenuContext.Provider value={{ order, addToOrder, removeFromOrder }}>
      <div className="container mx-auto min-h-screen bg-gray-100 p-5">
        <h1 className="text-2xl font-bold text-center mb-5">Ovqat Buyurtma Qilish</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Menu />
          <OrderSummary />
        </div>
      </div>
    </MenuContext.Provider>
  );
}

function Menu() {
  const { addToOrder } = useContext(MenuContext);

  const menu = [
    { name: 'Burger', price: 25000 },
    { name: 'Pizza', price: 50000 },
    { name: 'Salat', price: 15000 },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Menyu</h2>
      <ul className="space-y-4">
        {menu.map((item) => (
          <li
            key={item.name}
            className="flex justify-between items-center bg-white p-4 shadow rounded"
          >
            <span>{item.name} - {item.price} so'm</span>
            <button
              className="btn btn-info"
              onClick={() => addToOrder(item)}
            >
              Qo'shish
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OrderSummary() {
  const { order, addToOrder, removeFromOrder } = useContext(MenuContext);

  const total = Object.values(order).reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Buyurtmalar</h2>
      {Object.keys(order).length === 0 ? (
        <p className="text-gray-500">Hech narsa tanlanmagan</p>
      ) : (
        <ul className="space-y-4">
          {Object.keys(order).map((key) => (
            <li
              key={key}
              className="flex justify-between items-center bg-white p-4 shadow rounded"
            >
              <span>{key} ({order[key].count}x)</span>
              <div className="flex items-center">
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mr-2"
                  onClick={() => removeFromOrder({ name: key })}
                >
                  -
                </button>
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  onClick={() => addToOrder({ name: key, price: order[key].price })}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 text-lg font-bold">
        Umumiy narx: {total} so'm
      </div>
    </div>
  );
}

export default Food;