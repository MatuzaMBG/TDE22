function adicionar() {
    const tarefa = document.getElementById('tarefa').value;
    const li = document.createElement('li');
    li.textContent = tarefa;
  
    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.type = 'button';
    btnRemover.style.marginLeft = '20px';
    btnRemover.addEventListener('click', function () {
      li.remove();
    });
  
    const btnConcluidas = document.createElement('button');
    btnConcluidas.textContent = 'Concluídas';
    btnConcluidas.type = 'button';
    btnConcluidas.style.marginLeft = '20px';
    btnConcluidas.addEventListener('click', function () {
      li.classList.add('concluida');
      const concluidas = document.getElementById('concluidas');
      concluidas.appendChild(li);
    });
  
    const buttonGroup = document.createElement('span');
    buttonGroup.appendChild(btnRemover);
    buttonGroup.appendChild(btnConcluidas);
  
    li.appendChild(buttonGroup);
  
    const pendentes = document.getElementById('pendentes');
    pendentes.appendChild(li);
  
    document.getElementById('tarefa').value = '';
    document.getElementById('tarefa').focus();
}
  
