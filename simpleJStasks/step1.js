#!/usr/bin/env node
const grades = [7, 9, 5, 10, 8, 6];

// toate notele mai mari sau egale cu 8
const passingGrades = grades.filter((grade) => grade >= 8);

// media notelor
const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

// fiecare notă mărită cu 1 punct, fără a depăși 10
const boostedGrades = grades.map((grade) => Math.min(grade + 1, 10));

console.log("Note initiale:", grades);
console.log("Note >= 8:", passingGrades);
console.log("Media notelor:", average.toFixed(2));
console.log("Note marite cu 1 (max 10):", boostedGrades);
