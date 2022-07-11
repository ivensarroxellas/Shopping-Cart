const fetchItem = async (itemName) => {
  if (!itemName) {
    return new Error('You must provide an url');
  }
  const responseItem = await fetch(`https://api.mercadolibre.com/items/${itemName}`);
  const dataItem = responseItem.json();
  return dataItem;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
