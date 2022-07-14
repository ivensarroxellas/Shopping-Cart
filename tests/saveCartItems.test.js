const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Testa função chamando parametro "<ol><li>Item</li></ol>" se ela é chamada', async () => {
    expect.assertions(1);

    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
  
  it('Testa função chamando parametro "<ol><li>Item</li></ol>" se ela é chamado com 2 parâmetros, primeiro sendo o de carItems e segundo parametro de saveCartItems', async () => {
    expect.assertions(1);

    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems','<ol><li>Item</li></ol>');
  });

});
