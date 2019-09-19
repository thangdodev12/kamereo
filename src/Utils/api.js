import axios from 'axios';

class Api {
  constructor() {
    this.host = 'http://localhost:8081';
    this.config = {
      headers: {
        "Content-Type": "multipart/form-data"
      },
    }
    this.messError = 'Error !'

    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
  }

  async get(url, body = {}, noHost = false) {
    const params = {
      ...body,
      limit: 20,
    }
    const result = await axios.get(noHost ? url : `${this.host}${url}`, { params });
    return result.status === 200 ? result.data : this.messError;
  }

  async post(url, body) {
    const result = await axios.post(`${this.host}${url}`, body); 
    return result.status === 200 ? result.data : this.messError;
  }
}

const request = new Api();
window.request = request;

export default request;
