
// Here we are taking the id and store in the addbtn variable.
const addbtn = document.querySelector("#add");

//Define updateLSData
const updateLSData = () => {
    const textAreaData = document.querySelectorAll("textarea")
    const notes =[];

    textAreaData.forEach((note)=>{
        return notes.push(note.value)
    })
    console.log(notes);

    localStorage.setItem("notes",JSON.stringify(notes));
}
//Here we are define the function
const addNewNote = (text = "") => {

  const note = document.createElement("div");
  note.classList.add("note");

  const htmldata = `<div class="operation">
     <button class="edit"><i class="fas fa-edit"></i></button>
     <button class="delete"><i class="fas fa-trash-alt"></i></button>
  </div>

  <div class="main ${text ? "" : "hidden"}"></div>
  <textarea class="${text ? "hidden" : ""}"></textarea>`;

 note.insertAdjacentHTML("afterbegin",htmldata);


 //Getting all the references
 const editbtn = note.querySelector(".edit");
 const deletebtn = note.querySelector(".delete");
 const mainDiv = note.querySelector(".main");
 const textArea = note.querySelector("textarea");

 //deleting the note
 deletebtn.addEventListener("click",()=>{
    note.remove();
    updateLSData();
})

//toggle using edit button
textArea.value = text;
mainDiv.innerHTML=text;

editbtn.addEventListener("click",()=>{
    mainDiv.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
})

textArea.addEventListener("change",(e)=>{
    const value = e.target.value;
    mainDiv.innerHTML=value;

    updateLSData();
})



 document.body.appendChild(note);



};

//geeting data from local storage

const notes = JSON.parse(localStorage.getItem("notes"));

if(notes){
    notes.forEach((note)=>{
        return addNewNote(note);
    })
}

//Here we are adding the eventlistner on addbtn variable.And here we pass a callback function so we have to define it before calling it.

addbtn.addEventListener("click", () => {
  addNewNote();
});
 