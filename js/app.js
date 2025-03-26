const $fileName = document.querySelector('#file-name');
const $fileUpload = document.querySelector('#file-upload');
$fileUpload.addEventListener('change', showName);

const $form = document.querySelector('#form');
$form.addEventListener('submit', validationForm)

let data = {
    file: '',
    name: ''
}


function showName(){
    data.file = this.files[0];
    const fileName = this.files[0].name;
    const $spanFileName = $fileName.querySelector('span');
    
    if(fileName){
        $spanFileName.textContent = fileName;
        $fileName.hidden = false;
    }
}


function validationForm(e){
    e.preventDefault();

    data.name = document.querySelector('#name').value;

    if(!data.file || data.name === ''){
        showAlert('Debe completar todos los pasos', 'error');
    }else{
        showAlert('VOS TRANQUILO AMIGUITO, ESTAMOS PROCESANDO TODO')
    }
}


function showAlert(msg, type){
    const alertExist = document.querySelector('.alert');
    const $alert = document.createElement('P');

    if(!alertExist){
        $alert.classList.add('alert')
        $alert.textContent = msg;

         if(type === 'error'){
            $alert.classList.add('error')
         }else{
            $alert.classList.add('correct')
         }

        $form.insertBefore($alert, $form.querySelector("button[type='submit']"))

        setTimeout(() => {
            $alert.remove();
        }, 3000);
    }
}