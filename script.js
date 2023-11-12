document.getElementById('direction').onclick= function(){
    document.getElementById('container').classList.toggle('activeMenu');
}
// coding bt codinglab
const image=document.querySelector("img")
const input= document.querySelector("input")
input.addEventListener("change", ()=>{
    image.src= URL.createObjectURL(input.files[0]);
});