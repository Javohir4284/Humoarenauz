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
const language = {
  uz: {
    buyTicket: "Чипта харид қилиш",
    buyTicketTwo: "Чипта харид қилиш",
    buyTicketThree: "Чипта харид қилиш",
    inviteSpiker: "Спикер таклиф қилиш",
    mainText:
      "Ўзбекистонда илк бора бизнесда реклама, сотув ва системалаштиришга оид бўлган халқаро бизнес форум",
    bronbtn: "Жойни банд қилиш",
    aksiyaLineOne: "Акция 10 майгача",
    aksiyaLineTwo: "1 та билет харид қилин ва",
    aksiyaLineThree: "2 чисига мутлақо бепул эга бўлинг",
    megaTrening: "МЕГАТРЕНИНГ 2022 га ХУШ КЕЛИБСИЗ",
    bussiness:
      "Тадбиркор, топ-менеджер ва бошқарувчиларни бирлаштирувчи халқаро миқиёсдаги бизнес форум",
    bussinessman: "бизнес эгалари ва топ-менеджерлар",
    speaker: "халқаро бизнес-спикерлар",
    tools: "фақат бизнесни ривожлантириш учун инструментлар",
    international: "12 та халқаро ва махаллий бизнес спикерлар",
    forForum: "Форум учун спикерларни таклиф қилишни истайсизми ?",
    auditoria:
      "Биз аудитория қизиқишларини ўрганишга доим тайёрмиз. Ўзингиз форумда кўриши истаган спикерни таклиф этинг",
    event: "2 кун эсдан чиқмайдиган тадбир",
    experience: "Тажриба",
    doExperince:
      "Катта тадбиркорлар таджрибасидан ўтган инструментларни ўз бизнесингизда қўлланг",
    max: "Максимал даражадаги мотивация олиб кетинг",
    everySpeaker: "Хар бир спикер сизни олдинга интилишга ундайди",
    trend: "2022-2023 йилда бизнесда трендлар хақида биринчи бўлиб билиб олинг",
    worldChange:
      "Дунёдаги барча ўзгаришларни биринчи бўлиб бизнесизда қўлланг ва конкурентларингиздан олдинда бўлинг",
    sale: "Сотув",
    system: "Системалаштириш",
    automat: "Автоматлаштириш",
    financial: " Молия",
    management: "Бошқарув",
    mainSponsor: "Бош ҳомий",
    formalSponsor: "Расмий ҳомий",
    mediaPartner: "Медиаҳамкор",
    partner: "Ҳамкорлар",
    bePartner: "Хомий бўлиш",
    priceTicket: "Чипта нархлари",
    staff: "Ходим",
    twoDay: "2 кун",
    twoday: "2 кун",
    twoDays: "2 кун",
    twoFloor: "2 қаватдан жой",
    manager: "Бошқарувчи",
    oneFloor: "1 қаватдан жой",
    material: "Тарқатма материаллар",
    materials: "Тарқатма материаллар",
    materialt: "Тарқатма материаллар",
    biznesmen: "Тадбиркор",
    scene: "Саҳна атрофида 1 қаторлар",
    scenes: "Саҳна атрофида 2-10 қаторлар",
    banket: "Тадбирдан сўнг БАНКЕТ",
    cheapTicket: "1 чипта олинг 2 сини совға қиламиз",
    cheapTicketTwo: "1 чипта олинг 2 сини совға қиламиз",
    where: "Қаерда бўлади ? ",
    thatday: "1-2 июн",
    thatDay: "1-2 июн",
    thatDays: "1-2 июн",
    location: " Humo Arena, Тошкент",
    locate: " Humo Arena, Тошкент",
    locations: " Humo Arena, Тошкент",
    question: "Савол ва таклифлар учун рақам",
    join: "Акцияда иштирок этинг 1 чипта олинг 2 сини совға қиламиз",
    link: "Боғланиш",
    endAksiya: "Акция вақти тугамоқда:",
    dayAksiya: "кун",
    hourAksiya: "соат",
    minAksiya: "дақиқа",
    secAksiya: "сония",
    sponpart: "Хомийлар ва хамкор",
    footInvite: "Спикер таклиф қилиш",
    footPartner: "Ҳамкор бўлиш",
    footSpeaker: "Спикерлар",
    footMain: "Асосий",
  },

  ru: {
    buyTicket: "Купить билет",
    buyTicketTwo: "Купить билет",
    buyTicketThree: "Купить билет",
    inviteSpiker: "Предложить спикера",
    mainText:
      "Впервые в Узбекистане, самый масштабный международный бизнес форму по рекламе, продажам и систематизации бизнеса.",
    bronbtn: "Забронировать место",
    aksiyaLineThree: "до 10 мая",
    aksiyaLineTwo: "по цене 1 го",
    aksiyaLineOne: "Акция. 2 билета",
    megaTrening: "ДОБРО ПОЖАЛОВАТЬ В МЕГАТРЕНИНГ 2022",
    bussiness:
      "Международный бизнес форум который объединяет бизнесменов, топ-менеджеров и управленцев",
    bussinessman: "предпринимателей и топ-менеджеров",
    speaker: "международных спикеров",
    tools: "дня инструменты предназначенные только для развития бизнеса",
    international: "12 международных и местных спикеров",
    forForum: "Хотите предложить бизнес спикера ? ",
    auditoria: "Мы всегда готовы рассмотреть пожелания нашей аудитории. ",
    event: "2 дневный НЕЗАБЫВАЕМЫХ ДНЯ мероприятие",
    experience: "Опыт",
    doExperince:
      "Только практические инструменты которые дают реальные результаты",
    max: "Вы получите максимальную мотивацию которая двинет Вас ещё выше по олимпу бизнеса",
    everySpeaker:
      "Каждый бизнес спикер даст Вам энергию которая даст возможность добиться лучших результатов",
    trend: "Узнайте первыми о мировых бизнес трендах 2022-2023 гг",
    worldChange:
      "Будьте готовы к мировым изменениям порядки и обгоните своих конкурентов",
    sale: "Продажа",
    system: "Систематизация",
    automat: "Aвтоматизация",
    financial: "Финансы",
    management: "Управления",
    mainSponsor: "Главный спонсор",
    formalSponsor: "Официальный спонсор",
    mediaPartner: "Мадиапартнер",
    partner: "Партнеры",
    bePartner: "Стать партенром",
    priceTicket: "Цены билетов",
    staff: "Сотрудник",
    twoDay: "2 дня",
    twoday: "2 дня",
    twoDays: "2 дня",
    twodays: "2 дня",
    twoFloor: "2 этаж",
    manager: "Управленец",
    oneFloor: "1 этаж",
    material: "Рaздаточные материаллы",
    materials: "Рaздаточные материаллы",
    materialt: "Рaздаточные материаллы",
    biznesmen: "Предприниматель",
    scene: "1 ряд вокруг сцены",
    scenes: "2-10 ряды вокруг сцены",
    banket: "Банкет после мероприятие",
    cheapTicket: "2 билета по цене 1 го",
    cheapTicketTwo: "2 билета по цене 1 го",
    where: "Где будет проходить? ",
    thatDay: "1-2 июня",
    thatday: "1-2 июня",
    thatDays: "1-2 июня",
    location: "Humo Arena, Ташкент",
    locate: "Humo Arena, Ташкент",
    locations: "Humo Arena, Ташкент",
    question: "По вопрсам обращаться по номеру ",
    join: "Учуавствуйте в акции 2 билета по цене 1 го",
    link: "СВЯЗАТЬСЯ",
    endAksiya: "До конца акции осталось :",
    dayAksiya: "дней",
    hourAksiya: "часов",
    minAksiya: "минут",
    secAksiya: "секунд",
    sponpart: "СПОНСОРЫ И ПАРТНЕРЫ",
    footInvite: "Предложить спикера",
    footPartner: "Стать партнером",
    footSpeaker: "Спикеры",
    footMain: "Главный",
  },
};
const id = [
  "buyTicket",
  "buyTicketTwo",
  "buyTicketThree",
  "cheapTicketTwo",
  "inviteSpiker",
  "mainText",
  "bronbtn",
  "aksiyaLineOne",
  "aksiyaLineTwo",
  "aksiyaLineThree",
  "megaTrening",
  "bussiness",
  "bussinessman",
  "speaker",
  "tools",
  "international",
  "forForum",
  "auditoria",
  "event",
  "experience",
  "doExperince",
  "max",
  "everySpeaker",
  "trend",
  "worldChange",
  "sale",
  "system",
  "automat",
  "financial",
  "management",
  "mainSponsor",
  "formalSponsor",
  "mediaPartner",
  "partner",
  "bePartner",
  "priceTicket",
  "staff",
  "twoDay",
  "twoday",
  "twoDays",
  "twodays",
  "twoFloor",
  "manager",
  "oneFloor",
  "material",
  "materials",
  "materialt",
  "biznesmen",
  "scene",
  "scenes",
  "banket",
  "cheapTicket",
  "where",
  "thatday",
  "thatDay",
  "thatDays",
  "location",
  "locate",
  "locations",
  "question",
  "join",
  "link",
  "endAksiya",
  "dayAksiya",
  "hourAksiya",
  "minAksiya",
  "secAksiya",
  "sponpart",
  "footInvite",
  "footPartner",
  "footSpeaker",
  "footMain",
];
//

