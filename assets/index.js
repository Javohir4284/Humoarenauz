var day = document.getElementById("day");
var hour = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

setInterval(function () {
  var dedline = new Date(2022, 4, 10);
  var now = Date.now();
  var dif = dedline - now;
  var difSec = Math.floor(dif / 1000);
  var difMin = Math.floor(difSec / 60);
  var difHour = Math.floor(difMin / 60);
  var difDay = Math.floor(difHour / 24);
  day.textContent = difDay < 10 ? "0" + difDay : difDay;
  hour.textContent =
    difHour - difDay * 24 < 10
      ? "0" + (difHour - difDay * 24)
      : difHour - difDay * 24;
  min.textContent =
    difMin - difHour * 60 < 10
      ? "0" + (difMin - difHour * 60)
      : difMin - difHour * 60;
  sec.textContent =
    difSec - difMin * 60 < 10
      ? "0" + (difSec - difMin * 60)
      : difSec - difMin * 60;
}, 1000);

var bronBtn = document.getElementById("bronbtn");
var form = document.querySelector("#form");
var iconCancel = document.getElementById("cancel");
var lastBtn = document.getElementById("lastbtn");
var payment = document.getElementById("payment");
var pay = document.getElementById("pay");
var buyTicketTwo = document.getElementById("buyTicketTwo");
var buyTicket = document.getElementById("buyTicket");
var buyTicketThree = document.getElementById("buyTicketThree");
var cheapTicket = document.getElementById("cheapTicket");
var cheapTicketTwo = document.getElementById("cheapTicketTwo");

bronBtn.addEventListener("click", () => {
  form.style.display = "block";
});

iconCancel.addEventListener("click", () => {
  form.style.display = "none";
});

lastBtn.addEventListener("click", (e) => {
  e.preventDefault();
  form.style.display = "none";
  payment.style.display = "none";
});

pay.addEventListener("click", (e) => {
  e.preventDefault();
  form.style.display = "none";
  payment.style.display = "flex";
});

buyTicketTwo.addEventListener("click", (e) => {
  e.preventDefault();
  form.style.display = "block";
});
buyTicket.addEventListener("click", (e) => {
  e.preventDefault();
  form.style.display = "block";
});
buyTicketThree.addEventListener("click", (e) => {
  e.preventDefault();
  form.style.display = "block";
});
cheapTicket.addEventListener("click", (e) => {
  e.preventDefault();
  form.style.display = "block";
});
cheapTicketTwo.addEventListener("click", (e) => {
  e.preventDefault();
  form.style.display = "block";
});

var counter = document.getElementById("counter");
var result = document.getElementById("result");
var biznes = document.getElementById("biznes");
var lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "uz";

var person = [
  {
    id: 1,
    job: "Бизнесмен",
    price: 0,
    defaultPrice: 40,
    count: 0,
  },
  {
    id: 2,
    job: "Ходим",
    price: 0,
    defaultPrice: 40,
    count: 0,
  },
  {
    id: 3,
    job: "Бошқарувчи",
    price: 0,
    defaultPrice: 80,
    count: 0,
  },
  {
    id: 4,
    job: "Тадбиркор ",
    price: 0,
    defaultPrice: 200,
    count: 0,
  },
];

function drawBiznes(personList) {
  var tempStr = "";
  personList.forEach((i, index) => {
    tempStr += `
        <div class="bussiness" id="biznes">
        <h1>${i.job}</h1>
                <div class="example">
                  <div class="counter">
                    <button onclick="changeBtn(inc, ${
                      i.id
                    })" id="inc">-</button>
                    <span id=${i.id} >${i.count}</span>
                    <button onclick="changeBtn(dec, ${
                      i.id
                    })" id="dec" >+</button>
                  </div>
                  <div class="result" id=result${i.id}>${
      i.price === 0 ? "" : i.price + " $"
    }</div>
                </div>
                </div>
        `;
  });

  biznes.innerHTML = tempStr;
}
function totalPrice(person) {
  const initialValue = 0;
  let sumWithInitial = person.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    initialValue
  );
  document.querySelector(".res").innerHTML = sumWithInitial + " $";
}
totalPrice(person);
drawBiznes(person);

function changeBtn(e, id) {
  person = person.map((item, index) => {
    if (item.id === id) {
      return {
        ...item,
        count:
          e[index].id === "inc" && item.count > 0
            ? item.count - 1
            : e[index].id === "dec"
            ? item.count + 1
            : 0,
        price:
          (e[index].id === "inc" && item.count > 0
            ? item.count - 1
            : e[index].id === "dec"
            ? item.count + 1
            : 0) * item.defaultPrice,
      };
    } else {
      return item;
    }
  });
  drawBiznes(person);
  totalPrice(person);
}
