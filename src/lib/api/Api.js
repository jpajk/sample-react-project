
import { error, success } from './../../actions'
import store from '../../defaultStore'

export const API_URL = 'http://localhost:8888/';
window.console.log(store.getState())
class Api {
  static fetch({ url='', method='get', body={} }) {

    let opts = {
      method,
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    };

    let storeState = store.getState()

    if (storeState.users.token) {
      opts.headers['Authorization'] = 'Bearer ' + storeState.users.token
    }

    if (['get', 'head'].indexOf(method) < 0) {
      opts.body = JSON.stringify(body)
    }

    return fetch(API_URL + url, opts)
      .then(res => {
        return res.json()
      })
      .then(json => {
        if (json.messages && Array.isArray(json.messages)) {
          for (let el of json.messages) {
            switch(el.element) {
              case 'Flash/error':
                store.dispatch(error(el.message));
                break;
              case 'Flash/success':
                store.dispatch(success(el.message));
                break;
            }
          }
        }

        return json
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
