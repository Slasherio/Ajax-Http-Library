class EasyHttpRequest {
  /**
   * HTTP GET METHOD
   * @param {*string} url
   */
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  /**
   * HTTP POST METHOD
   * @param {*string} url
   * @param {*object} data
   */
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  /**
   * HTTP PUT METHOD
   * @param {*string} url
   * @param {*object} data
   */
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  /**
   * HTTP DELETE METHOD
   * @param {*string} url
   */
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => resolve('Resourse deleted...'))
        .catch(err => reject(err));
    });
  }
}
