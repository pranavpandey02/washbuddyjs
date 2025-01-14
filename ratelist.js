// =================rate list data fetch===========
async function fet()
{
    let table1 = document.querySelector('#displaydata1');
    let res1 = await fetch("http://localhost:3000/emp");
    let data1 =await res1.json();
    console.log(data1);

    let finaldata1 = data1.map((e)=>
    `
    <tr>
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.mobilenum}</td>
    <td>${e.quantity}</td>
    <td>${e.pickupdate}</td>
    <td>${e.address}</td>
    <td>${e.product}</td>
    <td><button onclick="mydelete('${e.id}')"> Delete </button> </td>

    <td><button onclick="mydelete('${e.id}')"> Update </button> </td>
    </tr>
    `).join("")
    table1.innerHTML=finaldata1

    console.log(finaldata1);
    
}
fet();

function mydelete(id)
{
    console.log(id);
        fet(`http://localhost:3000/emp${id}`,
            {
                method:`DELETE`
            }
        )
    .then(r=>alert("Deleted......................!"))
}


// ===================insterd data=================

function insert_data1()
{
    let data1 = {
        name:document.querySelector('#name').value,
        mobilenum:document.querySelector('#phone').value,
        quantity:document.querySelector('#quantity').value,
        pickupdate:document.querySelector('#date').value,
        address:document.querySelector('#address').value,
        product:document.querySelector('#products').value
    }
    fetch("http://localhost:3000/emp",
    {
        method:'POST',
       headers:
       {
        'Content-type':'application/json'
       },
       body:JSON.stringify(data1)
    }
)
.then(r=>alert("Data Inserted"));
return false;
}