const sifre = document.getElementById("sifre");
const sifreTekrar = document.getElementById("sifre-tekrar");
const signupBtn = document.querySelector("#SignupBtn");
const inputArea = document.querySelector(".input-area");

signupBtn.addEventListener("click", () => {
  if (sifreTekrar.value == sifre.value) {
    UiAlert("Giriş Başarılı Yönlendiriliyorsunuz", "info");
  } else {
    UiAlert("Şifreler Eşleşmiyor", "warning");
  }
});

/*
 <div class="alert alert-warning" role="alert">
          A simple warning alert—check it out!
        </div>
        */
function UiAlert(message, alert) {
  const div = document.createElement("div");
  div.innerHTML = `${message}`;
  div.className = `alert alert-${alert}`;
  inputArea.appendChild(div);

  setTimeout(() => {
    div.style.display = "none";
  }, 2000);
}
