//  this part is for dynamic dropdown list
let institutionType= document.getElementById("typOfIns");
let studentClassOrSem = document.getElementById("stClassorSem");

const schoolCollegeUniversityClass = {
  school: [
    "Class 1","Class 2","Class 3","Class 4","Class 5","Class 6","Class 7","Class 8","Class 9","Class 10"],

college: ["B.A Semester 1","B.A Semester 2","B.A Semester 3","B.A Semester 4","B.A Semester 5","B.A Semester 6","B.A Semester 7","B.A Semester 8"],

university: ["M.A Semester 1","M.A Semester 2","M.A Semester 3","M.A Semester 4"]
};


institutionType.addEventListener("change", ()=>{
studentClassOrSem.innerHTML=`<option>Select from Below</option>`;

let selectedInsTitution = institutionType.value;

if(selectedInsTitution){
schoolCollegeUniversityClass[selectedInsTitution].forEach((d)=>{
    studentClassOrSem.innerHTML +=`<option value="${d}" class="text-capitalize">${d}</option>`

})
}
})

// marks add row
let addMarksButton = document.getElementById("addMarksBTN");
let marksEntryParentDiv = document.getElementById("marksEntryParent");

addMarksButton.addEventListener("click",(e)=>{
     e.preventDefault();
 marksEntryParentDiv.insertAdjacentHTML("beforeend", `
    <tr>
      <td><input type="text" class="form-control form-control-sm" placeholder="Subject"></td>
      <td><input type="number" class="form-control form-control-sm" placeholder="Full Marks"></td>
      <td><input type="number" class="form-control form-control-sm" placeholder="Marks Obtained"></td>
    </tr>
  `);
  
});


// now generate result sheet

// selecting user input and button
let schoolName = document.getElementById("schoolName");
let schoolAddress = document.getElementById("schoolAddress");
let insESTD = document.getElementById("schoolESTD");
let studentName = document.getElementById("stName");
let studentID = document.getElementById("stId");
let studentDepartment = document.getElementById("stDep");
let studentClass = document.getElementById("stClassorSem");
let marksTable= document.getElementById("tableID");
let generateSheet = document.getElementById("generateSheet");

 

//  selecting tag where user input will be placed 
let showInsName = document.getElementById("toShowINSName");
let showInsAddress = document.getElementById("insAdd");
let showInsESTD = document.getElementById("insEStdshow");
let stNameShow = document.getElementById("stNameShow");
let stIdShow = document.getElementById("stIdShow");
let stDepshow = document.getElementById("stDepshow");
let stclassShow = document.getElementById("stclassShow");

let marksOutputDiv = document.getElementById("putAllnumberRelatedThingsHere");
let totalNum= document.getElementById("totalNumber");
let totalNumObtained = document.getElementById("totalObtainedNumber");
let PassOraFail= document.getElementById("PassOrFail");

generateSheet.addEventListener("click", () => {

showInsName.innerText = schoolName.value.toUpperCase();
showInsAddress.innerText = `ADD : ${schoolAddress.value.toUpperCase()}`;
showInsESTD.innerText = `ESTD : ${insESTD.value.toUpperCase()}`;

stNameShow.innerText = `NAME : ${studentName.value.toUpperCase()}`;
stIdShow.innerText = `ROLL/REG NO : ${studentID.value.toUpperCase()}`;
  if(studentDepartment.value.trim()===""){
stDepshow.innerHTML="DEPARTMENT : NOT APPLICABLE"
  }else{
    stDepshow.innerText = `DEPARTMENT : ${studentDepartment.value.toUpperCase()}`
  }

stclassShow.innerText = `CLASS/SEMESTER : ${studentClass.value.toUpperCase()}`;

let clonedTable = marksTable.cloneNode(true);

let inputs = clonedTable.querySelectorAll("input");

inputs.forEach(input => {
  input.value = input.value.toUpperCase();
});
marksOutputDiv.innerHTML = "";
marksOutputDiv.appendChild(clonedTable);


let rows = marksTable.querySelectorAll("#marksEntryParent tr");


let totalFull = 0;
let totalObtained = 0;

rows.forEach(row => {
  let inputs = row.querySelectorAll("input");

  let full = inputs[1].value;
  let obtained = inputs[2].value;

    if(full === "" || obtained === "") return;


 totalFull += Number(full);
  totalObtained += Number(obtained);

});


  totalNum.innerHTML=`TOTAL MARKS : ${totalFull}`
  totalNumObtained.innerHTML=`TOTAL MARKS OBTAINED : ${totalObtained}`

let passPercentage = Number(prompt("Type Pass Percentage"));


  if(totalObtained/totalFull*100>=passPercentage){
  PassOraFail.innerHTML=`P(Passed)`
}else{
  PassOraFail.innerHTML=`F(Failed)`
}


});