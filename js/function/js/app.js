let users = [
    {
        name : 'Madina',
        age : 18
    },
    {
        name : 'Vusal',
        age : 17
    }
];

const tbody=document.querySelector('tbody');
const name = document.querySelector('#name');
const age = document.querySelector('#age');
const btn = document.querySelector('#btn');
const error = document.querySelector('#error');

btn.addEventListener("click",()=>{

    const existsName = users.find(user => user.name == name.value);

    error.innerHTML = '';

    if (existsName) {

        return error.innerHTML = `${name.value} adinda istifadeci movcuddur`;
    }

    users.push({
        name : name.value,
        age : age.value
    });

    name.value = '';
    age.value = '';

    getUsers();
})



const getUsers = () => {

    tbody.innerHTML = '';

    users.forEach(user=> {
        const tr = document.createElement('tr')
        const tdage = document.createElement('td')
        const tdname = document.createElement('td')
        const tdDelete = document.createElement('td') 
        const button = document.createElement('button'); 
        
        tdDelete.append(button); 
        tr.append(tdname); 
        tr.append(tdage);
        tr.append(tdDelete) 
        tbody.append(tr);
        
        button.innerText = 'Delete'; 
        tdname.innerText =user.name;
        tdage.innerText=user.age;
    }
    
    )
}

getUsers();

