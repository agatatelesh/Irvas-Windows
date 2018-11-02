window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    //Modal
    let headerBtn = document.querySelectorAll('.header_btn'),
        more = document.querySelector('.popup_engineer'),
        close = document.querySelectorAll('.popup_close'),
        morePhone = document.querySelector('.popup'),
        phoneLink = document.querySelectorAll('.phone_link');
              
        function modalWindows(a,b) {
            
            for (let i = 0; i < a.length; i++) {
                a[i].addEventListener('click', function() {
                    openMore();
                });
            }
    
            for (let i = 0; i < close.length; i++) {
                close[i].addEventListener('click', function() {
                    closeMore();
                });
            }  
                   
            function openMore() {
                b.style.display = 'block'; 
                document.body.style.overflow = 'hidden';          
            }
    
            function closeMore() {
                b.style.display = 'none';  
                document.body.style.overflow = '';       
            } 
    
            window.addEventListener("click", function(event) {
                if(event.target == b) {
                    b.style.display = 'none';
                    document.body.style.overflow = '';
                }
            });

        } 

        modalWindows(phoneLink,morePhone);
        modalWindows(headerBtn,more);
        
        //Form     
          
    
});