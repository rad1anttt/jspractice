//1
let minute = Math.floor(Math.random() * 59);
if (minute >=0 && minute <= 15){
    console.log(`1)${minute} входит в первую четверть часа`);
}
if (minute > 15 && minute <= 30){
    console.log(`1)${minute} входит во вторую четверть часа`);
}
if (minute > 30 && minute <= 45){
    console.log(`1)${minute} входит в третью четверть часа`);
}
if (minute > 45 && minute < 60){
    console.log(`1)${minute} входит в четвертую четверть часа`);
}
//2
let lang = 'en',
arrRu = ['пн','вт','ср','чт','пт','сб','вс'],
arrEn = ['mn','ts','wd','th','fr','st','sn'];
console.log('2)');
if (lang == 'ru'){
    for (let i = 0; i < arrRu.length; i++){
        console.log(`${arrRu[i]}`);
    }
}else if (lang == 'en'){
    for (let i = 0; i < arrEn.length; i++){
        console.log(`${arrEn[i]}`);
    }
}
//3
let num3_input, num3_count, num3_type;
num3_input = prompt('Введите целое число:');
if(Number(num3_input) > 0){
    num3_type = 'положительное';
    if(num3_input.length > 0 && num3_input.length < 1){
        num3_count = 'однозначное';
    }else if (num3_input.length >= 2 && num3_input.length < 3){
        num3_count = 'двузначное';
    }else{
        num3_count = 'трехзначное или больше';
    };
}
else{
    num3_type = 'отрицательное';
    if(num3_input.length > 0 && num3_input.length <= 2){
        num3_count = 'однозначное';
    }else if (num3_input.length > 2 && num3_input.length <= 3){
        num3_count = 'двузначное';
    }else{
        num3_count = 'трехзначное или больше';
    };
};
console.log(`Число ${num3_input} ${num3_type} ${num3_count}`);

//4
let red = 'no',
yellow = 'no',
green;
if (red === 'no' && yellow === 'no'){
    green = 'yes';
}else{
    green = 'no';
};
if(green === 'yes'){
    console.log(`4)Горит зеленый свет светофора, можно переходить дорогу`);
};
//5
let num5 = 1;
console.log('5)');
for (num5; num5 <= 12; num5++){
    console.log(`${num5}`);
}
//6
let num6 = 5;
console.log('6)');
for (num6; num6 <= 13; num6++){
    console.log(`${num6}`);
}
//7
let num7 = 0;
console.log('7)');
for (num7; num7 <= 16; num7++){
    if(num7 % 2 == 0){
        console.log(`${num7}`);
    }
}
//8
let arr8 = [2,5,8,3,6],
sum8 = 1;
for (let i = 0; i < arr8.length; i++){
    sum8 = sum8 + arr8[i];
}
console.log(`8)${sum8}`);