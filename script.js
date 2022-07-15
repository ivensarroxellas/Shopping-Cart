const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  const displayCartShopping = document.getElementsByClassName('cart_items');
  displayCartShopping.removeChild(event);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const selectedItem = async (idItem) => {
  const displayCartShopping = document.querySelector('.cart__items');
  const dataItem = await fetchItem(idItem);
  const { id, title, price } = dataItem;
  const itemOnCart = createCartItemElement({ sku: id, name: title, salePrice: price });
  displayCartShopping.appendChild(itemOnCart);
};

const loadingScreen = () => {
  const message = createCustomElement('span', 'loading', 'Carregando...');
  const displayProduct = document.querySelector('.items');
  displayProduct.appendChild(message);
  };
  
  const removeloadingScreen = () => { 
  const message = document.querySelector('.loading');
  message.remove();
};

const captureIdOnClicker = (event) => {
  const idElement = getSkuFromProductItem(event.path[1]);
  selectedItem(idElement);
};

  const clickerSelect = () => {
    element = document.querySelectorAll('.item__add');
    element.forEach((index) => {
      index.addEventListener('click', captureIdOnClicker);
    });
  };

const createListProducts = async (product) => {
  const displayProduct = document.querySelector('.items');
  loadingScreen();
  const data = await fetchProducts(product);
  removeloadingScreen();
  const { results } = data;
  results.forEach((element) => {
    const { id, title, thumbnail } = element;
    const item = createProductItemElement({ sku: id, name: title, image: thumbnail });
    displayProduct.appendChild(item);
    }); 
  clickerSelect();
};

window.onload = async () => { 
  await createListProducts('computador');
};
