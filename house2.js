fetch('http://hp-api.herokuapp.com/api/characters/house/hufflepuff',{
    method: 'GET'
}).then(Response =>{
   return Response.json()
}).then((data) =>{
    console.log(data[0]);
   show(data);

})

function show(data) {
   let tab = 
       `<tr></tr>`;
   
   
   for (let r of data) {
       tab += `<tr> 
       <link rel="stylesheet" href="hp.css">
   <div class="card">
  <img src="studenthvdjhbx.png" alt="Avatar" style="width:100%">
  <div  class="container" >
    <h4><b>${r.name}</b></h4> 
    <p>species :${r.species}<br>
    actor :${r.actor}<br>
    ancestry:${r.ancestry}<br>
    dateOfBirth:${r.dateOfBirth}<br>
    eyeColour:${r.eyeColour}<br>
    hairColour:${r.hairColour}<br>
    hogwartsStudent:${r.hogwartsStudent}<br>
    hogwartsStaff:${r.hogwartsStaff}<br>

    </p> 
  </div>
</div>
</tr>`;
   }
   document.getElementById("id2").innerHTML = tab;
}