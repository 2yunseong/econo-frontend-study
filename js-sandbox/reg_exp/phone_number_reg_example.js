const tel = ['010-7741-3701', '010-2456-346a'];

const phoneNumReg = /^\d{3}-\d{4}-\d{4}$/;
for(let i = 0; i < tel.length; i++){
    if(phoneNumReg.test(tel[i])){
        console.log("전화번호 형식에 맞습니다.");
        console.log(`전화번호 : ${tel[i]}`);
        continue;
    }
    console.log("전화번호 형식에 맞지 않습니다.");
}