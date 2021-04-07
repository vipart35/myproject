let phrases = [
  { text: ' текст 1 ', image: 'https://sun9-12.userapi.com/impg/MFh0DSiYeC3NNBlQnT7Prwtko-f6CwFnagFblg/vq0lOrTCi_I.jpg?size=1024x768&quality=96&sign=224e911a70170f69c153e674ed64d3a9&type=album' },
  { text: ' текст 2 ', image: 'https://sun9-21.userapi.com/impg/-ZJrR9Tgrne70nQ3y2KQ2eQtdvpgZTeYWQAu3Q/by9qy1eDC8Y.jpg?size=1024x768&quality=96&sign=f53f5d95136b2af50f9ab2d58776707b&type=album' },
  { text: ' текст 3 ', image: 'https://sun9-61.userapi.com/impg/hfsbcSGaKM6UfFXQgrKf7pV4d-_jKKi-O4H35g/1yjiR20dF64.jpg?size=1024x768&quality=96&sign=f43316ecf8fd405fd7615241b14e7421&type=album' },
  { text: ' текст 4 ', image: 'https://sun9-69.userapi.com/impg/azqJlCH0EAG6jGK4YSB7V0ukStuR2zX_QZC0yw/XyPhvOUgEWs.jpg?size=1024x768&quality=96&sign=47cb753551e0de18d0832e23be453ae4&type=album' },
  { text: ' текст 5 ', image: 'https://sun9-29.userapi.com/impg/0CNAdEQ2jUsOfTc99Jk3znWcIKImEuJvOpZTAA/C0QxahrmiTw.jpg?size=1024x768&quality=96&sign=97b140fce807260d73a308aa6eddf8a0&type=album' },
  { text: ' текст 6 ', image: 'https://sun9-7.userapi.com/impg/fh_8hmRzhhHwYQQ9M--GuslrYZf3jSBaWO3rLQ/ozQztHO-bGs.jpg?size=1024x768&quality=96&sign=37f1057d0d9b82a03ae460610d4bdc93&type=album' },
  { text: ' текст 7 ', image: 'https://sun9-74.userapi.com/impg/kkqP-4nyg_V_mp4KdVin7n2q_kzB0HvoJw1w0g/VBRnXdgve1Y.jpg?size=1024x768&quality=96&sign=da36dade7dca8a76096d1e042eab045d&type=album' },
  { text: ' текст 8 ', image: 'https://sun9-12.userapi.com/impg/MFh0DSiYeC3NNBlQnT7Prwtko-f6CwFnagFblg/vq0lOrTCi_I.jpg?size=1024x768&quality=96&sign=224e911a70170f69c153e674ed64d3a9&type=album' },
  { text: ' текст 9 ', image: 'https://sun9-12.userapi.com/impg/MFh0DSiYeC3NNBlQnT7Prwtko-f6CwFnagFblg/vq0lOrTCi_I.jpg?size=1024x768&quality=96&sign=224e911a70170f69c153e674ed64d3a9&type=album' },
  { text: '  закажите обратный звонок', image: 'https://sun9-69.userapi.com/impg/azqJlCH0EAG6jGK4YSB7V0ukStuR2zX_QZC0yw/XyPhvOUgEWs.jpg?size=1024x768&quality=96&sign=47cb753551e0de18d0832e23be453ae4&type=album' }
];
function getRandomElement(arr) {
  for (let randIndex = 0; randIndex < phrases.length ; randIndex = randIndex + 1 )
{
  smoothly(phrase, 'textContent', phrases[randIndex].text);
  smoothly(image, 'src', phrases[randIndex].image);  
  
}
}
let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  

  
});
for (let i = 0; i <= 9; i = i + 1) {
  smoothly(phrase, 'textContent', phrases[i].text);
  smoothly(image, 'src', phrases[i].image);
}