const vesselsCheckBox = document.querySelector("input[id=vessels]");
const vesselsP = document.getElementById('vessels-point')

const boneCheckBox = document.querySelector("input[id=bone]");
const boneP = document.getElementById('bone-point');

const bloodCheckBox = document.querySelector("input[id=blood]");
const bloodP = document.getElementById('blood-point');

const sinewsCheckBox = document.querySelector("input[id=sinews]");
const sinewsP = document.getElementById('sinews-point')

const marrowCheckBox = document.querySelector("input[id=marrow]");
const marrowP = document.getElementById('marrow-point');

const zangCheckBox = document.querySelector("input[id=zang]");
const zangP = document.getElementById('zang-point');

const fuCheckBox = document.querySelector("input[id=fu]");
const fuP = document.getElementById('fu-point')

const qiCheckBox = document.querySelector("input[id=qi]");
const qiP = document.getElementById('qi-point');



vesselsCheckBox.addEventListener('change',function(){
    vesselsP.textContent = 'LU9'
});

boneCheckBox.addEventListener('change',function(){
    boneP.textContent = 'BL11'
});

bloodCheckBox.addEventListener('change', function(){
    bloodP.textContent = 'BL17'
});

sinewsCheckBox.addEventListener('change',function(){
    sinewsP.textContent = 'GB34'
});

marrowCheckBox.addEventListener('change',function(){
    marrowP.textContent = 'GB39'
});

zangCheckBox.addEventListener('change',function(){
    zangP.textContent = 'LR13'
})

fuCheckBox.addEventListener('change',function(){
    fuP.textContent = 'REN12'
})

qiCheckBox.addEventListener('change',function(){
    qiP.textContent = 'REN17'
})

