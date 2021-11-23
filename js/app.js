/* Step 1 */
const hideJs = document.querySelector('.hideJS');
const hideCssAndJs = document.querySelector('.hideCssAndJs');
const returnBtn = document.querySelectorAll('.return');
const hideCSS = document.querySelector('.hideCSS');

const rectangles = document.querySelectorAll('.black');

hideCSS.addEventListener('click', e => {
  rectangles[0].style.display = 'none';
})

hideJs.addEventListener('click', e => {
  rectangles[0].remove(); 
})

hideCssAndJs.addEventListener('click', e => {
  rectangles[0].classList.add('hidden');
})

for (let i = 0; i < returnBtn.length; i++){
  returnBtn[i].addEventListener('click', e => {
    location.reload();
  })
}


/* Step 2 */
const hideOrReturnOnlyJSBtn = document.querySelector('.hideAndReturnOnlyJS');
const hideOrReturnCssJSBtn = document.querySelector('.hideAndReturnCssJS');

const assignment2 = document.querySelector('#assignment2');

hideOrReturnOnlyJSBtn.addEventListener('click', e => {
  if (document.body.contains(rectangles[1])){    
    assignment2.removeChild(rectangles[1]);   
  } else {
    assignment2.appendChild(rectangles[1]);
  }
})

hideOrReturnCssJSBtn.addEventListener('click', e => {
  if (rectangles[1].classList.contains('black')){
    rectangles[1].classList.remove('black');
  } else {
    rectangles[1].classList.add('black');
  }
})

/* step3 */
const hideOrReturnStep3 = document.querySelector('.hideAndReturn');

hideOrReturnStep3.addEventListener('click', e => {  
  for (let i = 2; i < rectangles.length; i++){
    if (rectangles[i].classList.contains('black')) {
      rectangles[i].classList.remove('black');
    } else {
      rectangles[i].classList.add('black');
    }    
  }
});

/* step 4 */
const inputBtn = document.querySelector('.inputValue');
const input = document.querySelector('.inputStep4');

inputBtn.addEventListener('click', e => {
  let className = input.value;
  if (className[0]!=='.'){
    className = "."+className;
  } 
  let elements = document.querySelectorAll(className.toLowerCase());

  for (let i = 0; i < elements.length; i++){
    if (elements[i].classList.contains('hidden')){
      elements[i].classList.remove('hidden');
    } else {
      elements[i].classList.add('hidden');
    }   
  }
})

/* step 5 */
const yellowRect = document.querySelector('.yellowRectangle');

yellowRect.addEventListener('click', e=>{
  if (!yellowRect.hasChildNodes()){
    let hello = document.createElement('p');
    hello.append("hello");
    hello.style.fontSize = '30px';
    yellowRect.append(hello);
    alert('Hello');
  } else {
    yellowRect.remove();
  }  
})

/* step 6 */
const redRect = document.getElementsByClassName('redRectangle');
const redRectBtn = document.getElementsByClassName('showRect');

redRectBtn[0].addEventListener('mouseover', () => showRect());
redRectBtn[0].addEventListener('mouseleave', () => hideRedRect());

function showRect(){  
  redRect[0].style.opacity = '1';
}

function hideRedRect(){
  redRect[0].style.opacity = '0';
}

/* step 7 */
const greenRect = document.querySelector('.greenRect');
const inputForGreen = document.querySelector('.forGreenRect');

inputForGreen.addEventListener('click', e => {
  greenRect.style.opacity = '1';  
})
inputForGreen.addEventListener('keydown', e => {
  greenRect.style.opacity = '0';
})

/* Step 8 */
const inputForImage = document.querySelector('.inputForImage');
const imageBtn = document.querySelector('.buttonForImage');
const imageField = document.querySelector('.fieldForImage');

imageBtn.addEventListener('click', e => {
  if (!imageField.hasChildNodes()) {
    var image = getImg(inputForImage.value);
    imageField.appendChild(image);
  } else {
    imageField.removeChild(imageField.firstChild);    
    imageField.appendChild(getImg(inputForImage.value));
  }
})

