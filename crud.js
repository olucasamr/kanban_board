
//CREATE COLUMN

const createColumn = document.querySelector(".CreateNewColumn");
const quadro = document.querySelector(".Container");
const submitTitle = document.querySelector('.SubmitTitle');


createColumn.addEventListener('click', () => {
    const blackBackground = document.querySelector('.FundoPreto');
    blackBackground.style.display = 'flex';
})



submitTitle.addEventListener('click', () => {

    const blackBackground = document.querySelector('.FundoPreto');
    const valorTitle = document.querySelector('.TitleDig').value;

    if(!valorTitle){
        alert('O campo não pode estar vazio.')
    }
    else {

        const colunas = document.querySelectorAll('.Receptor');
        let ultimoElementoReceptor = colunas[(colunas.length) - 1];
        let ultimoId = ultimoElementoReceptor.getAttribute('id');
        let numeroDoId = parseInt(ultimoId.split('-')[1]);
        
        const elemento = `<div id="Recept-${numeroDoId + 1}" class="Receptor"><div class="PointsContainer"><h2>${valorTitle}</h2><div class="Menu3Pontos" alt="Menu tres pontos"></div><div id="OptRecept-${numeroDoId + 1}" class="OptReceptor" style="display: none;"><button class="Opt">Editar título</button><button class="Opt">Criar novo card</button><button class="ExcludeReceptor">Excluir quadro</button></div></div></div>`;
        quadro.innerHTML += elemento;
        
        Drag();
        Drop();
        opcoesTresDot();
        apagarRecept();
        blackBackground.style.display = 'none';
        
    }
})


function opcoesTresDot () {
    let menuDeTresPontos = document.querySelectorAll('.Menu3Pontos');
    menuDeTresPontos.forEach(menu => {
        menu.addEventListener("click", () => {
            const nextElement = menu.nextElementSibling;
            const display = nextElement.style.display;
            if(display === "none"){
                nextElement.style.display = "flex";
            }
            else {
                nextElement.style.display = "none";
            }
        })
    })
    console.log("Tudo pronto");
    
}


function apagarRecept () {
    const excludeButtons = document.querySelectorAll(".ExcludeReceptor");
    excludeButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const elementoClicado = event.target.parentNode.parentNode.parentNode;
            const dadElementId = elementoClicado.id;
            const dadElement = document.querySelector(`#${dadElementId}`);

            if (dadElementId === "Recept-1") {
                dadElement.style.display = "none";
            }
            else {
                dadElement.remove();
            }
        })
    })
}

opcoesTresDot();
apagarRecept();