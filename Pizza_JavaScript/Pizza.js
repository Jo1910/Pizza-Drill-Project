function getReceipt() {
  // This initializes our string  so it can get passed from
  // function to function, growing line by line into a full receipt
  var text1 = "<h3>You ordered:</h3>";
  var runningTotal = 0; // Creating variable 'runningTotal' that will hold a numeric value that represents total for all the selected items, and assigning it 0 
  var sizeTotal = 0; // Creating variable 'sizeTotal' that will hold subtotal for of the selected pizza size, and assigning it 0
  var sizeArray = document.getElementsByClassName("size"); // Creating variable 'sizeArray' that will hold values of HTML elements with the 'size' class
  for (var i = 0; i < sizeArray.length; i++) { // Looping through the array with a for loop, and using if statement to determine and print out each of the selected items from that array.
    if (sizeArray[i].checked) { // This condition will check each item in the iteration to see if that particular item has been checked or not.
      var selectedSize = sizeArray[i].value; // Declaring a new variable 'selectedSize' that will temporarily store the next selected item within our array, so it can be added to the 'text1' string variable
      text1 = text1 + selectedSize + "<br>"; // Concatenating a new value to the previous value already stored within 'text1'.
    }
  }
  if (selectedSize === "Mini Pizza") { // If statement and else if statements that will check if the value stored within the variable 'selectedSize' matches the condition, and stored the correct pizza value within the variable 'sizeTotal'
    sizeTotal = 4;
  } else if (selectedSize === "Personal Pizza") {
    sizeTotal = 6;
  } else if (selectedSize === "Small Pizza") {
    sizeTotal = 8;
  } else if (selectedSize === "Medium Pizza") {
    sizeTotal = 10;
  } else if (selectedSize === "Large Pizza") {
    sizeTotal = 14;
  } else if (selectedSize === "Extra Large Pizza") {
    sizeTotal = 16;
  }
  runningTotal = sizeTotal; // Adding the value stored in 'sizeTotal' to the variable 'runningTotal'
  console.log(selectedSize + " = $" + sizeTotal + ".00"); // This function outputs the string containing the selected pizza and the monetary value of that pizza, to the web console.
  console.log("size text1: " + text1); // This function outputs a string containing the string value of 'text1', to the web console.
  console.log("subtotal: $" + runningTotal + ".00"); // This function outputs a string containing subtotal to the web console.
  // These variables will get passed onto each function
  getTopping(runningTotal, text1); //Calling the next function 'getTopping' and passing along 2 variables: 'runningTotal' and 'text1'.
}

function getTopping(runningTotal, text1) { 
  var toppingTotal = 0; // Declaring the variable 'toppingTotal' that will hold the value for all the selected toppings, and assigning it 0 for now.
  var selectedTopping = []; // Declaring the variable 'selectedTopping' and assigning it an empty array. This var will store a list of all user selected toppings.
  var toppingArray = document.getElementsByClassName("toppings"); // Declaring the variable 'toppingArray' that will hold values within the HTML elements with the 'toppings' class
  for (var j = 0; j < toppingArray.length; j++) { // Iterating through the array with a for loop and using if statement to determine and print out each of the selected items from that array.
    if (toppingArray[j].checked) { // Checking each item in the array to see if that particular item has been checked or not.
      selectedTopping.push(toppingArray[j].value); // Generating a list of selected items
      console.log("selected topping item: (" + toppingArray[j].value + ")");
      text1 = text1 + toppingArray[j].value + "<br>"; // Concatenating a new selected value from the toppingArray to the previous value stored within the 'text1'.
    }
  }
  var toppingCount = selectedTopping.length; // Declaring the variable 'toppingCount' and assigning it a count of all items within the list of selected toppings using the 'length' method.
  if (toppingCount > 1) { // Checking to see if there is more than 1 item of selected toppings within the array.
    toppingTotal = toppingCount - 1; // If there is more than 1, substracting one item from the total count (because 1 would be free).
  } else {
    toppingTotal = 0;
  }
  runningTotal = runningTotal + toppingTotal; // adding 'toppingTotal' to the 'runningTotal' which represents the final order total.
  console.log("total selected topping items: " + toppingCount);
  console.log(
    toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00"
  );
  console.log("topping text1: " + text1);
  console.log("Purchase total: " + "$" + runningTotal + ".00");
  document.getElementById("showText").innerHTML = text1; // Displaying the value of 'text1' within the HTML element with the 'showText' id.
  document.getElementById("totalPrice").innerHTML =       // Displaying the total price within the HTML element with the 'totalPrice' id.
    "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}
