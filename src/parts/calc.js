function calc() {
    
    //calc
    let priceButtons = document.querySelectorAll(".popup_calc_btn"),
    calc = document.querySelector(".popup_calc"),
    calcProfile = document.querySelector(".popup_calc_profile"),
    calcEnd = document.querySelector(".popup_calc_end"),
    calcNextBtn = document.querySelector(".popup_calc_button"),
    calcEndClose = document.querySelector('.popup_calc_end_close'),
    calcProfileNextBtn = document.querySelector(".popup_calc_profile_button"),
    closePop = document.querySelectorAll(".popup_calc_close"),
    popups = [calc, calcProfile, calcEnd],
    balconIcons = document.querySelectorAll(".balcon_icons > a > img"),
    balconBig = document.querySelectorAll(".big_img > img"),
    coldBox = document.querySelector(".cold"),
    warmBox = document.querySelector(".warm"),
    formCalc = document.querySelector(".form_calc"),
    formData = new FormData(),
    statusMessage = document.createElement("div"),
    message = {
      loading: "Loading...",
      success: "Мы скоро с вами свяжемся!",
      failure: "Произошла ошибка"
    };

  priceButtons.forEach(btn => {

    btn.addEventListener("click", () => {
      console.log('price btn')
      calc.style.display = "block";

    });
  });

  calcEndClose.addEventListener('click', function() {
            calcEnd.style.display = "none";
            document.body.style.overflow = '';
        });

  closePop.forEach(x => {
    x.addEventListener("click", () => {
      popups.forEach(function (item) {
        setTimeout(() => {
          item.style.display = "none";

        }, 980);

        clearInputs();
      });
    });
  });

  balconIcons.forEach((icon, index) => {
    icon.addEventListener("click", event => {
      event.preventDefault();
      balconIcons.forEach(icon => {
        icon.style.width = "20%";
        icon.classList.remove("choosen");
      });
      balconBig.forEach(img => {
        img.style.display = "none";
      });
      event.target.style.width = "30%";
      event.target.classList.add("choosen");
      balconBig[index].style.display = "inline-block";
    });
  });

  calcNextBtn.addEventListener("click", () => {
    let width = document.querySelector("#width").value,
      height = document.querySelector("#height").value,
      type = document.querySelector(".choosen");

    if (
      width == "" ||
      height == "" ||
      type == null ||
      width == "0" ||
      height == "0"
    ) {
      alert("Введите высоту и ширину вашего балкона");
    } else {
      formData.append("form", type.alt);
      formData.append("width", width);
      formData.append("height", height);
      calc.style.display = "none";
      calcProfile.style.display = "block";
    }
  });

  coldBox.addEventListener("click", () => {
    warmBox.checked = false;
  });

  warmBox.addEventListener("click", () => {
    coldBox.checked = false;
  });

  calcProfileNextBtn.addEventListener("click", () => {
    let viewType = document.querySelector("#view_type").value;

    if (!warmBox.checked && !coldBox.checked) {
      alert("Выберите только один тип профиля для рассчета.");
    } else {
      if (coldBox.checked) {
        formData.append("profile_type", "cold");
      } else {
        formData.append("profile_type", "warm");
      }
      formData.append("view_type", viewType);
      calcProfile.style.display = "none";
      calcEnd.style.display = "block";
    }
  });

  function clearInputs() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach(function (input) {
      input.value = "";
    });
    formData = new FormData();
    setTimeout(function () {
      statusMessage.innerHTML = "";
    }, 10000);
  }

  formCalc.addEventListener("submit", event => {
    event.preventDefault();
    let name = document.querySelector("#calc_user_name").value,
      phone = document.querySelector("#calc_phone").value;

    formData.append("name", name);
    formData.append("phone", phone);

    formCalc.appendChild(statusMessage);

    function postData(data) {
      return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();

        request.open("POST", "server.php");
        request.setRequestHeader(
          "Content-Type",
          "application/json; charset=utf-8"
        );

        request.onreadystatechange = () => {
          if (request.readyState < 4) {
            resolve();
          } else if (request.readyState === 4) {
            if (request.status == 200 && request.status < 300) {
              resolve();
            }
          } else {
            reject();
          }
        };
        request.send(data);
      });
    }
    postData(formData)
      .then(() => (statusMessage.innerHTML = message.loading))
      .then(() => (statusMessage.innerHTML = message.success))
      .catch(() => (statusMessage.innerHTML = message.failure))
      .then(clearInputs);
  });
}

module.exports = calc;