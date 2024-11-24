
function Drag () {
    const elementDrag = document.querySelectorAll(".Arrastavel");
    elementDrag.forEach((element) => {
        element.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text', event.target.id);
        });
    });

}
    
function Drop (){

    const colunas = document.querySelectorAll('.Receptor');
    
    colunas.forEach((coluna) => {
        coluna.addEventListener('dragover', (event) => {
            event.preventDefault();
        })
    })
    
    
    colunas.forEach((coluna) => {
        coluna.addEventListener('drop', (event) => {
            event.preventDefault();
            let data = event.dataTransfer.getData('text');
            let elementoFilho = document.getElementById(data);
            event.target.appendChild(elementoFilho);
        })
    })
}


Drag();
Drop();