function getImg(inputValue) {
  let img =  document.createElement('img');
  img.setAttribute('src', inputValue);
  img.setAttribute('alt', "404 Not Found")
  img.style.width = '200px';
  img.style.height = '200px';  
  return img;
}

/* Step 9 */
const textArea = document.querySelector('.textArea');
const textAreaBtn = document.querySelector('.textAreaBtn');
const imagesField = document.querySelector('.images');

textAreaBtn.addEventListener('click', e => {
  let linksArray = textArea.value.split("\n");
  
  for (let i = 0; i < linksArray.length; i++) {
    let image = getImg(linksArray[i]);
    let oneFieldForImage = document.createElement('div');
    oneFieldForImage.classList.add('fieldForImage');
    oneFieldForImage.append(image);
    imagesField.appendChild(oneFieldForImage); 
  }
})

/* Step 10 */
const windowPage = document.querySelector('html');
windowPage.addEventListener('mousemove', event => {  
  document.querySelector('.x').innerHTML = "X: " + event.clientX;
  document.querySelector('.y').innerHTML = "Y: " + event.clientY;  
})

/* Step 11 */
document.querySelector('.clientLanguage').innerHTML = navigator.language.toUpperCase();

/* Step 12 */
navigator.geolocation.getCurrentPosition(function(position){
  document.querySelector('.latitude').innerHTML = 'Ш: ' + position.coords.latitude;
  document.querySelector('.longitude').innerHTML = 'Д: ' + position.coords.longitude;
})

/* Step 13 */
const localStorageDiv = document.querySelector('.localStorage');
const cookiesDiv = document.querySelector('.cookies');
const sessionStorageDiv = document.querySelector('.sessionStorage');

localStorageDiv.addEventListener('DOMSubtreeModified', () => {
	localStorage.setItem('local', localStorageDiv.innerHTML);
});

cookiesDiv.addEventListener('DOMSubtreeModified', () =>{
  document.cookie = 'cookie' + cookiesDiv.innerHTML;
})

sessionStorageDiv.addEventListener('DOMSubtreeModified', () => {
  sessionStorage.setItem('session', sessionStorageDiv.innerHTML)
})

window.addEventListener("load", () => {
	localStorageDiv.innerHTML = localStorage.getItem('local');
  cookiesDiv.innerHTML = document.cookie.replace("cookie", "");	
  sessionStorageDiv.innerHTML = sessionStorage.getItem('session');	
});

/* Step 14 */
const goUpBtn = document.querySelector('.goUp');
goUpBtn.addEventListener('click', goTop);

function goTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(goTop, 20);
  }
}

/* Step 15 */
const firstBlock = document.querySelector('.firstBlock');
const secondBlock = document.querySelector('.secondBlock');

firstBlock.addEventListener('click', showAlert);
function showAlert () {
  alert ('First')
}

secondBlock.addEventListener('click', () => {
  firstBlock.removeEventListener('click', showAlert);
  alert('second');
})

/* Stet 16 */
const greyRectBtn = document.querySelector('.greyRectBtn');
const greyRectField = document.querySelector('body');
let grayRect = document.createElement('div');

greyRectBtn.addEventListener('click', () => {
  grayRect.classList.add('grayRect');
  greyRectField.append(grayRect);
  greyRectField.style.overflow = 'hidden';
})
grayRect.addEventListener('click', () => {
  grayRect.classList.remove('grayRect');
  greyRectField.style.overflow = 'visible';
})

/* Stet 17 */
document.querySelector('.noReload').addEventListener('click', (e) => {
  e.preventDefault();
})

/* Stet 18 */
const fileInput = document.querySelector('.fileInput');
fileInput.addEventListener('dragover', changeInput);
function changeInput() {
  fileInput.classList.add('fileAboveInput');
}
fileInput.addEventListener('dragleave', () => {
  fileInput.classList.remove('fileAboveInput');
})
fileInput.addEventListener('drop', () => {
  fileInput.classList.remove('fileAboveInput');
  fileInput.classList.add('fileIn');
})
