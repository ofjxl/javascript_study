//객체
//2개 이상의 데이터 담을 수 있다. 
//배열 = 2개 이상의 데이터 "값"
//객체 = 2개 이상의 데이터 "속성", "값"
const obj1 = {
    type:'코리안 숏페어',
    age:2,
    color:['흰색','갈색']
}
console.log(obj1)
console.log(obj1.type)
console.log(`고양이 종은 ${obj1.type} 입니다.`)
console.log(obj1.color[0], obj1.color[1])
const cat1 = {
    name:'러블',
    type:'러시안 블루',
    color:'회색',
    age:1,
    gender:'암',
    health:'양호',
    birth:'5/20',
    birth_message:function(){
        return `${this.name}아 ${this.birth} 생일축하해~!`
    },
}
console.log(cat1)
console.log(cat1.birth_message()) // 러블아 5/20 생일축하해~!
console.log('---------------------')
/* const movie = {
    ko_name:'퓨리오사-매드맥스 사가',
    en_name:'Furiosa:A Mad Max Saga',
    rate:'37.4%',
    egg_score:'99%',
    director:'조지 밀러',
    actor:['안야 테일러 조이','크리스 헴스워스','톰 버크'],
    genre:['액션'],
    base_information:['15세이상관람가','148분','미국'],
    release:'2024.05.22',
    time:148,
    poster:'./images/mad_max_poster.jpg',
    story:'문명 붕괴 45년 후 황폐해진 세상에 무참히 던져진 퓨리오사가 고향으로 돌아가기 위해 자신의 인생 전부를 걸고 떠나는 거대한 여정을 그린 액션 블록버스터',
} */
const movie = [{
    ko_name:'퓨리오사-매드맥스 사가',
    en_name:'Furiosa:A Mad Max Saga',
    rate:'37.4%',
    egg_score:'99%',
    director:'조지 밀러',
    actor:['안야 테일러 조이','크리스 헴스워스','톰 버크'],
    genre:['액션'],
    base_information:['15세이상관람가','148분','미국'],
    release:'2024.05.22',
    time:148,
    poster:'./images/mad_max_poster.jpg',
    story:'문명 붕괴 45년 후 황폐해진 세상에 무참히 던져진 퓨리오사가 고향으로 돌아가기 위해 자신의 인생 전부를 걸고 떠나는 거대한 여정을 그린 액션 블록버스터',
},{
    ko_name:'청춘',
    en_name:'Furiosa:A Mad Max Saga',
    rate:'37.4%',
    egg_score:'99%',
    director:'조지 밀러',
    actor:['안야 테일러 조이','크리스 헴스워스','톰 버크'],
    genre:['액션'],
    base_information:['15세이상관람가','148분','미국'],
    release:'2024.05.22',
    time:148,
    poster:'./images/mad_max_poster.jpg',
    story:'문명 붕괴 45년 후 황폐해진 세상에 무참히 던져진 퓨리오사가 고향으로 돌아가기 위해 자신의 인생 전부를 걸고 떠나는 거대한 여정을 그린 액션 블록버스터',
}]
console.log(movie)
console.log(`<img src="${movie.poster}" alt="${movie.ko_name}">`)
console.log('-----------------------')
/* 
    고양이1/코숏/1살/남/갈색,흰색,검은색/중성화 유 
    고양이2/코숏/2살/여/검은색,흰색/중성화 무 
    고양이2/코숏/3살/남/흰색, 회색/중성화 유 
*/
const cat_shelter = [{
    name:'조지',
    type:'코숏',
    age:'1',
    gender:'남',
    color:['갈색','흰색','검은색'],
    neutering:'yes',
},{
    name:'냥이',
    type:'코숏',
    age:'2',
    gender:'여',
    color:['검은색','흰색'],
    neutering:'no',
},{
    name:'차니',
    type:'코숏',
    age:'3',
    gender:'남',
    color:['흰색','회색'],
    neutering:'yes',
}]
console.log(cat_shelter);
console.log(cat_shelter[0]);
console.log(cat_shelter[1]);
console.log(cat_shelter[2]);
console.log(cat_shelter.length)
console.log(`현재 보호소 동물은 ${cat_shelter.length}마리 입니다.`)
//현재 보호소 동물 나이대는 ?살, ?살, ?살 입니다. 
console.log(cat_shelter[0].age)
console.log(`현재 보호소 동물 나이대는 ${cat_shelter[0].age}살, ${cat_shelter[1].age}살, ${cat_shelter[2].age}살 입니다.`)