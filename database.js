let id = 1;
const list = [];

const addItem = (name, price) => list.push({ id: id++, name, price });

const getItems = () => list;

const updateItem = (itemId, newName, newPrice) => {
  const index = list.findIndex((item) => item.id === itemId);
  if (index === -1) return null;
  
  list[index] = { id: itemId, name: newName, price: newPrice };
  return list[index];
};

const deleteItem = (itemId) => {
  const index = list.findIndex((item) => item.id === itemId);
  if (index === -1) return null;

  const [deletedItem] = list.splice(index, 1);
  return deletedItem;
};

module.exports = { addItem, getItems, updateItem, deleteItem };
