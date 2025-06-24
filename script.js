const conteinerLista = document.querySelector(".containerTarefas");
const escreverTarefa = document.querySelector(".escreverTarefa");
const botaoTarefa = document.querySelector(".botaoTarefa");

function addTarefa(){
    li = document.createElement("li");
    li.classList.add("li")
    conteinerLista.append(li);
    
    const label = document.createElement("label");
    label.classList.add("containerCheckbox");
    li.append(label);
    
    input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", "nomearTarefa");
    input.classList.add("tarefaConcluida")
    label.append(input);
    
    span = document.createElement("span");
    span.classList.add("checkboxCustomizar", "invisivel");
    label.append(span);

    const escreverTarefa = document.querySelector(".escreverTarefa")
    const value = escreverTarefa.value;
    div = document.createElement("div");
    li.append(div);
    event.preventDefault();
    div.textContent = value
    escreverTarefa.value = "";
    
    button = document.createElement("button")
    button.setAttribute("type", "button");
    button.classList.add("apagarTarefa", "invisivel");
    li.append(button);

    const icon = document.createElement("i");
    icon.classList.add("fi", "fi-br-cross");
    button.append(icon);

    return { li, input, div, span, button };
};

botaoTarefa.addEventListener('click', function (event){
   event.preventDefault();

    const { li, input, div, span, button } = addTarefa();

    li.addEventListener('mouseover', () => {
        span.classList.remove("invisivel");
    });

    li.addEventListener('mouseout', () => {
        span.classList.add("invisivel");
    });

    input.addEventListener('click', () => {
        if (input.checked) {
            div.classList.add("rasurar");
            button.classList.remove("invisivel");
        } else {
            div.classList.remove("rasurar");
            button.classList.add("invisivel");
        }
    }); 

    button.addEventListener('click', () => {
        li.remove()
    });
});




