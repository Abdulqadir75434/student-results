function calculateResult() {
    var marks1 = Number(document.getElementById("marks1").value);
    var marks2 = Number(document.querySelector("#marks2").value);
    var marks3 = Number(document.querySelector("#marks3").value);
    var marks4 = Number(document.querySelector("#marks4").value);
    var marks5 = Number(document.querySelector("#marks5").value);
    
    var totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;
    var percentage = (totalMarks / 400) * 100;
    var grade = "F";
    
    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    }
    
    document.getElementById("result").innerHTML = "<p>Total Marks Obtained: " + totalMarks + " / 500</p>" +
        "<p>Percentage: " + percentage + "%</p>" +
        "<p>Grade: " + grade + "</p>";
}