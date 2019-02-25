const API = 'https://api.sheety.co/76137b9f-b100-48c6-ad00-dbbe81628344';

const app = new Vue({
  el: "#main",
  data: {
    items: []
  },
  mounted () {
    axios
      .get(API)
      .then(response => (this.items = response))
  }
 });
