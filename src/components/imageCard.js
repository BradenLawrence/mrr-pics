import React from 'react'

class ImageCard extends React.Component {
  render() {
    const {alt_description, urls} = this.props.image
    return (
      <div>
        <img alt={alt_description} src={urls.small} />
      </div>
    )
  }
}

export default ImageCard
