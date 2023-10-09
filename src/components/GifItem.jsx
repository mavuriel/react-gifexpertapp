export const GifItem = ({ id, title, url }) => {
  // TODO: como cargar imagenes en redes lentas
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
