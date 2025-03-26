const $fileName = document.querySelector('#file-name');
const $fileUpload = document.querySelector('#file-upload');
$fileUpload.addEventListener('change', showName);

const $form = document.querySelector('#form');
$form.addEventListener('submit', validationForm)

let data = {
    file: '',
    name: ''
}


function showName(e){
    data.file = e.target.files[0];
    const fileName = e.target.files[0].name;
    const $spanFileName = $fileName.querySelector('span');
    
    if(fileName){
        $spanFileName.textContent = fileName;
        $fileName.hidden = false;
    }
}


function validationForm(e){
    e.preventDefault();

    data.name = document.querySelector('#name').value.trim();

    if(!data.file || data.name === ''){
        showAlert('Debe completar todos los pasos', 'error');
    }else{
        showAlert('VOS TRANQUILO AMIGUITO, ESTAMOS PROCESANDO TODO', 'correct')
    }
}


function showAlert(msg, type){
    const alertExist = document.querySelector('.alert');

    if(!alertExist){
        const $alert = document.createElement('P');
        $alert.classList.add('alert', type)
        $alert.textContent = msg;
        $form.insertBefore($alert, $form.querySelector("button[type='submit']"))

        setTimeout(() => {
            $alert.remove();
        }, 5000);
    }
}