function addStudent() {

    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;

    if (name === "" || course === "") {
        alert("Please enter all details");
        return;
    }

    let table = document.getElementById("studentList");

    let row = table.insertRow();

    let nameCell = row.insertCell(0);
    let courseCell = row.insertCell(1);

    nameCell.innerHTML = name;
    courseCell.innerHTML = course;

    document.getElementById("name").value = "";
    document.getElementById("course").value = "";
}