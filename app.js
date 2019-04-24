var restaurants = new Vue({
  el: '#app',
  data: {
    lookup: "Vegan",
    places: businesses
  },
  computed: {
    categories: function() {
      var cats = []
      //loop through all the places,
      for(var i = 0; i < this.places.length; i++){

        for(var j = 0; j < this.places[i].categories.length; j++){
          //add their categories to a list if it is not "vegan"
          //also, if the category is currently in the list, then add.
          var current = this.places[i].categories[j].title;
// current != "Vegan" &&
          if(cats.indexOf(current) == -1){
            cats.push(current);
          }
        }

      }
      //return that list
      return cats;

    },
    placesByCat: function() {
     // only return if the post that category id in its array
     var filter = this.lookup;
     return this.places.filter(function(place) {
       //debugger;
       //return Object.values(place.categories).includes(filter);
       // return place.categories.includes(filter);
       return place.categories.filter(function(p){
         return p.title == filter
       });

     })
   }

  }


})
