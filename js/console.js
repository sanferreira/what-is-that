document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('consoleInput');
    const output = document.getElementById('consoleOutput');
    let meuArray = ["A", "B", "C", "D"];
    const arrayDisplay = document.getElementById('arrayDisplay');
  
    function updateDisplay() {
      arrayDisplay.innerHTML = `<code>let meuArray = ${JSON.stringify(meuArray)};</code>`;
    }
  
    const runButton = document.getElementById('runCode');
    runButton.addEventListener('click', () => {
      const code = input.value.trim(); 
      if (code === "") return; 
  
      try {
        const regex = /meuArray\.(\w+)\((.*)\)/;
        const match = code.match(regex);
  
        if (match) {
          const method = match[1];
          const args = match[2].split(',').map(arg => arg.trim().replace(/"/g, "")); 
          let result;
          const methods = {
            push: (...args) => { meuArray.push(...args); return meuArray },
            pop: () => { const popped = meuArray.pop(); return { array: meuArray, popped: popped } },
            shift: () => { const shifted = meuArray.shift(); return { array: meuArray, shifted: shifted } },
            unshift: (...args) => { meuArray.unshift(...args); return meuArray },
            reverse: () => { meuArray.reverse(); return meuArray },
            sort: () => { meuArray.sort(); return meuArray },
          
          }
          if (methods[method]) {
            result = methods[method](...args);
            output.textContent = `Resultado:\n${JSON.stringify(result, null, 2)}`;
          } else {
            output.textContent = "Método não suportado.";
          }
        } else {
            output.textContent = "Formato inválido. Use meuArray.metodo(argumentos)";
        }
        updateDisplay();
        input.value = '';
      } catch (error) {
        output.textContent = `Erro: ${error.message}`;
      }
    });
    updateDisplay();
  });