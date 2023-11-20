function runCode() {
  try {
    const code = document.getElementById("code-editor").value;
    const result = eval(code);
    document.getElementById("output").innerHTML = result;
  } catch (error) {
    document.getElementById(
      "output"
    ).innerHTML = `<span style="color: red;">Erro: ${error}</span>`;

  }
  }
  function clearOutput() {
    document.getElementById('output').innerHTML = '';
  
  }

