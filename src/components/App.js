import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'

class App extends React.Component {
  state = { images: [] }

  async onSearchSubmit(term) {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    })
    this.setState({ images: response.data.results })
  }
  
  render() {
    return(
      <div className="ui container">
        <SearchBar onSubmit={event => this.onSearchSubmit(event)} />
        <span>Found {this.state.images.length} images.</span>
      </div>
    )
  }
}

export default App