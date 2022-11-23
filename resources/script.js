let readMore1 = document.getElementById('read-more1');
let moreInfo1 = document.getElementById('more-info1');

const showInfo1 = () => {
  moreInfo1.style.display = 'block';
}

readMore1.addEventListener('click', showInfo1);

let readMore2 = document.getElementById('read-more2');
let moreInfo2 = document.getElementById('more-info2');

const showInfo2 = () => {
  moreInfo2.style.display = 'block';
}

readMore2.addEventListener('click', showInfo2);

let readMore3 = document.getElementById('read-more3');
let moreInfo3 = document.getElementById('more-info3');

const showInfo3 = () => {
  moreInfo3.style.display = 'block';
}

readMore3.addEventListener('click', showInfo3);

let view = document.getElementById('open-button');
let close = document.getElementById('close-button');
let pic = document.getElementById('aboutme-pic');

let open = function() {
  pic.style.display = 'block';
  close.style.display = 'block';
  view.style.display ='none';
};

let hide = function() {
  pic.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

// Write your code here
const textChange = () => {
  view.innerHTML = 'Hello!';
}

const textReturn = () => {
  view.innerHTML = 'View';
}
view.addEventListener('click', textChange);
close.onclick = textReturn;