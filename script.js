
const ismlar = ["Anvar", "Azam", "Abdulloh", "Abdurahmon", "Farrux", "Jahongir", "Hikmatulloh", "Vorisxon", "Murod", "Kamoliddin", "Muhammad", "Javohir", "Islom", "Farhod", "Fazliddin", "Muxammad", "Musavvir", "Ilhom", "Firuza", "Asadbek", "Mubashsher", "Jasur", "Ahad", "Nozima", "Zilola", "Zarnigor", "Fotima", "Qobil", "Hasan", "Yaxyo", "Komil", "Sarvar", "Muyassar", "Muxlisa", "Abubakir", "Raximboy", "Fotima", "Sevara", "Dovud", "Islom", "Sanjar", "Ahmad", "Ibrohim", "Muslima", "Raximberdi", "Muzaffar", "ItpayTi", "Azim", "Bobur", "Muhammadyusuf", "Yulduz", "Saidbek"];

const output = document.querySelector(".output");
const search = document.querySelector(".input");

window.addEventListener("DOMContentLoaded", loadList);
search.addEventListener("input", filter);


function loadList(){
    let temp = `<ul class="list-items">`;
    ismlar.forEach((item) => {
        temp += `<li class="list-item"> ${item} </li>`;
    });
    temp += `</ul>`;

    output.innerHTML = temp
}

function  filter(e) {
    let temp = "";
    const result = ismlar.filter(item=> item.toLowerCase().includes(e.target.value.toLowerCase()));

    if(result.length>0){
        temp = `<ul class="list-items">`;
        result.forEach((item) => {
            temp += `<li class="list-item"> ${item} </li>`;
        });
        temp += `</ul>`;
    }else{
        temp = `<div class="no-item"> bunday malumot yo'q </div>`;
    }

    output.innerHTML =temp;
}













// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     topilganlar.insertAdjacentHTML(
//         "afterbegin",
//         `
//         <figure>
//         <figcaption>
//             <h2>${ismInputi.value}</h2>
//         </figure>
//         `
//     );
// });


// function isimLar(ism) {
//     return ism > document.getElementById("search").value;
// };

// function qidir() {
//     document.getElementById("topilganlar").innerHTML = ismlar.filter(isimLar);
// };

// btn1.addEventListener("click", (event) => {
//     event.preventDefault();
//     topilganlar.classList.add("active");
//   });






















//! concat - bu qaytaradi -> yangi qushilgan arreyni - asl arrayni o'zgartiradimi -> false
//* misoml - console.log(salom.concat(xayr))

//! join - arreydagi malumotlarni bir biriga loin ga o'tkazilgan parameter bilan birlashtiradi.
//* yangi string qaytaradi.
//* misol - console.log(salom.join(":"))

//! indexOf - arreydagi elementni indexisini  chiqaradi <- boshidan
//* misol - console.log(salom.index("s")) <- bu boshidan chiqaradi index raqamini.

//! lastIndexOf -  arreydagi elementni indexisini  chiqaradi <- oxiridan
//* misol - console.log(saloms.lastIndex("s")) <- bu oxiridan chiqaradi index raqamini.

//! includes - bu arreydagi malumotlarni ichida so'ralgan malumot bor yoki yoqligini tekshiradi.
// const salom = ["salom"]
//* misol - console.log(salom.includes(salom)) <-- false -- true.

// const gruh = ["Javohir", "Voris", "Hikmatillo", "Muhammad"];

// //! function parameter sifatida oladi , ana shu function ga 3 ta argument beradi.
// //! 1-el ga teng, 2- element indexisi, joylashgan raqam, 3- arrayni o'ziga

// const yangiArr = gruh.map((ism) => `<li>${ism}</li>`);

// document.getElementById("list").innerHTML = yangiArr.join("");
// console.log(yangiArr);

// oncuechange
