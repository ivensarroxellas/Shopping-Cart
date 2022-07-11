require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Tem que ser uma função', async () => {
    expect.assertions(1)

    expect(typeof(fetchProducts)).toEqual('function');
  });
  
  it('Testa função chamando parametro "computador" se ela é chamada', async () => {
    expect.assertions(1);

    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Testa ao chamar a função com "computador" utilizada o endpoint correto', () => {
    expect.assertions(1);

    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  });

  it('Testa se fetchProducts com computador é igual a computadorSearch', async () => {
    expect.assertions(1);

    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });
  it('Testa se ao chamar fetchProducts sem argumento  retorna erro', async () => {
    
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'));
  });
});
  
