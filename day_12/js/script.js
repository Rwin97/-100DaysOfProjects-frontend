window.addEventListener('DOMContentLoaded', (event) => {
    const background = document.querySelector('.container');
    
    // Crear imágenes
    const imgLeft = document.createElement('img');
    imgLeft.src = './images/bg-pattern-top.svg';
    imgLeft.classList.add('img-left');
    
    const imgRight = document.createElement('img');
    imgRight.src = './images/bg-pattern-top.svg';
    imgRight.classList.add('img-right');
    
    // Añadir imágenes al fondo
    background.appendChild(imgLeft);
    background.appendChild(imgRight);
});
