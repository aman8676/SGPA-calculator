document.addEventListener("DOMContentLoaded", function () {
  let photo = document.getElementById("photo");
  let body = document.body;
  let menubar = document.getElementById("menu-btn");
  let sidebar = document.getElementById("sidebar");
  let addnew = document.getElementById("add");
  photo.addEventListener("click", function () {
    body.classList.toggle("dark_mode");
    if (photo.src.includes("sun.jpeg")) {
      photo.src = "images/night.png"; 
    } else {
      photo.src = "images/sun.jpeg";
    }
  });
  menubar.addEventListener("click", function () {
    let sidemenu = getComputedStyle(sidebar);//get computedby is used for external css 
    if (sidemenu.left === "0px") {
      sidebar.style.left = "-250px";
      menubar.src = "images/menu.jpg";
    } else {
      sidebar.style.left = "0px";
      menubar.src = "images/close.jpg";
    }
  });
  addnew.addEventListener("click", function () {
    let body=document.body;
    let addcol = document.querySelector(".column-box").cloneNode(true); // Clone first column-box
    body.appendChild(addcol); // Append cloned column-box
    body.appendChild(add);
    body.appendChild(submitlast);
    body.appendChild(displaysgpa);

  });
});
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let input = document.getElementById("name").value;
  document.getElementById("display").textContent = `  welcome ${input}`;
});

document.getElementById("menu-btn").addEventListener("click", function () {
  document.getElementById("sidebar").style.left = "0px";
});

const gradepoints={
  "O":10,
  "E":9,
  "A":8,
  "B":7,
  "C":6,
  "D":5,
  "F":4
};
let sgpa=0;
function calculatesgpa(){
  let totalgradepoints = 0;
  let totalcredits = 0;

  let rows=document.querySelectorAll(".column-box");

  rows.forEach(row=>{
    let gradeselect=row.querySelector(".grade");
    let creditselect=row.querySelector(".credits");

    let grade=gradeselect.value;
    let credit=parseInt(creditselect.value);
    
    if(grade in gradepoints && credit>0)
    {
      totalgradepoints+=gradepoints[grade]*credit;
      totalcredits+=credit;
    } 
    
  });

    sgpa = totalcredits > 0 ? (totalgradepoints / totalcredits).toFixed(3) : 0;
 }

 document.addEventListener("DOMContentLoaded", function () {
   document.querySelectorAll(".grade, .credits").forEach((select) => {
     select.addEventListener("change", calculatesgpa);
   });
 });
 document.getElementById("final").addEventListener("click",function(event){
    event.preventDefault();
    calculatesgpa();
    let name = document.getElementById("name").value;
    let inp=document.getElementById("displaysgpa");
    if(sgpa>0)
    {  
    inp.textContent=`hey ${name} your sgpa is ${sgpa}`;
    }
    else
    {
      inp.textContent = `hey ${name} please enter full details`;
    }
 });

 



