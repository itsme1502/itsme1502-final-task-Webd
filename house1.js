fetch('https://hp-api.herokuapp.com/api/characters/house/gryffindor',{
    method: 'GET'
}).then(Response =>{
   return Response.json()
}).then((data) =>{
    console.log(data[0]);
   show(data);
})

function show(data) {
   let tab = 
       `<table class = "table"><tr></tr>`;
     
    
   for (let r of data) {
       tab += `<tr>
       <link rel="stylesheet" href="house1.css">
       
       <div class="flip-card">
       <div class="flip-card-inner">
         <div class="flip-card-front">
         <h2><b>${r.name}</b></h2> 
         </div>
         <div class="flip-card-back">
         <p>species :${r.species}<br>
         Actor :${r.actor}<br>
         Alive :${r.alive}<br>
         Ancestry: ${r.ancestry}<br>
         Date Of Birth: ${r.dateOfBirth}<br>
         Eye Colour: ${r.eyeColour}<br>
         Hair Colour: ${r.hairColour}<br>
         Hogwarts Student: ${r.hogwartsStudent}<br>
         Hogwarts Staff: ${r.hogwartsStaff}<br>
         Gender: ${r.gender}<br>
         Image(Only Link): ${r.image}<br>
         Patronus: ${r.patronus}<br>
         Wizard: ${r.wizard}<br>
         Year Of Birth: ${r.yearOfBirth}<br>
        </p> 
         </div>
       </div>
     </div>
</tr> </table>`;
   }
   
   document.getElementById("id1").innerHTML = tab;
}
