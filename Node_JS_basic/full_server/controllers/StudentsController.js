// full_server/controllers/StudentsController.js
import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const dbPath = process.argv[2];
      const groups = await readDatabase(dbPath);

      // Construction d'une réponse multi-lignes
      let out = 'This is the list of our students';
      const fields = Object.keys(groups).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

      for (const field of fields) {
        const list = groups[field] || [];
        out += `\nNumber of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
      }
      return res.status(200).send(out);
    } catch (err) {
      return res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const { major } = req.params;
      if (!['CS', 'SWE'].includes(major)) {
        return res.status(500).send('Major parameter must be CS or SWE');
      }
      const dbPath = process.argv[2];
      const groups = await readDatabase(dbPath);
      const list = groups[major] || [];
      return res.status(200).send(`List: ${list.join(', ')}`);
    } catch (err) {
      return res.status(500).send('Cannot load the database');
    }
  }
}
