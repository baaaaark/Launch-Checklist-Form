document.addEventListener("load", function() {
   let launchForm = document.querySelector("form");

   launchForm.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      console.log(pilotName);
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === 0 || cargoMass.value === 0){
         alert("All fields are required!");
            // stop the form submission
         console.log(copilotName);
      }
   });
});
// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
