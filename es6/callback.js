//콜백함수 함수에서 함수를 콜한다
pm = function (a,b, callback) {
    callback(a+b,a-b);
}
pm(5,10,function(res1, res2) {
    console.log(res1);
    console.log(res2);
})

language = [{lang:'Python'},{lang:'Java'},{lang:'C#'},{lang:'C++'}]

pro = (arr, callback)=>{
    const lang_key = arr.map(x => Object.keys(x)[0]); //배열 객체의 첫번째 key를 가져옴
    const lang_value = arr.map(x => x[Object.keys(x)[0]]) //배열 객체의 value를 가져옴
    callback(lang_key,lang_value)
}

pro(language,function (res1,res2) {
    console.log(res1)
    console.log(res2)
})
