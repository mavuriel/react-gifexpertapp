export const getGifs = async (category) => {
  const response = await fetch(
    `${import.meta.env.VITE_GIPHY_URL}/search?api_key=${
      import.meta.env.VITE_GIPHY_API_KEY
    }&q=${category}&limit=10`,
  )

  const { data } = await response.json()

  return data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.downsized_medium.url,
  }))
}
