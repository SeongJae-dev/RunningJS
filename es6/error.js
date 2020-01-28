//Error 인스턴스를  만들면 에러 메세지 지정할 수 있다.


function validateEmail(email){
    return email.match(/@/)? email : new Error(`invalid email ${email}`);
}

const email ="sjcho@naver.com";

const validatedEmail = validateEmail(email);

if(validatedEmail instanceof Error){
    console.log(`Error: ${validatedEmail.message}`);
}else{
    console.log(`Valid email: ${validatedEmail}`);
}