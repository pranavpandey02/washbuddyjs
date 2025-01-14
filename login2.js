function signup()
{
    let data1 = {
        username:document.querySelector('#username').value,
        email:document.querySelector('#email').value,
        password:document.querySelector('#password').value,
        cnp:document.querySelector('#cnp').value
    }
    localStorage.setItem('signupdata' , JSON.stringify(data1));
}
let local_data = JSON.parse(localStorage.getItem('signupdata'))


function login()
{
    let data1 = {
        name:document.querySelector('#name').value,
        password:document.querySelector('#password').value
    }
    if(local_data.username!=data1.name  || local_data.password !=data1.password )
    {
      alert("User Not found");
      return false;       
    }
}