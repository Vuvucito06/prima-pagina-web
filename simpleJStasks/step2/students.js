import { calculateAverage } from "./utils.js";

export const students = [
  { id: 1, name: "Ana", grade: 9 },
  { id: 2, name: "Ion", grade: 7 },
  { id: 3, name: "Maria", grade: 10 },
  { id: 4, name: "Andrei", grade: 5 },
  { id: 5, name: "Elena", grade: 8 },
];

// Afișarea tuturor elevilor.
export function printStudents(list = students) {
  list.forEach((student) => {
    console.log(`#${student.id} ${student.name} - nota ${student.grade}`);
  });
}

// Elevii cu nota >= 8.
export function getTopStudents(list = students) {
  return list.filter((student) => student.grade >= 8);
}

// Media clasei.
export function getClassAverage(list = students) {
  return calculateAverage(list.map((student) => student.grade));
}

// Căutarea unui elev după id; aruncă eroare dacă nu există.
export function findStudentById(id, list = students) {
  const student = list.find((student) => student.id === id);
  if (!student) {
    throw new Error(`Elevul cu id ${id} nu există`);
  }
  return student;
}

// Adăugarea unui elev nou (id-ul se generează automat).
export function addStudent(name, grade, list = students) {
  const nextId = list.length ? Math.max(...list.map((s) => s.id)) + 1 : 1;
  const student = { id: nextId, name, grade };
  list.push(student);
  return student;
}
