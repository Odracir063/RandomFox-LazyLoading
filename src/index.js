/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/


const createImageNode = () => {

    const random = Math.floor(Math.random() * 123) ;

    const container = document.createElement('div')
    container.className = 'p-4';

    const image = document.createElement('img');
    image.className = "mx-auto";
    image.width = '320'
    image.src = `https://randomfox.ca/images/${random}.jpg`;

    container.appendChild(image);

    return container;
};

const addImageNode = () => {
    const newImage = createImageNode();
    const mountNode = document.querySelector('#images')
    mountNode.appendChild(newImage);
}


const generateButton = document.querySelector('#generate');

generateButton.addEventListener('click', addImageNode);




