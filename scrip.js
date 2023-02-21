var exit=false;
let col="";
document.getElementById("start").onclick=function(){funcStart()};
function funcStart(){
    //document.getElementById("start").style.display="none";
    document.getElementById("start").innerHTML=`<div class="btn-group">
    <button id="create" class="btn btn-success">Create</button>
    <button id="addCol" class="btn btn-success">Add col</button>
    <button class="btn btn-success">Add row</button>
    <button class="btn btn-success">Delete</button>
    <button class="btn btn-success">Clear All</button>
</div>`;
    const but1=document.createElement("button");
    but1.textContent="newNUt";


document.getElementById("create").addEventListener("click", function() {
  creatTable();
});
    function creatTable(){
      
      exit=true;
      
      // document.getElementById("create").onclick=function(){funcCreate()};
      // function funcCreate(){
      document.getElementById("creat").innerHTML=`
      <table id="tab" class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
        </tbody>
       </table>`;
      //}
      
    }
    
    

  document.getElementById("addCol").addEventListener("click", function(){
    if(exit){
      //document.getElementById("creat").innerHTML="OK!";
      let x=document.getElementById("tab");
      const newHeader=document.createElement('th');
      newHeader.textContent=`Header ${x.rows[0].cells.length}`;
      x.rows[0].appendChild(newHeader);
      for(let i=1;i<x.rows.length;i++){
        const newRow=document.createElement("td");
        newRow.textContent=`Row ${i} Column ${x.rows[i].cells.length}`;
        x.rows[i].appendChild(newRow);
      }
    } else{
      alert("table's not exit! U nead create new one before addCol!");
    }
  });  
}

     