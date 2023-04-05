const addButton = document.querySelector('.card__add');
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];


function showModal () {
    modal.style.display = "block";
}
// span.onclick = function() {
//     modal.style.display = "none";
// }

span.addEventListener("click", function () {
    modal.style.display = "none";
})



// addButton.forEach(elem => {
//     elem.addEventListener('click', function ll(event) {
//         console.log(1);
//     });
// });

// addButton.forEach(elem => {
//     elem.addEventListener("click", function () {
//         console.log(3)
//     })
// })
// addButton.addEventListener("click", function () {
//     console.log(5)
// })