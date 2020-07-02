//Business Logic

// Object literal
const pizzaPrice = {
    small: 10,
    medium: 15,
    large: 20,

  };

  const toppingsPrice = {
    mushrooms : 1,
   cheese: 1,
   pepperoni: 1,
   olives :2,
   tomatoes:1,
  };
// Constructor
function Pizza(size){
    this.size = size;
    this.topping =[];
    this.total = pizzaPrice[size];
}
 
Pizza.prototype.ShowTotal =function(toppings) {
 this.toppings.push(toppings);
 for(let i = 0; i < toppings.lenght; i++){
     topping = toppings[i];

     if(Object.keys(toppingsPrice).includes(topping)){
      this.total +=toppingsPrice[topping];  
     }
 }
return this.total;
}

  




// UI logic
    $(document).ready(function(){
        console.log("hi");
        $("form#pizza-parlor").submit(function(event){
            event.preventDefault();
            //getting the radiobutton value
            
            let size = $('input[name="size"]:checked').val();
            console.log(size)
            // getting the checkbox value
           let toppings = $.map($('input[name="toppings"]:checked'), function (c) {
            return c.value;
          });

           console.log(toppings)
 
           let pizza = new Pizza(size);

           console.log( pizza.total)
           
        })
      
        
    })

    // $("input[name=toppings]:checked").map(function() {
    //     return this.value;
    // }).get().join(",");

    
    // function showSelectedValues()
    // {
    //   alert($("input[name="toppings"]:checked").map(
    //      function () {return this.value;}).get().join(","));
    // }

     



