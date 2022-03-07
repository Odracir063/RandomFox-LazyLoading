
const isIntersecting = (entry) => {
    return entry.isIntersecting // true (dentro de la pantalla)
}

let imageLoadedCount = 0;

const loadImage = (entry) => {
    
    const container = entry.target;//container (DIV)
    const image = container.firstChild;
    const url = image.dataset.src;
    //cargue la imagen 
    image.src = url;
    imageLoadedCount++;
    console.log(`🟣Loaded Images: ${imageLoadedCount}`);

    //desregistra la imagen (unlisten)
    observer.unobserve(container);
}

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach (loadImage);
})

// 

export const registerImage = (image) => {
    //IntersectionObserver -> observer(image)
    observer.observe(image);
}