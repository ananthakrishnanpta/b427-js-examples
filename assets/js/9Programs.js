let students = JSON.parse(localStorage.getItem('students_storage')) || [];
// Modelling the Entity
class Student{
    // A constructor function defined within the class decides how the initialization
    //  of the object takes place. That means, this helps with allocating memory
    //  for the identifiers associated with every instance(or object) of the class.
    // Class serves as a blueprint for any object created from it.
    // This ensures uniformity amongst every object of the same class.
    constructor(student_name, student_age){
        this.name = student_name;
        this.age = student_age;
        students.push(this)
    }
}

// let s = new Student("asdf", 23);

function renderStudents() {
    // getting reference to the list 
    const studentList = document.querySelector('#studentList');
    studentList.innerHTML = '';
    students.forEach(
        (student, index) => {
            // Creating an element
            const list_item = document.createElement('li');
            // Setting the text Content
            list_item.textContent = `${index + 1} > Name: ${student.name} | Age: ${student.age}`;
            // Adding style classes or other attributes
            list_item.classList.add('text-warning');
            list_item.classList.add(student.age >= 18 ? 'bg-primary' : 'bg-secondary');
            list_item.setAttribute('id', `student-${index}`);
            // Appending the new element into the parent element
            studentList.appendChild(list_item);
        }
    )
}

renderStudents();

// Form submission handling

const studentForm = document.getElementById('studentForm');
studentForm.addEventListener('submit', function(event){
    // preventing the default behaviour of form submission.
    event.preventDefault();
    const s_name = document.querySelector('#name').value.trim();
    const s_age  = document.querySelector('#age').value.trim();

    const student = new Student(s_name, s_age);

    // Setting the value of students_storage key in local storage with the latest value of students array.
    localStorage.setItem('students_storage', JSON.stringify(students));

    renderStudents();

    // Here, `this` refers the form object
    this.reset();
})