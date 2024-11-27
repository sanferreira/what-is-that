function displayArray(id, arr) {
  const element = document.getElementById(id);
  if (element) {
    // Verifica se o elemento existe antes de tentar atualizar
    element.innerText = JSON.stringify(arr);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  
  function displayArray(id, originalArr, modifiedArr, action) {
    const element = document.getElementById(id);
    if (element) {
      let output = `${action || "Sem ação específica"}\n`; // "Sem ação específica" para evitar erros em funções que não têm ação
      output += `Array Original: ${JSON.stringify(originalArr)}\n`;
      output += `Array Resultado: ${JSON.stringify(modifiedArr)}`;
      element.innerText = output;
    }
  }
  // concat
  document.getElementById("concatBtn").addEventListener("click", () => {
    const arr1 = ["maçã", "banana"];
    const arr2 = ["laranja", "uva"];
    const originalArr = [...arr1];
    const concatenatedArr = arr1.concat(arr2);
    displayArray("concatResult", originalArr, concatenatedArr, "Concatenação");
  });

  // Push
  document.getElementById("pushBtn").addEventListener("click", () => {
    let frutas = ["maçã", "banana"];
    const originalFrutas = [...frutas];
    const valor = document.getElementById("pushInput").value;
    frutas.push(valor);
    displayArray("pushResult", originalFrutas, frutas, `Adicionado: ${valor}`);
  });

  // Pop
  document.getElementById("popBtn").addEventListener("click", () => {
    let frutas = ["maçã", "banana", "laranja"];
    const originalFrutas = [...frutas];
    const removed = frutas.pop();
    displayArray("popResult", originalFrutas, frutas, `Removido: ${removed}`);
  });

  // Shift
  document.getElementById("shiftBtn").addEventListener("click", () => {
    let frutas = ["maçã", "banana", "laranja"];
    const originalFrutas = [...frutas];
    const removed = frutas.shift();
    displayArray("shiftResult", originalFrutas, frutas, `Removido: ${removed}`);
  });

  // Unshift
  document.getElementById("unshiftBtn").addEventListener("click", () => {
    let frutas = ["banana", "laranja"];
    const originalFrutas = [...frutas];
    const valor = document.getElementById("unshiftInput").value;
    frutas.unshift(valor);
    displayArray(
      "unshiftResult",
      originalFrutas,
      frutas,
      `Adicionado: ${valor}`
    );
  });

  // Splice
  document.getElementById("spliceBtnAdd").addEventListener("click", () => {
    //Novo ID para o botão de adição
    let frutas = ["maçã", "banana", "laranja"];
    const originalFrutas = [...frutas];
    const indexToAdd = parseInt(
      document.getElementById("spliceIndexAdd").value
    ); // Pega o índice para adicionar
    const valueToAdd = document.getElementById("spliceValueAdd").value; // Pega o valor para adicionar

    if (!isNaN(indexToAdd) && indexToAdd >= 0 && indexToAdd <= frutas.length) {
      frutas.splice(indexToAdd, 0, valueToAdd); // adiciona sem remover
      displayArray(
        "spliceResultAdd",
        originalFrutas,
        frutas,
        `Adicionado: "${valueToAdd}" no índice ${indexToAdd}`
      ); //Novo ID para a div de resultado
    } else {
      alert("Índice inválido para adição!");
    }
  });
  document.getElementById("spliceBtnRemove").addEventListener("click", () => {
    // Novo ID para o botão de remoção
    let frutas = ["maçã", "banana", "laranja"];
    const originalFrutas = [...frutas];
    const indexToRemove = parseInt(
      document.getElementById("spliceIndexRemove").value
    ); // Pega o índice para remover

    if (
      !isNaN(indexToRemove) &&
      indexToRemove >= 0 &&
      indexToRemove < frutas.length
    ) {
      const removedItem = frutas.splice(indexToRemove, 1)[0]; // remove 1 elemento, pega o item removido
      displayArray(
        "spliceResultRemove",
        originalFrutas,
        frutas,
        `Removido: "${removedItem}" do índice ${indexToRemove}`
      ); //Novo ID para a div de resultado
    } else {
      alert("Índice inválido para remoção!");
    }
  });

  // Slice
  document.getElementById("sliceBtn").addEventListener("click", () => {
    const frutas = ["maçã", "banana", "laranja", "uva"];
    const originalFrutas = [...frutas];
    const inicio = parseInt(document.getElementById("sliceInicio").value);
    const fim = parseInt(document.getElementById("sliceFim").value);
    const slicedArr = frutas.slice(inicio, fim);
    displayArray(
      "sliceResult",
      originalFrutas,
      slicedArr,
      `Fatiado de ${inicio} a ${fim}`
    );
  });

  // Sort
  document.getElementById("sortBtn").addEventListener("click", () => {
    let frutas = ["banana", "maçã", "laranja"];
    const originalFrutas = [...frutas];
    frutas.sort();
    displayArray("sortResult", originalFrutas, frutas, "Ordenado");
  });

  // Reverse
  document.getElementById("reverseBtn").addEventListener("click", () => {
    let frutas = ["maçã", "banana", "laranja"];
    const originalFrutas = [...frutas];
    frutas.reverse();
    displayArray("reverseResult", originalFrutas, frutas, "Invertido");
  });

  // forEach (não altera o array)
  document.getElementById("forEachBtn").addEventListener("click", () => {
    const frutas = ["maçã", "banana", "laranja"];
    const originalFrutas = [...frutas];
    let resultado = "";
    frutas.forEach((fruta) => (resultado += fruta + " "));
    displayArray(
      "forEachResult",
      originalFrutas,
      frutas,
      `Resultado forEach: ${resultado.trim()}`
    );
  });

  // Map (cria novo array)
  document.getElementById("mapBtn").addEventListener("click", () => {
    const numeros = [1, 2, 3];
    const originalNumeros = [...numeros];
    const quadrados = numeros.map((num) => num * num);
    displayArray("mapResult", originalNumeros, quadrados, "Mapeado");
  });

  // Filter (cria novo array)
  document.getElementById("filterBtn").addEventListener("click", () => {
    const numeros = [1, 2, 3, 4];
    const originalNumeros = [...numeros];
    const pares = numeros.filter((num) => num % 2 === 0);
    displayArray("filterResult", originalNumeros, pares, "Filtrado");
  });

  // Reduce (retorna um único valor)
  document.getElementById("reduceBtn").addEventListener("click", () => {
    const numeros = [1, 2, 3];
    const originalNumeros = [...numeros];
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    displayArray("reduceResult", originalNumeros, [soma], "Reduzido");
  });

  // Manipulação do Array (Seção dedicada)
  let frutasManipulacao = ["maçã", "banana"];
  displayArray("arrayDisplay", frutasManipulacao);

  document.getElementById("appendBtn").addEventListener("click", () => {
    const valor = document.getElementById("appendInput").value;
    const originalFrutas = [...frutasManipulacao];
    frutasManipulacao.push(valor);
    displayArray(
      "arrayDisplay",
      originalFrutas,
      frutasManipulacao,
      `Adicionado: ${valor}`
    );
  });

  document.getElementById("popBtnArray").addEventListener("click", () => {
    // ID modificado
    const originalFrutas = [...frutasManipulacao];
    if (frutasManipulacao.length > 0) {
      const valor = frutasManipulacao.pop();
      displayArray(
        "arrayDisplay",
        originalFrutas,
        frutasManipulacao,
        `Removido: ${valor}`
      );
    } else {
      alert("O array está vazio!");
    }
  });

  document.getElementById("removeBtn").addEventListener("click", () => {
    const valor = document.getElementById("removeInput").value;
    const originalFrutas = [...frutasManipulacao];
    const index = frutasManipulacao.indexOf(valor);
    if (index > -1) {
      frutasManipulacao.splice(index, 1);
      displayArray(
        "arrayDisplay",
        originalFrutas,
        frutasManipulacao,
        `Removido: ${valor}`
      );
    } else {
      alert("Valor não encontrado no array.");
    }
  });

  document.getElementById("insertBtn").addEventListener("click", () => {
    const valor = document.getElementById("insertValueInput").value;
    const index = parseInt(document.getElementById("insertIndexInput").value);
    const originalFrutas = [...frutasManipulacao];
    if (!isNaN(index) && index >= 0 && index <= frutasManipulacao.length) {
      frutasManipulacao.splice(index, 0, valor);
      displayArray(
        "arrayDisplay",
        originalFrutas,
        frutasManipulacao,
        `Adicionado: ${valor}`
      );
    } else {
      alert("Índice inválido.");
    }
  });

  document.getElementById("sortBtnArray").addEventListener("click", () => {
    const originalFrutas = [...frutasManipulacao];
    frutasManipulacao.sort();
    displayArray("arrayDisplay", originalFrutas, frutasManipulacao, `Ordenado`);
  });

  document.getElementById("reverseBtnArray").addEventListener("click", () => {
    // ID modificado
    const originalFrutas = [...frutasManipulacao];
    frutasManipulacao.reverse();
    displayArray("arrayDisplay", originalFrutas, frutasManipulacao, `Reverso`);
  });

  document.getElementById("clearBtn").addEventListener("click", () => {
    frutasManipulacao.length = 0;
    displayArray("arrayDisplay", frutasManipulacao);
  });
});
