import "whatwg-fetch";

class Http {
  async request(url, method, data = {}) {
    // 处理参数
    let queryString = "";
    let bodyString = "";
    const token = localStorage.getItem('token')
    console.log('token: ', token);
    Object.entries(data).forEach(([key, value], index) => {
      if (method === "GET") {
        queryString += (index === 0 ? "?" : "&") + `${key}=${value}`;
      } 
    });
    const options = {
      method,
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
    if(method !== 'GET'){
      options.body = JSON.stringify(data);
    }
    const response = await fetch(url + queryString, options);
    const result = await response.json();
    return result;
  }
  get(url, data = {}) {
    return this.request(url, "GET", data);
  }
  post(url, data = {}) {
    return this.request(url, "POST", data);
  }
}

export default new Http();
