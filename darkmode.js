let modoEscuro = false;
const alternarModo = document.querySelector('.CircleContainer');

alternarModo.addEventListener('click', () => {
    if(!modoEscuro){

        const modoDeCores = document.querySelector('.Mode');
        modoDeCores.setAttribute('href', './dark_mode.css');
        modoEscuro = true;
        alternarModo.style.justifyContent = 'flex-end';

        document.querySelectorAll('.Menu3Pontos').forEach(element => {
            element.setAttribute('src', './assets/tres_pontos_white.png')
        })
        document.querySelectorAll('.MenuHamburguer').forEach(element => {
            element.setAttribute('src', './assets/cardapio_white.png')
        })

    }

    else {

        const modoDeCores = document.querySelector('.Mode');
        modoDeCores.setAttribute('href', './light_mode.css');
        modoEscuro = false;
        alternarModo.style.justifyContent = 'flex-start';

        document.querySelectorAll('.Menu3Pontos').forEach(element => {
            element.setAttribute('src', './assets/tres-pontos.png')
        })
        document.querySelectorAll('.MenuHamburguer').forEach(element => {
            element.setAttribute('src', './assets/cardapio.png')
        })
        
}})