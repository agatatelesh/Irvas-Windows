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
                event.preventDefault();
                if(event.target == b) {
                    b.style.display = 'none';
                    document.body.style.overflow = '';
                }
            });

        } 

        modalWindows(phoneLink,morePhone);
        modalWindows(headerBtn,more);
        
        //Form   
        let massage = {
            loading: 'Идет отправка...',
            success: 'Отправлено!',
            failure: 'Произошла ошибка...'
    
        };
        
        let mainForm = document.querySelector('.main_form'),
            mainInput = mainForm.getElementsByTagName('input'),
            statusMessege = document.createElement('div');
            console.log(mainForm);
            console.log(mainInput);
        
            statusMessege.classList.add('status');

            mainForm.addEventListener('submit', function(event) { 
                event.preventDefault(); 
                mainForm.appendChild(statusMessege); 

                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');

                let formData = new FormData(mainForm);let obj = {};
                formData.forEach(function(value, key) {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);
        
                request.send(json);

                request.addEventListener('readystatechange', function() {
                    if (request.readyState < 4) {
                        statusMessege.innerHTML = massage.loading;
                    } else if (request.readyState === 4 && request.status == 200) {
                        statusMessege.innerHTML = massage.success;
                    } else {
                        statusMessege.innerHTML = massage.failure;
                    }
                });

                for (let i = 0; i < mainInput.length; i++) {
                    mainInput[i].value = '';
                }
            });

           
    
});