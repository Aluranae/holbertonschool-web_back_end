const fs = require('fs');

function countStudents(path) {
  try {
    // Lecture du fichier CSV en UTF-8
    const data = fs.readFileSync(path, 'utf-8');

    // Séparation des lignes et suppression des vides
    const lines = data.trim().split('\n');

    // Extraction des en-têtes et des données
    lines.shift(); // remove header line
    const students = lines.map((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      return {
        firstname, lastname, age, field,
      };
    });

    console.log(`Number of students: ${students.length}`);

    // Compter par spécialité
    const fields = {};
    students.forEach((student) => {
      if (!fields[student.field]) fields[student.field] = [];
      fields[student.field].push(student.firstname);
    });

    // Affichage par spécialité
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
