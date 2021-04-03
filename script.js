let phrases = [
  { text: 'работай', image: 'https://srv232-h-st.jino.ru/download?cid=1c6c8cea39924f67a869e22da61f8338&path=%2Fdomains%2Fvipart35.ru%2Fimage%2Fslide2.jpg' },
  { text: 'работай', image: 'https://srv232-h-st.jino.ru/download?cid=1c6c8cea39924f67a869e22da61f8338&path=%2Fdomains%2Fvipart35.ru%2Fimage%2Fslide2.jpg' },
  { text: 'работай', image: 'https://srv232-h-st.jino.ru/download?cid=1c6c8cea39924f67a869e22da61f8338&path=%2Fdomains%2Fvipart35.ru%2Fimage%2Fslide2.jpg' },
  { text: 'работай', image: 'https://srv232-h-st.jino.ru/download?cid=1c6c8cea39924f67a869e22da61f8338&path=%2Fdomains%2Fvipart35.ru%2Fimage%2Fslide2.jpg' },
  { text: 'работай', image: 'https://srv232-h-st.jino.ru/download?cid=1c6c8cea39924f67a869e22da61f8338&path=%2Fdomains%2Fvipart35.ru%2Fimage%2Fslide2.jpg' },
  { text: 'работай', image: 'https://srv232-h-st.jino.ru/download?cid=1c6c8cea39924f67a869e22da61f8338&path=%2Fdomains%2Fvipart35.ru%2Fimage%2Fslide2.jpg' },
  { text: 'работай', image: 'https://srv232-h-st.jino.ru/download?cid=1c6c8cea39924f67a869e22da61f8338&path=%2Fdomains%2Fvipart35.ru%2Fimage%2Fslide2.jpg' },
  { text: 'работай', image: 'https://srv232-h-st.jino.ru/download?cid=1c6c8cea39924f67a869e22da61f8338&path=%2Fdomains%2Fvipart35.ru%2Fimage%2Fslide2.jpg' },
  { text: 'работай', image: 'https://srv232-h-st.jino.ru/download?cid=1c6c8cea39924f67a869e22da61f8338&path=%2Fdomains%2Fvipart35.ru%2Fimage%2Fslide2.jpg' },
  { text: 'результат не заставит себя ждать', image: 'https://srv232-h-st.jino.ru/download?cid=1c6c8cea39924f67a869e22da61f8338&path=%2Fdomains%2Fvipart35.ru%2Fimage%2Fslide2.jpg' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text);
  smoothly(image, 'src', randomElement.image);

  
});
for (let i = 0; i <= 9; i = i + 1) {
  smoothly(phrase, 'textContent', phrases[i].text);
  smoothly(image, 'src', phrases[i].image);
}