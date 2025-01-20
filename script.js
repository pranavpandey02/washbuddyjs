// ==============second navbar slider==========
  function toggleSlider() {
    const sliderNav = document.getElementById('slider-nav');
    sliderNav.classList.toggle('show');
  }


//   ==================fetch function=============
async function fetchh()
{
    let table = document.querySelector('#displaydata');
    let res = await fetch("http://localhost:3000/inq");
    let data = await res.json();
    console.log(data);
    
     let finaldata = data.map((e)=>
     `
      <tr>
      <td>${e.id}</td>
      <td>${e.name}</td>
      <td>${e.contact}</td>
      <td>${e.email}</td>
      <td>${e.message}</td>
      <td><button onclick="mydelete('${e.id}')"> Delete </button></td>
      <td><button onclick="edit('${e.id}')"> Edit</button></td>
    
       
      </tr>
     `).join("")
     table.innerHTML=finaldata
}
fetchh();

function mydelete(id)
{
    console.log(id);
    fetch (`http://localhost:3000/inq/${id}`,
        {
            method:`DELETE`
        }
    )
    .then(r=>alert("Deleted..........!"))
}
function insert_data()
{
    let data ={
        name:document.querySelector('#name').value,
        contact:document.querySelector('#contact').value,
        email:document.querySelector('#email').value,
        message:document.querySelector('#message').value
    }
    fetchh("http://localhost:3000/inq",
        {
            method:'POST',
            headers:
            {
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        }
    )
    .then(r=>alert("Data Inserted"));
}

// // updates

async function edit(id)
{
    let res = await fetch(`http://localhost:3000/inq/${id}`)
    
        let data = await res.json()
        let edit_frm = `
        <h1> Edit Section </h1>
        <input type = "text" value="${data.id}" id = "id1" readonly> <br>
        <input type = "text" value="${data.name}" id = "name1"> <br>
        <input type = "text" value="${data.contact}" id = "age1"> <br>
        <input type = "text" value="${data.email}" id = "contact1">  <br>
        <input type = "text" value="${data.message}" id = "message1"><br>
        <input type = "submit" value="update" onclick = "myupdate('${data.id}')">
        
        `
        document.querySelector('#editform').innerHTML=edit_frm;
    
}
function myupdate(id)
{
    let updata = {
        name:document.querySelector('#name1').value,
        id:document.querySelector('#id1').value,
        age:document.querySelector('#age1').value,
        contact:document.querySelector('#contact1').value,
        message:document.querySelector('#message1').value,
    }
    fetch(`http://localhost:3000/inq/${id}`,
        {
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(updata)
        }
    )
    .then(res=>alert("updated ...!!"));
}