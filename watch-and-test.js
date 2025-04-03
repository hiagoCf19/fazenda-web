import { exec } from 'child_process';
import { watch } from 'chokidar';

// Obtém o nome do teste a partir dos argumentos da linha de comando
const testName = process.argv[2];

if (!testName) {
  console.error('Por favor, informe o nome do teste como argumento.');
  process.exit(1);
}

const watchPath = './src';

// Função para rodar os testes
const runTests = () => {
  exec(`npx playwright test -g "${testName}" --debug`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Erro ao rodar testes: ${stderr}`);
      return;
    }
    console.log(stdout);
  });
};

// Monitorar mudanças na pasta src
watch(watchPath, {
  persistent: true,
  ignored: /node_modules/,
}).on('change', (path) => {
  console.log(`Mudança detectada em: ${path}`);
  runTests();
});
