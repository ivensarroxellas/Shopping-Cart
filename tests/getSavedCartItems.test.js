const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Teste se ao executar getSavedCartItems o método localStorage.getItem é chamado', async () => {
    expect.assertions(1);

    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });

  it('Teste se ao executar getSavedCartItems o método localStorage.getItem é chamado com "cartItems" como parametro ', async () => {
    expect.assertions(1);

    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });

});
