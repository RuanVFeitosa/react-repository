const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const telefone = document.querySelector("#telefone");

const btn = document.querySelector("button");

const lista = document.querySelector(".lista");

btn.addEventListener ("click",  (e) => {
    e.preventDefault();

    const inputNameValue = nome.value;
    const inputAgeValue = idade.value;
    const inputPhoneValue = telefone.value;

    const templateHTML = `
    <li> 
        Nome: ${inputNameValue}
        <br>

        Idade: ${inputAgeValue}
        <br>

        Telefone: ${inputPhoneValue}
        <button class="del"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAlUlEQVR4nO2W0QmFMAxFz5dLPYdwKXm7uIKN01jXqAREUPShbX2g5sL9aEuTQ9KWgskUIQeVg0EgrOx1jasl4DeSzxD/AAjqo/PJiSST7weQo6zJbREDYFnC1HFyC8QAsBZghzDYNZRXP0Rn9QgArwE6+Jzd20I5AfTRAA6+GX5DdTRAA8UE8esnvOdek2uMaADT4zUChA2KuOUUev0AAAAASUVORK5CYII="></button>
        
        <hr>
        
        </li>

        
        `;

    /* Condição */
    if (inputNameValue === "" || inputAgeValue === "" || inputPhoneValue === "") {
        alert("Insira todas as informações para o cadastro");
        return false;
    }

    /* Incluindo itens no HTML*/
    lista.innerHTML += templateHTML;
    
    const deleteButton = document.querySelectorAll(".del");
    deleteButton.forEach((button) => {

    button.addEventListener("click", (e) => {
     e.target.parentElement.remove();
    });
});
    /*Limpando o campo*/
    nome.value = "";
    idade.value = "";
    telefone.value = "";

});

document.addEventListener('DOMContentLoaded', function() {
    const inputTelefone = document.getElementById('telefone');
    
    inputTelefone.addEventListener('input', function(e) {
      let valor = e.target.value;
      
      // Remove todos os caracteres não numéricos
      valor = valor.replace(/\D/g, '');
      
      // Formata o número de telefone
      if (valor.length > 6) {
        valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
      } else if (valor.length > 2) {
        valor = valor.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
      } else {
        valor = valor.replace(/^(\d*)$/, '($1');
      }
      
      // Atualiza o valor do input com a formatação
      e.target.value = valor;
    });
  });
  




