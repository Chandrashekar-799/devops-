
function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;

    if (name == "" || roll == "" || course == "") {
        alert("Please fill all fields!");
        return;
    }

    let table = document.getElementById("studentList");
    let row = table.insertRow();

    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = roll;
    row.insertCell(2).textContent = course;

    let cell = row.insertCell(3);
    let btn = document.createElement("button");

    btn.textContent = "Delete";
    btn.onclick = function() {
        row.remove();
    };

    cell.appendChild(btn);

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("course").value = "";
}
