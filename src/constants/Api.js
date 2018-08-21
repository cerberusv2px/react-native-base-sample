import axios from 'axios';

axios.defaults.baseURL = 'https://mydev.rosia.one/mobile/api/v2';

export default class FirstAppAPI {
  constructor() {
    this.config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  async login(username, password) {
    try {
      const { data } = await axios.get(`/user/authenticate/username=${username}&password=${password}`)
      return data;
    } catch (e) {
      throw e;
    }
  }
}