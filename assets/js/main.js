// Funções de criptografia e descriptografia
function encrypt(text) {
  const encryptedText = text.toLowerCase()
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
  return encryptedText;
}

function decrypt(text) {
  const decryptedText = text.toLowerCase()
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
  return decryptedText;
}

window.onload = function () {
  // Obtém os elementos textarea
  const inputTextarea = document.getElementById('decrypted-text');
  const outputTextarea = document.getElementById('encrypted-text');

  // Adiciona o event listener para o evento keyup nos elementos textarea
  inputTextarea.addEventListener('input', handleInput);
  outputTextarea.addEventListener('input', handleOutput);

  // Adiciona o event listener para o evento keydown nos elementos textarea
  inputTextarea.addEventListener('keydown', handleKeyDown);
  outputTextarea.addEventListener('keydown', handleKeyDown);

  // Funções para atualizar automaticamente os textareas
  function handleInput() {
    const decryptedText = inputTextarea.value;
    const encryptedText = encrypt(decryptedText);
    outputTextarea.value = encryptedText;
  }

  function handleOutput() {
    const encryptedText = outputTextarea.value;
    const decryptedText = decrypt(encryptedText);
    inputTextarea.value = decryptedText;
  }

  // Função para tratar o evento keydown e validar a entrada de texto
  function handleKeyDown(event) {
    const key = event.key;
    const isLetter = /^[a-zA-Z]+$/.test(key);
    const isArrowKey = /^Arrow/.test(key);
    const isCopyPaste = (event.ctrlKey || event.metaKey) && (key === 'c' || key === 'v');

    if (!isLetter && !isArrowKey && !isCopyPaste) {
      event.preventDefault();
      alert('O sistema aceita apenas letras sem acento. Favor digitar novamente sua entrada.');
    }
  }
}
