require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Teste se fetchItem é uma função', async () => {
    expect(typeof(fetchItem)).toBe('function');
  });

  it('Teste se fetchItem é uma função', async () => {
    fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Testa se ao chamar fetchProducts com argumento "MLB1615760527" retorna site correto', async () => {
    
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  
  it('Teste se retorno de fethc usando "MLB1615760527" é um dado igual a item', async () => {
    
    expect(typeof(fetchItem('MLB1615760527'))).toEqual(typeof(item));
  });

  it('Testa se ao chamar fetchProducts sem argumento  retorna erro', async () => {
    
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));
  });
});
