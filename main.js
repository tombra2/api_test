
function addStudent() {

    var name = document.getElementById("name").value; 
    var id = document.getElementById("id").value;
    var nc = document.getElementById("nc").value;

var student = {
    "Name": name,
    "Matrikelnummer": id,
    "Notendurschnitt": nc,
}
var students = [];    
students.push(student);
console.log(students);
}
