const feedbackForm = document.querySelector('.feedback-form');
const LOCAL_KEY = "feedback-form-state";

feedbackForm.addEventListener('input', saveInputInLocalStorege);
feedbackForm.addEventListener('submit', onSubmitBtn);

let dataLocalKey = {};

// якщо є данні в локальному сховищі записуємл їх в наш обєкт
if (localStorage.getItem(LOCAL_KEY)) {
    const localKeyName = localStorage.getItem(LOCAL_KEY);
    dataLocalKey = JSON.parse(localKeyName);
};

//якщо є данні в локальному сховищі вставляєсо їх в відповідні поля
if (localStorage.getItem(LOCAL_KEY)) {
    if (dataLocalKey.email !== undefined) {
        feedbackForm[0].value = dataLocalKey.email;
    };

    if (dataLocalKey.message !== undefined) {
        feedbackForm[1].value = dataLocalKey.message;
    }
}

// колбек який записує данні в локальне сховище
function saveInputInLocalStorege(e) {
    dataLocalKey[e.target.name] = e.target.value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(dataLocalKey));
};

//колбек, при натискані на сабміт виводимо в консоль данні форми та стираємо поля вводу та чистимо локал сторедж
function onSubmitBtn(e) {
    e.preventDefault();
    // якщо при натисканні кнопки сабміт немає данних в полі емайл продовжуємо код, якщо є, відправляємо данні та стираємо поля і наші данні в локар сторедж
    if (dataLocalKey.email !== undefined) {
        console.log(dataLocalKey.email)
        // якщо в полі меседж пусто продовєжуємо код
        if (dataLocalKey.message !== undefined) {
            console.log(dataLocalKey.message)
        }

        localStorage.removeItem(LOCAL_KEY);
        e.currentTarget.reset();
    }
};



