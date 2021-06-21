export function ValidationEmail(email, setValidation, setErro){
    if(email === ''){
        setValidation(true);
        setErro('Preencha o campo de email*');
        return false;
    }

    if(!email.includes('@')){
        setValidation(true);
        setErro('Formato de email invalido*');
        return false;
    }

    setValidation(false);
    setErro('');

    return email;
}

export function ValidationPass(pass, setValidationPass, setErroPass){
    if(pass === ''){
        setValidationPass(true);
        setErroPass('Preencha o campo de senha*');
        return false;
    }

    if(pass.length > 8){
        setValidationPass(true);
        setErroPass('Tamanho máximo de 8 caracteres*');
        return false;
    }

    setValidationPass(false);
    setErroPass('');

    return pass;
}