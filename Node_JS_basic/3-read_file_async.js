const fs = require('fs');

async function countStudents(path) {
  try {
    // Lecture asynchrone du fichier CSV
    const data = await fs.promises.readFile(path, 'utf-8');

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

    // Étape à ajouter → Préparer un tableau pour construire la réponse finale
    // const outputLines = [];
    // Ajouter au tableau la première ligne : "Number of students: ..."
    const outputLines = [];
    outputLines.push(`Number of students: ${students.length}`);

    // Compter par spécialité
    const fields = {};
    students.forEach((student) => {
      if (!fields[student.field]) fields[student.field] = [];
      fields[student.field].push(student.firstname);
    });

    // Affichage par spécialité
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        outputLines.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
    return outputLines.join('\n');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
