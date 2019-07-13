let n = 0;
// eslint-disable-next-line no-constant-condition
while(true){
    n+=0.1;
    //if(n===0.3)break;
    if(Math.abs(n-0.3)<Number.EPSILON) break;
}
console.log(`Stopped at ${n}`);