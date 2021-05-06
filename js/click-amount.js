// var minus = document.querySelectorAll(".minus-btn"),
//     plus = document.querySelectorAll('.plus-btn'),
//     valueCount,
//     quantity = document.querySelectorAll('.quantity'),
//     box_add = document.querySelectorAll('.item-button .box-two .box-add'),
//     box_quality = document.querySelectorAll('.item-button .box-two .box-quality');
// minus.forEach(e_minus => {
//     e_minus.setAttribute("disabled", "disabled");
//     e_minus.addEventListener("click", function() {
//         valueCount = quantity.forEach(e_q => {
//             var valueCount = e_q.value;
//             valueCount--;
//             e_q.value = valueCount;
//             if (valueCount == 2) {
//                 // e_minus.setAttribute("disabled", "disabled");
//                 box_add.forEach(e_add => {
//                     e_add.classList.remove('show-hide');
//                 })
//                 box_quality.forEach(e_box__eq => {
//                     e_box__eq.classList.remove('show-hide');
//                 })
//             }
//         })
//     });
// });
// plus.forEach(e_plus => {
//     e_plus.addEventListener('click', function() {
//         valueCount = quantity.forEach(e_q => {
//             var valueCount = e_q.value;
//             valueCount++;
//             e_q.value = valueCount;
//             if (valueCount > 1) {
//                 minus.forEach(e_minus => {
//                     e_minus.removeAttribute("disabled");
//                     e_minus.classList.remove("disabled");
//                 })
//             }
//         })
//     })
// });
// $('.plus-btn').on('click', function(event) {
//     const element = $(event.target).parents(".box-button").find('.quantity');
//     let value = element.val();
//     var number = element.val(Number(value) + 1).value();
//     console.log(number);
// })
// $('.minus-btn').click(function() {
//     const element = $(event.target).parents(".box-button");
//     // trả về phần tử chuỗi
//     console.log(element);
//     // let value = element.val();
//     // var number = element.val(Number(value) - 1);
//     // console.log(number);
// })