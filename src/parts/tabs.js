function tabs() {
    // Tабы с отделкой 
let decoreSlides = document.querySelectorAll('.decoration_slider')[0],
slideLink = document.querySelectorAll('.no_click'),
slider = decoreSlides.querySelectorAll('.explan'),
decorContetnt = document.querySelectorAll('.content_material');


decoreSlides.addEventListener('click', function(event) {
    let target = event.target;
    if(target && target.classList.contains('explan')) {
        for (let i = 0; i < slider.length; i++) {
            if(target == slider[i]) {                
                hideSlideLink(0);
                slideLink[i].classList.add('after_click');
                hideDecoreContent(0);
                showDecoreContent(i);
                break;
            }
        } 

    }
          
});

function hideSlideLink(a) {
    for ( let i = a; i < slider.length; i++) {
        slideLink[i].classList.remove('after_click');
    }
}
hideSlideLink(1);     

function hideDecoreContent(a) {
    for (let i = a; i < decorContetnt.length; i++) {
        decorContetnt[i].classList.remove('show');
        decorContetnt[i].classList.add('hide');
    }
}

 hideDecoreContent(1);

function showDecoreContent(b) {
    if (decorContetnt[b].classList.contains('hide')) {
        decorContetnt[b].classList.remove('hide');
        decorContetnt[b].classList.add('show');
    }
}    

// Табы с окнами 
let glazingSlides = document.querySelectorAll('.glazing_slider')[0],
    explanLink = glazingSlides.querySelectorAll('.explanation'),
    windowInfo = document.querySelectorAll('.window_info');


glazingSlides.addEventListener('click', function(event) {
    let target = event.target;
    if(target && target.classList.contains('explanation')) {
        for (let i = 0; i < explanLink.length; i++) {
            if(target == explanLink[i]) {                
                hideExplanLink(0);
                explanLink[i].classList.add('active');
                hideWindowInfo(0);
                showWindowInfo(i);
                break;
            }
        } 
    }
    
                   
});
function hideExplanLink(a) {
    for ( let i = a; i < explanLink.length; i++) {
        explanLink[i].classList.remove('active');
    }
}
hideExplanLink(1);  

function hideWindowInfo(a) {
    for (let i = a; i < windowInfo.length; i++) {
        windowInfo[i].classList.remove('show');
        windowInfo[i].classList.add('hide');
    }
}

hideWindowInfo(1);

function showWindowInfo(b) {
    if (windowInfo[b].classList.contains('hide')) {
        windowInfo[b].classList.remove('hide');
        windowInfo[b].classList.add('show');
    }
}    
}
module.exports = tabs;