import PropTypes from 'prop-types'

export const GifItem = ({ id, title, url }) => {
  // TODO: como cargar imagenes en redes lentas
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
