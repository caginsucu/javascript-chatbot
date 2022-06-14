const input = document.querySelector('input');
const button = document.querySelector('button');
const contentBox = document.querySelector('.bot-content');

const checkMsg = {
    greet: ["merhaba", "selam", "mrb", "slm"],
    services: ["kargom nerede", "kargo bilgileri", "sipariş", "kargo"],
    name: ["isim", "ad", "adin ne", "sen kimsin"],
    weather: ["hava nasil", "hava durumu"]
}

const botAnswers = {
    greet: [
        "Merhaba, size nasıl yardımcı olabilirim?",
        "Selam, lütfen benden istediğiniz işlemi yazınız."
    ],
    services: [
        "Kargonuzla ilgili bilgilere ulaşmaya çalışıyorum", "Kargo bilgilerinizi kontrol ederken lütfen bekleyin", "Siparişinizi kontrol ediyorum.."
    ],
    name: ["Benim adım Tom", "Ben Tom tanıştığımıza sevindim :)"],
    weather: ["Bugün havamı güzelleştirdiğini söyleyebilirim :)"]
}


input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13 && input.value !== "") {
        userMessage();
        contentBox.scrollTo(0, contentBox.scrollHeight);
    }
});

button.addEventListener('click', (e) => {
    if (input.value !== "")
        userMessage();
    contentBox.scrollTo(0, contentBox.scrollHeight);
})



function userMessage() {

    const usrMsgDiv = document.createElement('div');
    const usrMsgText = document.createElement('p');

    usrMsgDiv.classList.add("user-msg", "msg");
    usrMsgText.innerText = input.value;

    usrMsgDiv.appendChild(usrMsgText);
    contentBox.appendChild(usrMsgDiv);

    input.value = "";

    loadMsgAnimation();
    setTimeout(() => { botMessage(usrMsgText.innerText.toLowerCase()) }, 1000)

}


function botMessage(value) {

    let isFound;
    let msgObj;

    for (let i in checkMsg) {
        if (checkMsg[i].includes(value)) {
            isFound = true;
            msgObj = i;
            // console.log(msgObj);
            break;
        } else if (!checkMsg[i].includes(value)) {
            isFound = false
            // console.log(isFound);
        }
    }

    if (isFound === true) {
        const botMsgDiv = document.createElement('div');
        const botMsgText = document.createElement('p');
        const randomAsnwer = Math.floor(Math.random() * botAnswers[msgObj].length);

        botMsgDiv.classList.add('bot-msg', 'msg');
        botMsgText.innerText = botAnswers[msgObj][randomAsnwer];

        botMsgDiv.appendChild(botMsgText);
        contentBox.appendChild(botMsgDiv);
    } else {
        const botMsgDiv = document.createElement('div');
        const botMsgText = document.createElement('p');

        botMsgDiv.classList.add('bot-msg', 'msg');
        botMsgText.innerText = "Söylediğiniz İşlemi Anlayamadım."

        botMsgDiv.appendChild(botMsgText);
        contentBox.appendChild(botMsgDiv);
    }
    contentBox.scrollTo(0, contentBox.scrollHeight);
}

function loadMsgAnimation() {
    const loadDiv = document.createElement('div');
    const loadP = document.createElement('p');

    loadDiv.classList.add('bot-msg', 'msg', 'load-msg');
    loadP.innerHTML = `<span><i class="fa-solid fa-circle"></i></span>
    <span><i class="fa-solid fa-circle"></i></span>
    <span><i class="fa-solid fa-circle"></i></span>
    `

    loadDiv.appendChild(loadP);
    contentBox.appendChild(loadDiv);

    setTimeout(() => { document.querySelector('.load-msg').remove() }, 900)
}

