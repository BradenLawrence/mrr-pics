import React from 'react'
import './imageList.css'
import ImageCard from './ImageCard'

const ImageList = (props) => {
  const imageList = props.images.map(({id, urls, alt_description}) => {
    return <ImageCard key={id} src={urls.small} alt={alt_description} />
  })
  return <div className="image-list">{imageList}</div>
}

export default ImageList
