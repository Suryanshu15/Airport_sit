fetch("flights.json")
.then(function(response){
   return response.json();
})
.then(function(products){
   let placeholder = document.querySelector("#data");
   let out = "";
   for(let flight of flights){
      out += `
         <tr>
         <td><img src='${flight.img}'> </td>
         <td>${flight.name}</td>
         <td>${flight.price}</td>
         <td>${flight.from}</td>
         <td>${flight.to}</td>
         <td>${flight.time}</td>
         </tr>
      `;
   }

   placeholder.innerHTML = out;
});
