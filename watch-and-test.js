import { exec } from 'child_process';
import { watch } from 'chokidar';

const watchPath = './src';

// Função para rodar os testes
const runTests = () => {
  exec('npx playwright test --headed', (err, stdout, stderr) => {
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
