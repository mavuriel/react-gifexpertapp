export const getGifs = async (category) => {
  console.log(
    `${process.env.VITE_GIPHY_URL}/search?api_key=${process.env.VITE_GIPHY_API_KEY}&q=${category}&limit=10`,
  )
  const response = await fetch(
    `${process.env.VITE_GIPHY_URL}/search?api_key=${process.env.VITE_GIPHY_API_KEY}&q=${category}&limit=10`,
  )

  const { data } = await response.json()

  return data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.downsized_medium.url,
  }))
}
