let a = +prompt("son kirting biz sizga toq yoki juftligini aniqlab beramiz")
while (isNaN(a) || a == 0) {
    a = +prompt("sonkrit")
}
if (a % 2 == 0) {
    alert("siz juft son kiritdingiz")
}else if(a%2 >0){
    alert("siz juft son kiritdingz")
}


let d = +prompt("sonnini kiriting")
let b = +prompt("darajani kiriting")
let ans = 1
for (let i = 0; i < b; i++) {
    ans *= d
}
alert( "javob " + ans );
