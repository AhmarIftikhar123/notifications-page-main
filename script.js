let clear_all = document.getElementById("mark_all");

let notifications = document.getElementById("noti_num");

let unread_msg = document.querySelectorAll(".unread");

let noti_length = unread_msg.length;

clear_all.addEventListener("click", () => {
  unread_msg.forEach((clear) => {
    clear.classList.remove("unread");
  });
  let noti_length = 0;
  notifications.textContent =noti_length;
});

unread_msg.forEach(clear=>{
    clear.addEventListener('click',()=>{
        clear.classList.remove('unread');
      noti_length--;

        notifications.innerHTML = noti_length;
    });

});