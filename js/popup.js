      var callOrderLink = document.querySelector(".map-contacts-btn");
      var callOrderWrap = document.querySelector(".popup-callorder-wrap");
      var callOrderPopup = callOrderWrap.querySelector(".popup-callorder-content");
      var callOrderClose = callOrderWrap.querySelector(".popup-close");
      var callOrderOverlay = callOrderWrap.querySelector(".popup-overlay");
      var form = callOrderWrap.querySelector("form");
      var userName = callOrderWrap.querySelector("[name=user-name]");
      var email = callOrderWrap.querySelector("[name=email]");
      var info = callOrderWrap.querySelector("[name=info]");
      var userNameStorage = localStorage.getItem("userName");
      var emailStorage = localStorage.getItem("email");
      
      callOrderLink.addEventListener("click", function(event) {
        event.preventDefault();
        callOrderWrap.classList.add("popup-window-show");
        
        if (userNameStorage && emailStorage) {
          userName.value = userNameStorage;
          email.value = emailStorage;
          info.focus();
        } else {
          userName.focus();
        }
        
      });
      
      callOrderClose.addEventListener("click", function(event) {
        event.preventDefault();
        callOrderWrap.classList.remove("popup-window-show");
        callOrderPopup.classList.remove("popup-error");
      });
      
      callOrderOverlay.addEventListener("click", function(event) {
        event.preventDefault();
        callOrderWrap.classList.remove("popup-window-show");
        callOrderPopup.classList.remove("popup-error");
      });
      
      form.addEventListener("submit", function(event) {
        if (!userName.value || !email.value || !info.value) {
          event.preventDefault();
          callOrderPopup.classList.remove("popup-error");
          callOrderPopup.offsetWidth = callOrderPopup.offsetWidth;
          callOrderPopup.classList.add("popup-error");
        } else {
          localStorage.setItem("userName", userName.value);
          localStorage.setItem("email", email.value);
        }
      });
      
      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (callOrderWrap.classList.contains("popup-window-show")) {
            callOrderWrap.classList.remove("popup-window-show");
            callOrderPopup.classList.remove("popup-error");
          }
        }
      });
      