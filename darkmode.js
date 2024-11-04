
alternarModo.addEventListener('click', () => {
    if(alternarModo.style.justifyContent === 'flex-end'){

        const cabecalho = document.querySelector('.Cabecalho');
        const containerOfColumns = document.querySelector('.Container');
        const receptor = document.querySelectorAll('.Receptor');
        const corpo = document.querySelector('body');
        const newColumn = document.querySelector('.CreateNewColumn');
        const all = document.querySelector('*');
        const arrastavel = document.querySelectorAll('.Arrastavel');
        const treePoints = document.querySelectorAll('.Menu3Pontos');
        const menuHamb = document.querySelectorAll('.MenuHamburguer');

        alternarModo.style.justifyContent = 'flex-start';
        cabecalho.style.backgroundColor = 'rgb(200, 200, 200)';
        containerOfColumns.style.backgroundColor = 'rgb(200, 200, 200)';
        corpo.style.backgroundColor = 'rgb(255, 255, 255)';
        newColumn.style.backgroundColor = 'rgb(255, 255, 255)';
        newColumn.style.border = 'solid 1px black';
        all.style.color = 'black';
        

        receptor.forEach(recept => {
            recept.style.backgroundColor = 'rgb(233, 233, 233)';
        })

        arrastavel.forEach(element => {
            element.style.color = 'black'
        })

        treePoints.forEach(element => {
            element.setAttribute('src', './assets/tres-pontos.png')
        })

        menuHamb.forEach(element => {
            element.setAttribute('src', './assets/cardapio.png')
        })
    }
    else {

        const cabecalho = document.querySelector('.Cabecalho');
        const containerOfColumns = document.querySelector('.Container');
        const receptor = document.querySelectorAll('.Receptor');
        const corpo = document.querySelector('body');
        const newColumn = document.querySelector('.CreateNewColumn');
        const all = document.querySelector('*');
        const arrastavel = document.querySelectorAll('.Arrastavel');
        const treePoints = document.querySelectorAll('.Menu3Pontos');
        const menuHamb = document.querySelectorAll('.MenuHamburguer');

        alternarModo.style.justifyContent = 'flex-end';
        cabecalho.style.backgroundColor = 'rgb(44, 46, 48)';
        containerOfColumns.style.backgroundColor = 'rgb(44, 46, 48)';
        corpo.style.backgroundColor = 'rgb(24, 26, 28)'
        newColumn.style.backgroundColor = 'rgb(105, 105, 105)';
        newColumn.style.border = 'solid 1px white';
        all.style.color = 'white';
        
        receptor.forEach(recept => {
            recept.style.backgroundColor = 'rgb(105, 105, 105)';
        })

        arrastavel.forEach(element => {
            element.style.color = 'black'
        })

        treePoints.forEach(element => {
            element.setAttribute('src', './assets/tres_pontos_white.png')
        })

        menuHamb.forEach(element => {
            element.setAttribute('src', './assets/cardapio_white.png')
        })
    }
    
})