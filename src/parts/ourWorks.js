function ourWorks() {
    //our Works

let worksImg = document.querySelectorAll('.works_pic')[0],
worksImg2 = document.querySelectorAll('.works_pic')[1],
worksImg3 = document.querySelectorAll('.works_pic')[2],
worksImg4 = document.querySelectorAll('.works_pic')[3],
worksImg5 = document.querySelectorAll('.works_pic')[4],
worksImg6 = document.querySelectorAll('.works_pic')[5],
worksImg7 = document.querySelectorAll('.works_pic')[6],
worksImg8 = document.querySelectorAll('.works_pic')[7],
bigPic = document.querySelectorAll('.big_pic')[0],
bigPic2 = document.querySelectorAll('.big_pic')[1],
bigPic3 = document.querySelectorAll('.big_pic')[2],
bigPic4 = document.querySelectorAll('.big_pic')[3],
bigPic5 = document.querySelectorAll('.big_pic')[4],
bigPic6 = document.querySelectorAll('.big_pic')[5],
bigPic7 = document.querySelectorAll('.big_pic')[6],
bigPic8 = document.querySelectorAll('.big_pic')[7];

function showBigPic(a,b) {
 
    a.addEventListener('click', function() {       
        b.style.display = "block"; 
        document.body.style.overflow = 'hidden';
        event.preventDefault();
    });
    
document.body.addEventListener('click', function() {
    let target = event.target;
    if(target == b) {
        b.style.display = 'none';
        document.body.style.overflow = '';
        }                
    
});
}
showBigPic(worksImg,bigPic);
showBigPic(worksImg2,bigPic2);
showBigPic(worksImg3,bigPic3);
showBigPic(worksImg4,bigPic4);
showBigPic(worksImg5,bigPic5);
showBigPic(worksImg6,bigPic6);
showBigPic(worksImg7,bigPic7);
showBigPic(worksImg8,bigPic8);
}

module.exports = ourWorks;