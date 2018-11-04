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
                    openMore(event);
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
                event.preventDefault();

            }
    
            function closeMore() {
                b.style.display = 'none';  
                document.body.style.overflow = '';
            } 

            document.body.addEventListener('click', function() {
                let target = event.target;
                if(target == b) {
                    b.style.display = 'none';
                    document.body.style.overflow = '';
                    }                
                
            });
            

        } 

        modalWindows(phoneLink,morePhone);
        modalWindows(headerBtn,more);

        function func() {
            morePhone.style.display= 'block';
        }

        setTimeout(func, 8000);
        
        //Form   
        let massage = {
            loading: 'Идет отправка...',
            success: 'Отправлено!',
            failure: 'Произошла ошибка...'
    
        };
        
        let mainForm = document.querySelectorAll('.main_form')[0],
            mainForm1 = document.querySelectorAll('.main_form')[1],
            mainForm2 = document.querySelectorAll('.main_form')[2],
            mainForm3 = document.querySelectorAll('.main_form')[3],
            mainForm4 = document.querySelectorAll('.main_form')[4],
            mainForm5 = document.querySelectorAll('.main_form')[5],
            form = document.querySelectorAll('.form')[0],
            form1 = document.querySelectorAll('.form')[1],
            form2 = document.querySelectorAll('.form')[2],
            inputAll = document.querySelectorAll('.form-control'),
            statusMessege = document.createElement('div');
        
            statusMessege.classList.add('status');
            
        function getForm(a){

            a.addEventListener('submit', function(event) { 
                event.preventDefault(); 
                a.appendChild(statusMessege); 

                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                let formData = new FormData(a);

                let obj = {};
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

                //inputAll.value = "";

                for (let i = 0; i < inputAll.length; i++) {
                    inputAll[i].value = '';
                }
            });

        }
        getForm(mainForm);
        getForm(mainForm1);
        getForm(mainForm2);
        getForm(mainForm3);
        getForm(mainForm4);
        getForm(mainForm5);
        getForm(form);
        getForm(form1);
        getForm(form2);

//Timer
let deadLine = '2018-11-22';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60).toString(),
            minutes = Math.floor((t/1000/60) % 60).toString(),
            hours = Math.floor((t/(1000*60*60))).toString(),
            days = Math.floor((t/1000) / 86400).toString();

            if (hours.length < 2) {
                hours = "0" + hours;
            }
            if (minutes.length < 2) {
                minutes = "0" + minutes;
            }
            if (seconds.length < 2) {
                seconds = "0" + seconds;
            }
            if (days.length < 2) {
                days = "0" + days;
            }

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds,
                'days' : days
            };
    }
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            days = timer.querySelector('.days'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            days.textContent = t.days;
             if (t.total <= 0) {                 
                 clearInterval(timeInterval);
                 hours.textContent = '00';
                 minutes.textContent = '00';
                 seconds.textContent = '00';
                 days.textContent = '00';
             }
        }

    }
      setClock('timer', deadLine);


        
            

//tabs
// let     tab = document.querySelectorAll('.glazing_block'),
//         info = document.querySelector('.glazing_slider'),
//         tabContentCold = document.querySelectorAll('.glazing_cold'),
//         tabContentWarm = document.querySelectorAll('.glazing_warm');

        
//     function hideTabContent(a) {
//         for (let i = a; i < tabContentCold.length; i++) {
//             tabContentCold[i].classList.remove('show');
//             tabContentCold[i].classList.add('hide');
//         }
//         for (let i = a; i < tabContentWarm.length; i++) {
//             tabContentWarm[i].classList.remove('show');
//             tabContentWarm[i].classList.add('hide');
//         }
        
//     }

//     hideTabContent(1);

//     function showTabContent(b) {
//         if (tabContentCold[b].classList.contains('hide')) {
//             tabContentCold[b].classList.remove('hide');
//             tabContentCold[b].classList.add('show');
//         }
//         if (tabContentWarm[b].classList.contains('hide')) {
//             tabContentWarm[b].classList.remove('hide');
//             tabContentWarm[b].classList.add('show');
//         }
        
//     }
 
//     info.addEventListener('click', function(event) {
//         let target = event.target;
//         if(target && target.classList.contains('glanzing_block')) {
//             for( let i = 0; i < tab.length; i++) {
//                 if (target == tab[i]) {
//                     hideTabContent(0);
//                     showTabContent(i);
//                     break;
//                 }
//             }
//         }
//     });

           
    
});