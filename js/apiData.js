// const people = [
//     {
//       id: 1,
//       name: "John Doe",
//       age: 30,
//       occupation: "Software Engineer",
//       contact: {
//         email: "john.doe@example.com",
//       },
//       address: {
//         street: "123 Main St",
//         city: "San Francisco",
//         state: "CA",
//         zip: "94105",
//       },
//       social: {
//         twitter: "@johndoe",
//       },
//       hobbies: ["Coding", "Hiking", "Photography"],
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       age: 25,
//       occupation: "Graphic Designer",
//       contact: {
//         email: "jane.smith@example.com",
//         phone: "987-654-3210",
//       },
//       hobbies: ["Drawing", "Traveling"],
//     },
//     {
//       id: 3,
//       name: "Mark Johnson",
//       age: 40,
//       occupation: "Marketing Manager",
//       contact: {
//         email: "mark.johnson@example.com",
//         phone: "123-456-7890",
//       },
//       address: {
//         street: "789 Oak St",
//         city: "Chicago",
//         state: "IL",
//         zip: "60607",
//       },
//       hobbies: ["Running", "Golf"],
//     },
//   ];

const loadData = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const people = await res.json();
    renderPeopleList(people);
}

const peopleList = document.getElementById('people-list');
const personInfo = document.getElementById("person-info");


const renderPeopleList = (people) => {
    people.map(person => {
        const li = document.createElement("li");
        li.classList.add("cursor-pointer", "text-blue-800",'bg-green-200','rounded-2', "p-2","font-bold",);
        li.textContent = person.name;
        li.addEventListener('click', () => {
            personInfo.classList.remove("hidden");
            document.getElementById("no-selection").classList.add("hidden");

            console.log(personInfo.classList)
            
            personInfo.innerHTML = `
           <h2 class="text-2xl font-bold mb-2"> ${person.name} </h2>
           <p>Number: ${person?.username || "N/A"} </p>
           <p>Phone: ${person?.phone || "N/A"} </p>
           <p>Website: ${person?.website || "N/A"} </p>
           <p>Email: ${person?.email || "N/A"} </p>
           <p>Company Name: ${person?.company?.name || "N/A"} </p>
           
          `;
          
        })
        peopleList.appendChild(li);
    })
}

loadData();