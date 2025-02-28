async function getUsers(){
const user =  await fetch("https://jsonplaceholder.typicode.com/users");
const data = await user.json();
const AllUser = data.map(function(user){
    return  `
                <div class="user">
                <h3>name: ${user.name}</h3> 
                <p>email: ${user.email}</p>
                <address> address: ${user.address.street}</address>
                <p>phone: ${user.phone}</p>
                <p> website: ${user.website}</p>
                <p> company: ${user.company.name}</p>
                </div>
    `;
}).join(' ');
document.querySelector('.main .row').innerHTML = AllUser


}

getUsers();