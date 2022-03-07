import { registerImage } from "./lazy";

let imageAddedCount = 0;

const createImageNode = () => {

    const random = Math.floor(Math.random() * 122) + 1;

    const container = document.createElement('div')
    container.className = 'p-4';

    const image = document.createElement('img');
    image.className = "mx-auto";
    image.width = '320'
    image.dataset.src = `https://randomfox.ca/images/${random}.jpg`;

    container.appendChild(image);

    return container;
};

const addImageNode = () => {
    const newImage = createImageNode();
    const mountNode = document.querySelector('#images')
    mountNode.appendChild(newImage);
    imageAddedCount++;
    console.log(`⚪Ganerated Images: ${imageAddedCount}`);
    registerImage(newImage);
}


const generateButton = document.querySelector('#generate');

generateButton.addEventListener('click', addImageNode);