function drawBiznes(personList) {
  var tempStr = "";
  personList.forEach((i, index) => {
    tempStr += `
        <div class="bussiness" id="biznes">
        <h1>${i.job}</h1>
                <div class="example">
                  <div class="counter">
                    <button onclick="changeBtn(inc, ${i.id
      })" id="inc">-</button>
                    <span id=${i.id} >${i.count}</span>
                    <button onclick="changeBtn(dec, ${i.id
      })" id="dec" >+</button>
                  </div>
                  <div class="result" id=result${i.id}>${i.price === 0 ? "" : i.price + " $"
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

document.getElementById("language").addEventListener("click", (e) => {
  console.log(lang);
  if (localStorage.getItem("lang") === "ru") {
    localStorage.setItem("lang", "uz");
    document.getElementById("language").src = "./assets//icons/uz.svg";
  } else {
    localStorage.setItem("lang", "ru");
    document.getElementById("language").src = "./assets//icons/rus.png";
  }
  id.forEach((item) => {
    try {
      document.getElementById(item).textContent =
        language[
        localStorage.getItem("lang") ? localStorage.getItem("lang") : "uz"
        ][item];
    } catch (e) { }
  });
});

function textContent() {
  id.forEach((item) => {
    try {
      document.getElementById(item).textContent =
        language[
        localStorage.getItem("lang") ? localStorage.getItem("lang") : "uz"
        ][item];
    } catch (e) { }
  });
  if (localStorage.getItem("lang")) {
    if (localStorage.getItem("lang") === "uz") {
      document.getElementById("language").src = "./assets//icons/uz.svg";
    } else {
      document.getElementById("language").src = "./assets//icons/rus.png";
    }
  } else {
    document.getElementById("language").src = "./assets//icons/uz.svg";
  }
}
textContent();
