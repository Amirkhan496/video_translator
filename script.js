const translateBtn = document.getElementById("translateBtn");
const notification = document.createElement("div");
notification.id = "notification";

translateBtn.addEventListener("click", () => {
  // Анимация кнопки при нажатии
  translateBtn.classList.add("active");
  
  // Создаем и показываем уведомление
  notification.textContent = "Перевод выполняется...";
  notification.className = "notification";
  document.body.appendChild(notification);
  
  // Убираем класс active через 300 мс
  setTimeout(() => {
    translateBtn.classList.remove("active");
  }, 300);
  
  // Убираем уведомление через 2.5 секунды
  setTimeout(() => {
    notification.className = "notification-hidden";
  }, 2500);
});