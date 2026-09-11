#!/usr/bin/env node
import { calculateAverage, calculateSum } from "./utils.js";
import {
  students,
  printStudents,
  getTopStudents,
  getClassAverage,
  findStudentById,
  addStudent,
} from "./students.js";

// utils.js aplicat pe câteva valori
const values = [4, 8, 15, 16, 23, 42];
console.log(`Valori: ${values.join(", ")}`);
console.log(`Suma: ${calculateSum(values)}`);
console.log(`Media: ${calculateAverage(values).toFixed(2)}`);

console.log("\n--- Toți elevii ---");
printStudents();

console.log("\n--- Elevi cu nota >= 8 ---");
printStudents(getTopStudents());

console.log(`\nMedia clasei: ${getClassAverage().toFixed(2)}`);

console.log("\n--- Căutare după id ---");
for (const id of [3, 99]) {
  try {
    const student = findStudentById(id);
    console.log(`Găsit: ${student.name} (nota ${student.grade})`);
  } catch (error) {
    console.log(`Eroare: ${error.message}`);
  }
}

console.log("\n--- Adăugare elev nou ---");
const newStudent = addStudent("Mihai", 6);
console.log(`Adăugat: #${newStudent.id} ${newStudent.name} - nota ${newStudent.grade}`);
console.log(`Total elevi: ${students.length}`);
console.log(`Media clasei acum: ${getClassAverage().toFixed(2)}`);
