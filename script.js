// const months = ["January", "February", "March", "April", "May", "June", "July",
//     "August", "September", "October", "November", "December"];
let time = new Date()
let ind = 0
let isadd = true

timethis = `${time.getFullYear()} ${time.getMonth()} ${time.getDate()}`

console.log(timethis);


if (!localStorage.getItem("notes")){
    localStorage.setItem("notes",JSON.stringify([]))
}

function getnotelocal(){

  return  JSON.parse(localStorage.getItem("notes"))
}
function setlocal(input_arry){

    localStorage.setItem("notes",JSON.stringify(input_arry))
}
function elG (){

  
  let listnotes = getnotelocal()
  
  document.querySelectorAll(".note").forEach(noteElm => noteElm.remove())
  listnotes.forEach((element , index )=> {
     

      
  let noteELEM = `      <li class="note">
  <div class="details">
    <p>${element.title}</p>
    <span>${element.des}</span>
  </div>
  <div class="bottom-content">
    <span>${element.time}</span>
    <div class="settings ">
      <i class="fa-solid fa-ellipsis" onclick="btnrm(this)"></i>
      <ul class="menu">
        <li onclick="edititem(${index})">
          <i class="fa-solid fa-pen"></i>Edit
        </li>
        <li onclick="delitem(${index})">
          <i class="fa-solid fa-trash"></i>Delete
        </li>
      </ul>
    </div>
  </div>
</li>`
      

document.querySelector(".wrapper").insertAdjacentHTML("beforeend",noteELEM)

  });

}

function show_popup (){
  document.querySelector(".popup-box").classList.add("show")
  document.querySelector("#pt").textContent="add note"
  document.querySelector("#p-b").textContent="add note"
}

function closePOP (){
    document.querySelector(".popup-box").classList.remove("show")
    document.querySelector("#inpt").value  =``
document.querySelector("#inpd").value = ``
}
document.querySelector(".uil-times").addEventListener("click", closePOP)
document.addEventListener("click", (event) => {
  
  if (!event.target.closest(".settings")) {
    document.querySelectorAll(".settings").forEach(elm=>elm.classList.remove("show"))
  }
});
function delitem (index){
  
let listnotes = getnotelocal()

listnotes.splice(index, 1)

setlocal(listnotes)
elG()
  }
function addnt (){
  let listnotes = getnotelocal()
    let inpt = {title : document.querySelector("#inpt").value, des:document.querySelector("#inpd").value , time : timethis} 
    listnotes.push(inpt)
    setlocal(listnotes)
    elG()  
    closePOP()

}

function editedd (){
  let listnotes = getnotelocal()    
  
    listnotes[ind].title = document.querySelector("#inpt").value
    listnotes[ind].des = document.querySelector("#inpd").value
    setlocal(listnotes)
    elG()
    document.querySelector(".popup-box").classList.remove("show")


}

function btnrm(th){
  document.querySelectorAll(".settings").forEach(elm=>elm.classList.remove("show"))
  th.parentElement.classList.add("show")
  isadd = false
}

document.querySelector(".add-box").addEventListener("click", ()=>{
  isadd = true
    show_popup()
        document.querySelector("#inpt").value  =``
document.querySelector("#inpd").value = ``
  }
  
  
)



  function edititem (index){
    console.log('EDITED');
    
    ind = index
    let listnotes = getnotelocal()
    document.querySelector("#inpt").value = listnotes[index].title
    document.querySelector("#inpd").value = listnotes[index].des
    show_popup()    
}




document.querySelector("#p-b").addEventListener("click", (e) => {

  if(isadd){
    addnt ()
  }else{
   
    editedd ()
  } 
  }) 

elG()