let submit = document.getElementById("submit");
const info = {
    name: '',
    email: '',
    url: '',
    website: '',
    gender: '',
    skillArr: [],
}
const getData = () => {
    info.name = document.getElementById('name').value;
    info.email = document.getElementById('email').value;
    info.url = document.getElementById('url').value;
    info.website = document.getElementById('website').value;
    info.gender = document.querySelector('input[name="male-female"]:checked').value;
    let skills = document.querySelectorAll('.checkbox:checked');
    info.skillArr = [];
    skills.forEach((item) => {info.skillArr.push(item.value);})
    if (localStorage.getItem("infoSection") === null) {infoItem = [];}
    else {infoItem = JSON.parse(localStorage.getItem("infoSection"))}
    infoItem.push(info);
    localStorage.setItem("infoSection", JSON.stringify(infoItem));
}
const showData = () => {
    let section = document.getElementById("section");
    let cards = '';
    let getLocalStorage = localStorage.getItem("infoSection");
    if (getLocalStorage === null) {console.log("null");}
    else { cardDivArr = JSON.parse(getLocalStorage);
            cardDivArr.forEach((item, index) => {
            cards += `<div class="card">
            <img src=${item.url} alt="">
            <div class="info">
                <p><strong>Name</strong> : ${item.name}</p>
                <p><strong>Email</strong> : ${item.email}</p>
                <p><strong>Website</strong> : <a href="${item.website}">Click here</a></p>
                <p><strong>Gender</strong> : ${item.gender}</p>
                <p><strong>Skills</strong> : ${item.skillArr.join(", ")}</p>
                <button onclick="deleteData(${index})">Delete</button>
            </div>
        </div>`;
        })
    }
    section.innerHTML = cards;
}
const deleteData = (index) => {
    let getList = JSON.parse(localStorage.getItem("infoSection"));
    getList.splice(index, 1);
    localStorage.setItem("infoSection", JSON.stringify(getList));
    window.location.reload();
}
showData();
submit.addEventListener(('click'), () => {
    getData();
    showData();
})