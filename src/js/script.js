//var name = "Siegerus";
//let number = 7;
//const pi = 3.14;

//let leftBorderWidth = 200;
 //number
 //string
 //true/false
 //null
 //undefined

/* let obj = {
    name = 'apple';
    color = 'green';
    weight = 
} */
//Symbol


//alert (12323)
//console.log (pi);
//let answer = confirm ("Вам есть 18?");  //Задаём переменную, которая будет равна ответу на вопрос.
//console.log (answer);                  //и она выведется в консоле в формате ответа true /false.

//let answer = prompt ("Вам есть 18?", "");
//console.log (answer);          

//let isChecked = true,  // "&&" логический оператор "и". Консоль выведет true если и галочка будет стоять и модюокно бкдет закрыто (пример).
   // isClose = true;
//console.log (isChecked && isClose);
//console.log (isChecked || isClose);    // "||"  оператор "или".

//if (2*4 == 8*2ё) {    //Если выражение будет верно, то в консоли выведется "верно."        
   // console.log ('Верно')
//} else {                   // Если нет, то "ошибка".
//    console.log ('Ошибка')
//}

//let answer = confirm ("Вам есть 18?"); 
//if (answer == true) {          
 //   console.log('Проходите')
//} else {
 //   console.log('Уходи');
//}

//let num = 58;
//if (num < 49) {                  //Если "num" будет меньше 49 - выведеться "неправильно"
//    console.log('Неправильно')   
//} else if (num > 100) {          //Если будет больше 49, но при этом больше 100, то выведеться "Много"
//    console.log('Много')       
//} else {                        // Если и это условие не выполняется, то выведется "верно".
//    console.log('Верно')  
//}

//for (let i = 1; i < 8; i++) {      //Для переменной "i", котрая равна 1, будет продолжаться цикл  до тех пор, пока она не достигнет 8ми. 
 //   console.log(i);                //Каждый шаг (итерацию) будет прибавляться i+1. Цикл -вывод в консоль значение i.    

//} 

//function logging(a, b) {               // "logging" - дали название функции.
    //console.log(a + b);
//}

//logging(4, 5);                        // Теперь вызываем функцию


$(document).ready(function(){
    $('.carousel__inner').slick({
       // dots: true,                     //"dots" - кружочки внизу, их можно застилизовать.
        speed: 300,
        slidesToShow: 1,               //  "slidesToShow" - сколько слайдов показывать за раз.
        variableWidth: true,          // "variableWidth" - что бы слайдер сам пдстраивал картинки разной высоты внутри слайдера.
        //autoplay: true,            // автопереключение слайдера.
       // autoplaySpeed: 2000,
        //fade: true,
        //cssEase: 'linear'
        //arrows: false               // включение и выключение стрелочек.
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_arrow.svg"></button>' ,  // добавляем свои стрелочки.
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right_arrow.svg"></button>' , // пути как пишем как будто мы в index html, т.к скрипты работают напрямую.
        responsive: [                      // адаптируем слайдер для максимального разрешения в 768
            {                             // копируем с сайта
                breakpoint: 992,
                settings: {
                arrows: false,         // Для маленьких экранов убираем стрелочки и добавляем кружочки.
                dots: true 
                }
            }
        ]
    });
  });