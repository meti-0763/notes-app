// const months = ["January", "February", "March", "April", "May", "June", "July",
//     "August", "September", "October", "November", "December"];


if (!localStorage.getItem("notes")){
    localStorage.setItem("notes",JSON.stringify([]))
}



function noteup (data){
    let cvcv = JSON.parse(localStorage.getItem("notes"))
    cvcv.push(data)
    localStorage.setItem("notes",JSON.stringify(cvcv))
    console.log(cvcv)
}


document.querySelector(".add-box").addEventListener("click", ()=> {

document.querySelector(".popup-box").classList.add("show")
 
document.querySelector("#pt").textContent="add note"
document.querySelector("#p-b").textContent="add note"
document.querySelector("#p-b").addEventListener("click", () => {
    
    let inpt = {title : document.querySelector("#inpt").value, des:document.querySelector("#inpd").value , time : "time"} 

    noteup(inpt)
    elG()
    closePOP()

})

document.querySelector(".uil-times").addEventListener("click", closePOP)
})


function closePOP (){
    document.querySelector(".popup-box").classList.remove("show")
    document.querySelector("#inpt").value =""
    document.querySelector("#inpd").value =""
}

function elG (){

    
    let cvcv = JSON.parse(localStorage.getItem("notes"))

    cvcv.forEach((element , index )=> {
       
console.log(index , element);

        
  //   let noteELEM = `      <li class="note">
  //   <div class="details">
  //     <p>${element.title}</p>
  //     <span>${element.des}</span>
  //   </div>
  //   <div class="bottom-content">
  //     <span>${element.time}</span>
  //     <div class="settings ">
  //       <i class="uil uil-ellipsis-h"></i>
  //       <ul class="menu  ">
  //         <li>
  //           <i class="uil uil-pen"></i>Edit
  //         </li>
  //         <li>
  //           <i class="uil uil-trash"></i>Delete
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </li>`
        

  // document.querySelector(".wrapper").insertAdjacentHTML("beforeend",noteELEM)


    });



}

elG()