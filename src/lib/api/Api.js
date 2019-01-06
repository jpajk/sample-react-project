
export const API_URL = 'http://localhost:8765/';

class Api {
  static fetch({ url='', method='get', body={} }) {

    let opts = { method }

    if (['get', 'head'].indexOf(method) < 0) {
      opts.body = body
    }

    return fetch(API_URL + url, opts)
        .then(res => {
          return res.json()
        })
  }

  static get(url='') {
    return this.fetch({url, method: 'get' })
  }

  static post(url, body ) {
    return this.fetch({url, method: 'post', body })
  }
}

export default Api
