var callOrderLink=document.querySelector(".map-contacts-btn"),callOrderWrap=document.querySelector(".popup-callorder-wrap"),callOrderPopup=callOrderWrap.querySelector(".popup-callorder-content"),callOrderClose=callOrderWrap.querySelector(".popup-close"),callOrderOverlay=callOrderWrap.querySelector(".popup-overlay"),form=callOrderWrap.querySelector("form"),userName=callOrderWrap.querySelector("[name=user-name]"),email=callOrderWrap.querySelector("[name=email]"),info=callOrderWrap.querySelector("[name=info]"),userNameStorage=localStorage.getItem("userName"),emailStorage=localStorage.getItem("email");callOrderLink.addEventListener("click",function(e){e.preventDefault(),callOrderWrap.classList.add("popup-window-show"),userNameStorage&&emailStorage?(userName.value=userNameStorage,email.value=emailStorage,info.focus()):userName.focus()}),callOrderClose.addEventListener("click",function(e){e.preventDefault(),callOrderWrap.classList.remove("popup-window-show"),callOrderPopup.classList.remove("popup-error")}),callOrderOverlay.addEventListener("click",function(e){e.preventDefault(),callOrderWrap.classList.remove("popup-window-show"),callOrderPopup.classList.remove("popup-error")}),form.addEventListener("submit",function(e){userName.value&&email.value&&info.value?(localStorage.setItem("userName",userName.value),localStorage.setItem("email",email.value)):(e.preventDefault(),callOrderPopup.classList.remove("popup-error"),callOrderPopup.offsetWidth=callOrderPopup.offsetWidth,callOrderPopup.classList.add("popup-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&callOrderWrap.classList.contains("popup-window-show")&&(callOrderWrap.classList.remove("popup-window-show"),callOrderPopup.classList.remove("popup-error"))});