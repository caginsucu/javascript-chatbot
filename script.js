const input = document.querySelector('input');
const button = document.querySelector('button');
const contentBox = document.querySelector('.bot-content');

const checkMsg = {
    greet: ["merhaba", "selam", "mrb", "slm"]
}

const botAnswers = {
    greet: [
        "Merhaba, size nasıl yardımcı olabilirim?",
        "Selam, lütfen benden istediğiniz işlemi yazınız."
    ]
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

    botMessage(usrMsgText.innerText.toLowerCase());
}


function botMessage(value) {

    let isFound;

    for (let i in checkMsg) {
        if (checkMsg[i].includes(value)) {
            isFound = true;
            console.log(isFound)
        } else {
            isFound = false
            console.log(isFound);
        }
    }

    if (isFound === true) {
        console.log("doğru beee");
    }
}


