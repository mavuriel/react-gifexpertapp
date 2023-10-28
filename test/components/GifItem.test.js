import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('Pruebas en el componente <GifItem/>', () => {
  const title = 'Naruto'
  const url = 'https://naruto.com/hinata'

  test('debe de ser igual al snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />)

    expect(container).toMatchSnapshot()
  })

  test('debe de mostrar el URL y el alt indicado', () => {
    render(<GifItem title={title} url={url} />)

    const { src, alt } = screen.getByRole('img')

    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('debe mostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url} />)

    expect(screen.getByText(title)).toBeTruthy()
  })
})
