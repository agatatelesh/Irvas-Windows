function form() {
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
}
module.exports = form;