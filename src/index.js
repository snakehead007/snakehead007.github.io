import Parallax from 'parallax-js'

var scene = document.getElementById('scene');

var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});

function addBgLayers(){
    add(createBg('1/sky.png'),1);
    add(createBg('1/rocks_1.png',"up1"),3);
    add(createBg('2/rocks_3.png',"up2"),5);
    add(createBg('1/rocks_2.png'),6);
    add(createBg('2/rocks_1.png',"upHalf"),7);
}

function addClouds(){
    add(createCloud('1/clouds_1.png',140),2);
    add(createCloud('1/clouds_2.png',120),4);
}

function createBg(src,extraClass){
    const image = document.createElement('img');
    image.src = `/images/parallax/${src}`;
    image.classList.add('fill');
    image.classList.add("bg");
    if(extraClass){
        image.classList.add(extraClass);
    }
    return image;
}
``
function createCloud(src,speed){
    const sky = document.createElement('div');
    sky.classList.add(`wind${speed}`);
    sky.classList.add(`clouds`);
    sky.style.cssText =`animation: wind ${speed}s linear infinite;`;
    for (let i = 0; i < 10; i++) {
        const cloud = document.createElement('img');
        cloud.src = `/images/parallax/${src}`;
        cloud.classList.add('cloud');
        sky.appendChild(cloud);
    }
    return sky;
}

function add(el,layer,loop){
    document.getElementById(`s${layer}`).append(el);
}

function addAll(){
    addBgLayers();
    addClouds();
}

function initClouds(){
    const clouds = document.querySelectorAll(".cloud");
    console.l
    for (const iterator of clouds) {       
    }
}

function initAll(){
    initClouds();
}

//------------

addAll();

initAll();
