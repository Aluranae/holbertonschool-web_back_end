// Le programme parle à l'utilisateur
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Écoute des réponses envoyées par l'utilisateur (stdin)
process.stdin.on('data', (input) => {
  const userName = input.toString().trim();
  process.stdout.write(`Your name is: ${userName}\n`);
  process.stdin.end();
});

// Lorsque le flux est terminé (Ctrl+D par exemple)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
