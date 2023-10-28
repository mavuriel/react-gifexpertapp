import { getGifs } from '../../src/helpers/getGifs'

describe('Pruebas en la funcion getGifs()', () => {
  test('debe traer informacion en el formato definido', async () => {
    const gifs = await getGifs('Naruto')
    console.log(gifs)
  })
})
