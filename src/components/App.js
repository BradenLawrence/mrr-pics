import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID 621b2f5710892ce4a5712bef42087586a145553c579ec47094ffeed95903a4f8'
      },
      params: { query: term }
    })
    console.log(response.data.results)
  }
  
  render() {
    return(
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App