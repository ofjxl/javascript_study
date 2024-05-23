const book_data = [
    {
        //1번째 상품
        name:'[도서]나를 소모하지 않는 현명한 태도에 관하여',
        author:['마티아스 뇔케','이미옥'],
        publishing:'퍼스트펭귄',
        date:'2024년 03월',
        price:17800,
        sale:10,
        tag:['#얼리리더', '#이달의굿즈', '#나를바라보다', '#인간관계에대하여'],
    },{
        //2번째 상품
        name:'[도서]하루 한 장 나의 어휘력을 위한 필사 노트',
        author:'유선경',
        publishing:'위즈덤하우스',
        date:'2024년 03월',
        price:17800,
        sale:10,
        tag:['#얼리리더', '#필사', '#쓰는맛'],
    },{
        //3번째 상품
        name:'[도서]불변의 법칙',
        author:['모건 하우절', '이수경'],
        publishing:'서삼독',
        date:'2024년 02월',
        price:17800,
        sale:10,
        tag:['#얼리리더', '#부자되는법', '#부자만들기', '#돈좀벌어보자','돈모으고싶을때'],
    }
]
const section = document.querySelector('section')
let book = "";
book += '<div class="book">'
//내용시작
book += `<h1>${book_data[1].name}`
book += `<p class="info">`
book += `${book_data[1].author[0]}/${book_data[1].author[1]}역`
book +=`<a href="#">${book_data[1].publishing}`
book +=`<span>${book_data[1].date}</span>`
book +=`</p>`
book +=`<p class="price">`
book +=`<em>${book_data[1].price}원</em>`
book +=`<span>(${book_data[1].sale}% 할인)</span>`
book +=`</p>`
book +=`<p class="tag">`
book +=`${book_data[1].tag[0]}
        ${book_data[1].tag[1]}
        ${book_data[1].tag[2]}
        ${book_data[1].tag[3]}}`
book +='</p>'
//내용끝
book +='</div>'
section.innerHTML = book