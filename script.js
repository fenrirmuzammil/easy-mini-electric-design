const $=s=>document.querySelector(s);
const cartCount=$("#cartCount"), toast=$("#toast"), modal=$("#modal");

function notify(msg){
  toast.textContent=msg; toast.classList.add("show");
  clearTimeout(notify.t); notify.t=setTimeout(()=>toast.classList.remove("show"),1700);
}
function addCart(){
  const n=Number(cartCount.textContent||0)+1;
  cartCount.textContent=n; cartCount.classList.add("show");
  notify("MINI Electric added to your build");
}
$("#buyBtn").addEventListener("click",()=>modal.classList.add("show"));
$("#confirmBtn").addEventListener("click",()=>{modal.classList.remove("show");addCart()});
$("#closeModal").addEventListener("click",()=>modal.classList.remove("show"));
$("#cartBtn").addEventListener("click",()=>notify(cartCount.textContent==="0"?"Your build is empty":`${cartCount.textContent} MINI configuration item ready`));
$("#viewBtn").addEventListener("click",()=>notify("360° preview activated"));
$("#videoBtn").addEventListener("click",()=>notify("Video preview opened"));
$("#menuBtn").addEventListener("click",()=>notify("Navigation menu opened"));
document.addEventListener("keydown",e=>{if(e.key==="Escape")modal.classList.remove("show")});
