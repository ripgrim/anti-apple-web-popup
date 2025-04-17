function do_anti_apple_popup(){let e=document.createElement("div");e.innerHTML=`
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; background: #fff; box-shadow: 0px 0px 10px rgba(0,0,0,0.3); border-radius: 10px; z-index: 1000; text-align: center;">
            <h2>Hello! It appears that you are using an Apple device.</h2>
            <p>If you're using an Apple device, nice!</p>
            <button id="apple-popup-dismiss-btn" style="margin-right: 10px;">OK</button>
            <button id="apple-popup-dont-show-again-btn">Don't show again</button>
        </div>
    `,document.body.appendChild(e),document.getElementById("apple-popup-dismiss-btn").addEventListener("click",()=>{e.remove()}),document.getElementById("apple-popup-dont-show-again-btn").addEventListener("click",()=>{let p=new Date;p.setTime(p.getTime()+6048e5),document.cookie=`hideApplePopup=true; expires=${p.toUTCString()}; path=/`,e.remove()})}function anti_apple_popup_main(){(/Mac|iPhone|iPod|iPad/i.test(navigator.userAgent)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>0&&!document.cookie.split("; ").find(e=>e.startsWith("hideApplePopup")))&&do_anti_apple_popup()}document.addEventListener("DOMContentLoaded",anti_apple_popup_main);
