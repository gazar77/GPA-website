const gradeMapping = {
    "A*": 4.0, "A": 4.0, "A-": 3.7,
    "B+": 3.3, "B": 3.0, "B-": 2.7,
    "C+": 2.3, "C": 2.0, "C-": 1.7,
    "D+": 1.3, "D": 1.0, "D-": 0.7,
    "F": 0.0
};

function addCourse() {
    let coursesDiv = document.getElementById("courses");
    let div = document.createElement("div");
    div.className = "course-entry";
    div.innerHTML = `<select class='grade'>
                        ${Object.keys(gradeMapping).map(grade => `<option value="${grade}">${grade}</option>`).join('')}
                     </select>
                     <input type='number' placeholder='Credit Hours' class='hours' min='1'>`;
    coursesDiv.appendChild(div);
}

function calculateGPA() {
    let grades = document.querySelectorAll(".grade");
    let hours = document.querySelectorAll(".hours");
    let totalPoints = 0, totalHours = 0;
    
    for (let i = 0; i < grades.length; i++) {
        let grade = gradeMapping[grades[i].value];
        let hour = parseFloat(hours[i].value);
        if (!isNaN(grade) && !isNaN(hour) && hour > 0) {
            totalPoints += grade * hour;
            totalHours += hour;
        }
    }
    
    let gpa = totalPoints / totalHours;
    document.getElementById("result").innerText = totalHours ? `GPA: ${gpa.toFixed(2)}` : "Please enter valid values";
}