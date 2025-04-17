// const months = ["January", "February", "March", "April", "May", "June", "July",
//     "August", "September", "October", "November", "December"];

let ind = 0

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

    console.log("elG");
    document.querySelectorAll(".note").forEach(noteElm => noteElm.remove())
    
  let listnotes = getnotelocal()

  listnotes.forEach((element , index )=> {
     
// console.log(index);

      
  let noteELEM = `      <li class="note">
  <div class="details">
    <p>${element.title}</p>
    <span>${element.des}</span>
  </div>
  <div class="bottom-content">
    <span>${element.time}</span>
    <div class="settings ">
      <i class="uil uil-ellipsis-h" onclick="btnrm(this)"></i>
      <ul class="menu">
        <li onclick="edititem(${index})">
          <i class="uil uil-pen"></i>Edit
        </li>
        <li onclick="delitem(${index})">
          <i class="uil uil-trash"></i>Delete
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
}
function addnt (){
  let listnotes = getnotelocal()
    let inpt = {title : document.querySelector("#inpt").value, des:document.querySelector("#inpd").value , time : "time"} 
    listnotes.push(inpt)
    setlocal(listnotes)
    elG()  
    closePOP()

}
document.querySelector("#p-b").addEventListener("click", addnt)
document.querySelector(".uil-times").addEventListener("click", closePOP)
document.addEventListener("click", (event) => {
  
  if (!event.target.closest(".settings")) {
    document.querySelectorAll(".settings").forEach(elm=>elm.classList.remove("show"))
  }
});

// function editedd (){
//   let listnotes = getnotelocal()    
//   document.querySelector("#p-b").addEventListener("click", (e) => {
//     listnotes[ind].title = document.querySelector("#inpt").value
//     listnotes[ind].des = document.querySelector("#inpd").value
//     setlocal(listnotes)
//     elG()
//     document.querySelector(".popup-box").classList.remove("show")
//     console.log("FIRD");
    
//     })
// }

function btnrm(th){
  document.querySelectorAll(".settings").forEach(elm=>elm.classList.remove("show"))
  th.parentElement.classList.add("show")
  editedd()
  console.log("btnrm");
  
  let listnotes = getnotelocal()    

  document.querySelector("#p-b").addEventListener("click", (e) => {
    listnotes[ind].title = document.querySelector("#inpt").value
    listnotes[ind].des = document.querySelector("#inpd").value
    setlocal(listnotes)
    elG()
        console.log("FIRD");

    document.querySelector(".popup-box").classList.remove("show")    
    }) 
}

document.querySelector(".add-box").addEventListener("click", ()=>{
        document.querySelector("#inpt").value =""
    document.querySelector("#inpd").value =""
  document.querySelector("#p-b").addEventListener("click", ()=>{
    let listnotes = getnotelocal()
    let inpt = {title : document.querySelector("#inpt").value, des:document.querySelector("#inpd").value , time : "time"} 
    listnotes.push(inpt)
    setlocal(listnotes)
    elG()  
    closePOP()
  })
  show_popup()

}


)

function delitem (index){
  
let listnotes = getnotelocal()

listnotes.splice(index, 1)

setlocal(listnotes)
elG()
  }


  function edititem (index){
    console.log("updatyed");

    ind = index
    
    show_popup()    
}



elG()