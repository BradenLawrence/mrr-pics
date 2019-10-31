import React from 'react'

class imageCard extends React.Component {
  render() {
    <div>
      <img
        alt={this.props.image.alt_description}
        key={this.props.image.id}
        src={this.props.image.urls.small}
      />
    </div>
  }
}
