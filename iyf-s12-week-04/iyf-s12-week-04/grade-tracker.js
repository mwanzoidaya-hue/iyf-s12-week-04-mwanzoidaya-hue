// Mini-Project: Student Grade Tracker
// Run in the browser console (index.html) or with: node grade-tracker.js

const round2 = (value) => Math.round(value * 100) / 100;

const averageOf = (grades) => {
    const values = Object.values(grades);
    const total = values.reduce((sum, grade) => sum + grade, 0);
    return total / values.length;
};

const gradeTracker = {
    students: [],

    // grades is an object such as { math: 85, english: 90 }
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    getStudent(name) {
        const found = this.students.find((student) => student.name === name);
        return found === undefined ? null : found;
    },

    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (student === null) {
            return null;
        }
        return round2(averageOf(student.grades));
    },

    getSubjectAverage(subject) {
        const scores = this.students
            .filter((student) => subject in student.grades)
            .map((student) => student.grades[subject]);
        if (scores.length === 0) {
            return null;
        }
        const total = scores.reduce((sum, score) => sum + score, 0);
        return round2(total / scores.length);
    },

    getTopStudent() {
        if (this.students.length === 0) {
            return null;
        }
        return this.students.reduce((best, student) =>
            averageOf(student.grades) > averageOf(best.grades) ? student : best
        );
    },

    // Students whose average is below 70
    getStrugglingStudents() {
        return this.students.filter((student) => averageOf(student.grades) < 70);
    },

    // A: 90+, B: 80-89, C: 70-79, D: 60-69, F: below 60
    getLetterGrade(score) {
        if (score >= 90) {
            return "A";
        } else if (score >= 80) {
            return "B";
        } else if (score >= 70) {
            return "C";
        } else if (score >= 60) {
            return "D";
        }
        return "F";
    },

    generateReportCard(name) {
        const student = this.getStudent(name);
        if (student === null) {
            return `No student found with the name ${name}`;
        }
        const average = round2(averageOf(student.grades));
        const lines = Object.entries(student.grades).map(
            ([subject, score]) => `  ${subject}: ${score} (${this.getLetterGrade(score)})`
        );
        return [
            `Report card for ${student.name}`,
            ...lines,
            `  Average: ${average} (${this.getLetterGrade(average)})`
        ].join("\n");
    }
};

// Tests (console.log stays outside the methods)
console.log("--- Grade tracker ---");
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));          // 91.67
console.log(gradeTracker.getSubjectAverage("math"));           // 75.67
console.log(gradeTracker.getTopStudent().name);                // Alice
console.log(gradeTracker.getStrugglingStudents().map((student) => student.name)); // [ 'Charlie' ]
console.log(gradeTracker.generateReportCard("Alice"));
