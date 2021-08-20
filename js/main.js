$(document).ready(function () {
   var currentFloor = 2;                        //* Переменнаяб в которой хранится текщий этаж
   var counterUp = $('.counter-up');            //* кнопка увеличения этажа 
   var counterDown = $('.counter-down');        //* кнопка уменьшения этажа
   var floorPath = $('.home-image path');       //* Каждый отдельный этаж в SVG


   //*  Функция при наведении мышкой на этаж 
   floorPath.on('mouseover', function() {
      floorPath.removeClass('current-floor');              //* Удаляем активный класс у этажей 
      currentFloor = $(this).attr('data-floor');          //* Получаем значение текущего этажа
      $('.counter').text(currentFloor);                   //* записываем значение этажа в счётчик справа
   });

   //* Отслеживаем клик по кнопке вверх
   counterUp.on('click', function(){
      //* Проверяем значение этажа, оно не должно быть больше 18
      if(currentFloor < 18){        
         currentFloor++;                                                                  //* Прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, 
         useGroupping: false});                                                           //* Форматируем переменную с этажом, чтобы было 01, а не 1
      $('.counter').text(usCurrentFloor);                                                 //* записываем значение этажа в счётчик справа
      floorPath.removeClass('current-floor');                                             //* Удаляем активный класс у этажей 
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');                   //* Подсвечиваем текущий этаж
      }
   });
   //* Отслеживаем клик по кнопке вниз
   counterDown.on('click', function(){
      //* Проверяем значение этажа, если больше 2, то уменьшаем значение на единицу
      if(currentFloor > 2){
         currentFloor--;
         usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, useGroupping: false});
         $('.counter').text(currentFloor);
         floorPath.removeClass('current-floor');
         $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
      }
   });
});