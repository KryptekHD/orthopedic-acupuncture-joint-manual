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

const qiStanginationcheckBox = document.querySelector("input[id=qi-stangination]")
const qiStanginationDiv = document.getElementById('sub-area1');

qiStanginationcheckBox.addEventListener('change',function(){
    qiStanginationDiv.classList.remove("invisiable");

    const qiStanginationUpperBody = document.querySelector("input[id=qiStanginationUpperBody]");
    const qiStanginationUpperBodyP = document.getElementById('upper-body-point');
    const qiStanginationMiddleBody = document.querySelector("input[id=qiStanginationMiddleBody]")
    const qiStanginationMiddleBodyP = document.getElementById('middle-body-point');
    const qiStanginationLowerBody = document.querySelector("input[id=qiStanginationLowerBody]");
    const qiStanginationLowerBodyp = document.getElementById('lower-body-point');

    qiStanginationUpperBody.addEventListener('change',function(){
        qiStanginationUpperBodyP.textContent = 'Tx: ST9, Ren17, Du14, Du15'
    });
    qiStanginationMiddleBody.addEventListener('change',function(){
        qiStanginationMiddleBodyP.textContent ='Tx: Ren17, Ren 6'
    });
    qiStanginationLowerBody.addEventListener('change',function(){
        qiStanginationLowerBodyp.textContent ='Tx: GB34, LR3'
    })

})

const qiXueStangnationCheckBox = document.querySelector("input[id=qi-xue-stagnation");
const qiXueStangnationDiv = document.querySelector('#sub-area2')

qiXueStangnationCheckBox.addEventListener('change',function(){
    qiXueStangnationDiv.classList.remove("invisiable");
    const qiXueUpperBody = document.querySelector("input[id=qiXueUpperBody");
    const qiXueUpperBodyP = document.getElementById('upper-body-point1');
    const qiXueMiddleBody = document.querySelector("input[id=qiXueMiddleBody]");
    const qiXueMiddleBodyP = document.getElementById('middle-body-point1');
    const qiXueLowerBody = document.querySelector("input[id=qiXueLowerBody")
    const qiXueLowerBodyP = document.getElementById('lower-body-point1');

    qiXueUpperBody.addEventListener('change',function(){
        qiXueUpperBodyP.textContent = 'Tx: ST9, Ren17, Du14, Du15, BL11'
    });
    qiXueMiddleBody.addEventListener('change',function(){
        qiXueMiddleBodyP.textContent = 'Tx: Ren17'
    })
    qiXueLowerBody.addEventListener('change',function(){
        qiXueLowerBodyP.textContent = 'Tx: ST37, ST39'
    })
})

const xueStangnationCheckBox = document.querySelector("input[id=xue-stagnation]");
const xueStangnationP = document.getElementById('sub-area3');

xueStangnationCheckBox.addEventListener('change',function(){
    xueStangnationP.classList.remove("invisiable");

    const xueStangnationUpperBody = document.querySelector("input[id=ueStangnationUpperBody]");
    const xueStangnationUpperBodyP = document.getElementById('upper-body-point2');
    const xueStangnationMiddleBody = document.querySelector("input[id=xueStangnationMiddleBody]");
    const xueStangnationMiddleBodyP = document.getElementById('middle-body-point2');
    const xueStangnationLowerBody = document.querySelector("input[id=xueStangnationLowerBody]");
    const xueStangnationLowerBodyP = document.getElementById('lower-body-point2');
    

    xueStangnationUpperBody.addEventListener('change',function(){
        xueStangnationUpperBodyP.textContent ='Tx: BL11'
    });
    xueStangnationMiddleBody.addEventListener('change',function(){
        xueStangnationMiddleBodyP.textContent ='Tx: BL17, SP10'
    });
    xueStangnationLowerBody.addEventListener('change',function(){
        xueStangnationLowerBodyP.textContent = 'Tx: ST37, ST39, SP10'
    })

});

const dampCheckBox = document.querySelector("input[id=damp]");
const dampDiv = document.getElementById('sub-area4');

dampCheckBox.addEventListener('change',function(){
    dampDiv.classList.remove("invisiable");

    const dampUpperBody = document.querySelector("input[id=ampUpperbody]");
    const dampUpperBodyP = document.getElementById('upper-body-point3');
    const dampMiddleBody = document.querySelector("input[id=dampMiddleBody]");
    const dampMiddleBodyP = document.getElementById('middle-body-point3');
    const dampLowerBody = document.querySelector("input[id=dampLowerBody]");
    const dampLowerBodyP = document.getElementById('lower-body-point3');

    dampUpperBody.addEventListener('change',function(){
        dampUpperBodyP.textContent = 'Tx: LU7, LI6, HT5, SI7, PC6, SJ5, Ren15'
    })

    dampMiddleBody.addEventListener('change',function(){
        dampMiddleBodyP.textContent = 'Tx: ST40, SP21, Ren15, Du1'
    });
    dampLowerBody.addEventListener('change',function(){
        dampLowerBodyP.textContent ='Tx: ST40, SP4, BL58, KD4, GB37, LR5'
    })
})

const coldCheckBox = document.querySelector("input[id=cold]");
const coldDiv = document.getElementById('sub-area5');

coldCheckBox.addEventListener('change',function(){
    coldDiv.classList.remove("invisiable");

    const coldUpperBody = document.querySelector("input[id=coldUpperBody]");
    const coldUpperBodyP = document.getElementById('upper-body-point4');
    const coldMiddleBody = document.querySelector("input[id=coldMiddleBody]");
    const coldMiddleBodyP = document.getElementById('middle-body-point4');
    const coldLowerBody = document.querySelector("input[id=coldLowerBody]");
    const coldLowerBodyP = document.getElementById('lower-body-point4');

    coldUpperBody.addEventListener('change',function(){
        coldUpperBodyP.textContent ='Tx: MOXA: LU9, LI4, HT7, SI4, PC7, SJ4'
    });
    coldMiddleBody.addEventListener('change',function(){
        coldMiddleBodyP.textContent= 'Tx: MOXA: Ren6, Ren9'
    });
    coldLowerBody.addEventListener('change',function(){
        coldLowerBodyP.textContent ='Tx: MOXA: ST42, SP3, BL64, KD3, GB40, LR3, BL67'
    })
});

const hotCheckBox = document.querySelector("input[id=hot]");
const hotDiv = document.getElementById('sub-area6');

hotCheckBox.addEventListener('change',function(){
    hotDiv.classList.remove("invisiable");

    const hotUpperBody = document.querySelector("input[id=hotUpperBody]");
    const hotUpperBodyP = document.getElementById('upper-body-poin5t');
    const hotMiddleBody = document.querySelector("input[id=hotMiddleBody]");
    const hotMiddleBodyP = document.getElementById('middle-body-point5');
    const hotLowerBody = document.querySelector("input[id=hotLowerBody]");
    const hotLowerBodyP = document.getElementById('lower-body-point5');

    hotUpperBody.addEventListener('change',function(){
        hotUpperBodyP.textContent = 'Tx: Disperse: Lu10, LI5, HT8, SI5, PC8, SJ6, LU7'
    });
    hotMiddleBody.addEventListener('change',function(){
        hotMiddleBodyP.textContent = 'Tx: Disperse:';
    });
    hotLowerBody.addEventListener('change',function(){
        hotLowerBodyP.textContent ='Tx: Disperse:ST41, SP2, BL60, KD2, GB38, LR2, KD6'
    });

})

