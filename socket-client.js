var socket = new WebSocket("ws://127.0.0.1:8080");

socket.onopen = function () {
    console.log("Соединение установлено.");
};

socket.onclose = function (event) {
    if (event.wasClean) {
        console.log('Соединение закрыто чисто');
    } else {
        console.log('Обрыв соединения'); // например, "убит" процесс сервера
    }
    console.log('Код: ' + event.code + ' причина: ' + event.reason);
};

socket.onmessage = function (event) {
    try {
        const data = JSON.parse(event.data);
        console.log("Получены данные ", data);
    } catch (e) {
        console.error('Ошибка в расшифровке данных, это не объект? Подробнее:', e);
    }

    // window.GUI.object.DEPOSITE = Number(event.data)
};

socket.onerror = function (error) {
    console.log("Ошибка " + error.message);
};
