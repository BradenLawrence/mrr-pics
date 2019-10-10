import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 621b2f5710892ce4a5712bef42087586a145553c579ec47094ffeed95903a4f8'
  }
})