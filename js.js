const apiKey = '47922005-3a6d87387dc4eb060e46a366a'; 
const imageContainer = document.getElementById('image-container');
const loadMoreButton = document.getElementById('load-more');
let page = 1;

async function fetchImages(page) {
    const url = `https://pixabay.com/api/?key=${apiKey}&editors_choice=true&per_page=10&page=${page}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.hits;
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

function displayImages(images) {
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.webformatURL;
        imageContainer.appendChild(imgElement);
    });
}

async function loadImages() {
    const images = await fetchImages(page);
    displayImages(images);
    page++;
}

loadMoreButton.addEventListener('click', loadImages);

// Завантажити першу сторінку зображень при завантаженні сторінки
loadImages();
