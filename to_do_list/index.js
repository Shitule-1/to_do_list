const input1 = document.getElementById("student_name");
const input2 = document.getElementById("student_id");
const input3=document.getElementById("student_email");//1
const input4=document.getElementById("student_contact");

const button = document.getElementById("add_button");
const todolist = document.getElementById("todolist");

// Load items from localStorage on page load
window.addEventListener("load", function() {
    const storedItems = JSON.parse(localStorage.getItem("todolistItems")) || [];
    storedItems.forEach(function(item) {
        const creatediv = document.createElement("div");
        const createpara1 = document.createElement("p");
        const createpara2 = document.createElement("p");
        const createpara3 = document.createElement("p");//2
        const createpara4 = document.createElement("p");

        createpara1.textContent = item.student_name;
        createpara2.textContent = item.student_id;
        createpara3.textContent = item.student_email;//3
        createpara4.textContent = item.student_contact;
        creatediv.appendChild(createpara1);
        creatediv.appendChild(createpara2);
        creatediv.appendChild(createpara3);//4
        creatediv.appendChild(createpara4);

        // Add edit button icon to div
        const edit_button = document.createElement("button");
        edit_button.innerHTML = '<i class="fas fa-edit"></i>';
        edit_button.classList.add("edit-button");
        edit_button.addEventListener("click", function() {
            const newstudent_name = prompt("Enter new student_name:", item.student_name);
            const newstudent_id = prompt("Enter new student_id:", item.student_id);
            const newstudent_email = prompt("Enter new student_email:", item.student_email);//5
            const newstudent_contact = prompt("Enter new student_contact:", item.student_contact);

            if (newstudent_name !== null && newstudent_id !== null && newstudent_email !==null && newstudent_contact !==null) {//6
                createpara1.textContent = newstudent_name;
                createpara2.textContent = newstudent_id;
                createpara3.textContent=  newstudent_email;//7
                createpara4.textContent=  newstudent_contact;
                updateLocalStorage();
            }
        });
        creatediv.appendChild(edit_button);

        // Add delete button icon to div
        const delete_button = document.createElement("button");
        delete_button.innerHTML = '<i class="fas fa-trash-alt"></i>';
        delete_button.classList.add("delete-button");
        delete_button.addEventListener("click", function() {
            creatediv.remove();
            updateLocalStorage();
        });
        creatediv.appendChild(delete_button);
        creatediv.classList.add("creatediv");

        todolist.appendChild(creatediv);
    });
});

button.addEventListener("click", c_add);

function c_add() {
      
    const creatediv = document.createElement("div");
    const createpara1 = document.createElement("p");
    const createpara2 = document.createElement("p");
    const createpara3 = document.createElement("p");//8
    const createpara4 = document.createElement("p");

    createpara2.textContent = input2.value;
    createpara1.textContent = input1.value;
    createpara3.textContent=input3.value;//9
    createpara4.textContent=input4.value;
   

    creatediv.appendChild(createpara1);
    creatediv.appendChild(createpara2);
    creatediv.appendChild(createpara3);//10
    creatediv.appendChild(createpara4);
    //Avoid empty entry
    if(input1.value==='')return alert("STUDENT NAME REQUIRED") 
    if(input2.value==='')return alert("STUDEND ID REQUIRED")
    if(input3.value==='')return alert("STUDENT EMAIL REQUIRED")
    if(input4.value==='')return alert("STUDENT CONTACT DETAIL REQUIRED")

    // clear input fileds after click add button
    input1.value=''
    input2.value=''
    input3.value=''
    input4.value=''
    

    // Add edit button icon to div
    const edit_button = document.createElement("button");
    edit_button.innerHTML = '<i class="fas fa-edit"></i>';
    edit_button.classList.add("edit-button");
    edit_button.addEventListener("click", function() {
        const newstudent_name = prompt("Enter new student_name:", input1.value);
        const newstudent_id = prompt("Enter new student_id:", input2.value);
        const newstudent_email = prompt("Enter new student_email:", input3.value);//11
        const newstudent_contact = prompt("Enter new student_contact:", input4.value);
    
        if (newstudent_name !== null && newstudent_id !== null && newstudent_email!== null && newstudent_contact!== null)  {//12
            createpara1.textContent = newstudent_name;
            createpara2.textContent = newstudent_id;
            createpara3.textContent = newstudent_email;//13
            createpara4.textContent = newstudent_contact;

            updateLocalStorage();
        }
    });
    creatediv.appendChild(edit_button);

    // Add delete button icon to div
    const delete_button = document.createElement("button");
    delete_button.innerHTML = '<i class="fas fa-trash-alt"></i>';
    delete_button.classList.add("delete-button");
    delete_button.addEventListener("click", function() {
        creatediv.remove();
        updateLocalStorage();
    });
    creatediv.appendChild(delete_button);
    creatediv.classList.add("creatediv");

    // Append this created div after add button clicked to html div which is written in index.html file
    todolist.appendChild(creatediv);

    // Update localStorage
    updateLocalStorage();
}

function updateLocalStorage() {
    const items = [];
    const divs = todolist.querySelectorAll(".creatediv");
    divs.forEach(function(div) {
        const student_name = div.querySelector("p:nth-child(1)").textContent;
        const student_id = div.querySelector("p:nth-child(2)").textContent;
        const student_email= div.querySelector("p:nth-child(3)").textContent;//14
        const student_contact = div.querySelector("p:nth-child(4)").textContent;

        items.push({ student_name: student_name, student_id: student_id,student_email:student_email,student_contact:student_contact  });//15
    });
    localStorage.setItem("todolistItems", JSON.stringify(items));
}

// creating table
const table=document.createElement("table")
const tr=document.createElement("tr")
const th_name=document.createElement("th")
const th_id=document.createElement("th")
const th_email=document.createElement("th")
const th_contact=document.createElement("th")
   
th_name.innerHTML=" Name"
th_id.innerHTML="ID"
th_email.innerHTML=" Email"
th_contact.innerHTML=" Contact"

todolist.appendChild(th_name)
todolist.appendChild(th_id)
todolist.appendChild(th_email)
todolist.appendChild(th_contact)