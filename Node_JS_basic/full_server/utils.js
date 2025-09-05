// full_server/utils.js
import { promises as fs } from 'fs';

export default async function readDatabase(path) {
  // Lecture du fichier en UTF-8 (Promise)
  const content = await fs.readFile(path, 'utf-8');

  // Découper, normaliser, filtrer les lignes vides
  const lines = content
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  // Retirer l'en-tête: firstname,lastname,age,field
  if (lines.length === 0) {
    // Pas de données: retourner objet vide
    return {};
  }
  lines.shift();

  // Construire l'objet { field: [firstnames...] }
  const byField = {};
  for (const line of lines) {
    const parts = line.split(',');
    if (parts.length < 4) {
      // Ligne mal formée: on l'ignore
    } else {
      const firstname = parts[0].trim();
      const field = parts[3].trim();
      if (!byField[field]) byField[field] = [];
      byField[field].push(firstname);
    }
  }

  return byField;
}
