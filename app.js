var restaurants = new Vue({
  el: '#app',
  data: {
    lookup: "",
  },

  methods: {
    get: function() {
      //debugger;
      //var url = 'https://api.yelp.com/v3/businesses/search' + this.lookup;
      //var token = "8KFcr_gfumVPMD-8JcvG4PV3dBcNYNZ66PdjDPv59kqkDBZH2qjfX65mG3ID6WN8FkBArJwNu_M-1eHNu-YFSddCJme6YoRzXAJh7fUsWIlV0uS5nYwXfw8tf3CuXHYx"
      var url = "http://api.yelp.com/business_review_search";
      axios.get(url, {
        responseType: "json",
        data: {term : 'restaurant', lat:40.6, long: -73.9 }, 
      }).then(function(response){
        debugger;
        vue.restaurants = response.data.data
      }).catch(function (error) {
          debugger;
          console.log(error);
        });
    }

  }

})
