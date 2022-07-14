const fetchItem = async (itemName) => {
  const responseItem = await fetch(`https://api.mercadolibre.com/items/${itemName}`);
  const dataItem = await responseItem.json();
  return dataItem;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
