var list = document.createElement('ul');
var info = document.createElement('p');
var html = document.querySelector('html');

info.textContent = 'Abaixo está uma lista dinâmica. Clique em qualquer lugar fora da lista para adicionar um novo item da lista. Clique em um item da lista existente para alterar seu texto para outra coisa.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  var listItem = document.createElement('li');
  var listContent = prompt('Qual conteúdo você deseja que o item da lista tenha?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    var listContent = prompt('Digite novo conteúdo para o item da sua lista');
    this.textContent = listContent;
  }
}
