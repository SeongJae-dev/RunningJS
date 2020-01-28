//11.2 예외처리는 try..catch문을 사용합니다. 무너가를 시도(try) 하고, 예외가 있으면 그것을 캐치(catch) 한다는 뜻이 잘 드러난다.
//예상치 못한 예외처리시 사용한다.


function validateEmail(email){
    return email.match(/@/)? email : new Error(`invalid email ${email}`);
}

const email = null; //
try {
    const validatedEmail = validateEmail(email);
    if(validateEmail instanceof Error){
        console.error(`Error: ${validatedEmail.message}`);
    }else{
        console.log(`Valid email:${validatedEmail}`);
    }

} catch (error) {
    console.log(`Error:${error.message}`);
}
//에러가 일어나면 바로 catch 블록으로 넘어가고 일어나지 않으면 catch는 동작하지 않는다.

//11.3 에러 일으키기
//에러를 일으키길 기다릴 필요 없임 직접일으켜 throw,raise 예외 처리 작업을 시작할 수도 있다.

function billPay(amount, payee, account){
    if(amount > account.balance)
        throw new Error('insufficient funds');
    account.transfer(payee,amount);
}
// throw를 호출하면 현재 함수가 즉시 멈춘다.


