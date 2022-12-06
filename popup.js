let snow = document.getElementById("snow");
// когда кнопка нажата — находим активную вкладку и запускаем нужную функцию
snow.addEventListener("click", async () => {
    alert("Кролик номер ");
    // получаем доступ к активной вкладке
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    // выполняем скрипт, если выполнен промис
    chrome.scripting.executeScript({
        // скрипт будет выполняться во вкладке, которую нашли на предыдущем этапе
        target: { tabId: tab.id, allFrames: true},
        // вызываем функцию, в которой лежит запуск снежинок
        function: snowFall
    });
});
function snowFall() {
   alert("Что-то я сделала!");
}