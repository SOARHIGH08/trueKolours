let slctRegion = document.querySelector("#slctRegion")


fetch("https://psgc.gitlab.io/api/regions.json")
.then(res => res.json())
.then(data => {

    let regions = ""
    data.forEach(x => {
        regions += `<option value="${x.code}">${x.name}</option>`
    })
    slctRegion.innerHTML = regions;
})
let slctProvince = document.querySelector("#slctProvince")
let getRegion = async(e) => {
    const {value } = e.target
    let res = await fetch(`https://psgc.gitlab.io/api/regions/${value}/provinces.json`);
    console.log(res);
    let data = await res.json();

    console.log(data);
    console.log(data.data);
    let datas = data;
    let province = ""
    datas.forEach(x => {
        province +=`<option value="${x.name}">${x.name}</option>`
        
});
slctProvince.innerHTML = province
}

let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let contactNumber = document.querySelector("#contactNumber");
let message = document.querySelector("#message");

let submitBtn = document.querySelector("#submitBtn");
let confirmationPopup = document.getElementById('confirmationPopup');

let submitEntries =JSON.parse(localStorage.getItem("submitEntries"));
// console.log(submitEntries);


submitBtn.addEventListener("click",  (event) =>{
    event.preventDefault();
    myForm.style.display = 'none';
    confirmationPopup.style.display = 'block';
    let submitEntries =JSON.parse(localStorage.getItem("submitEntries"));

    let n = JSON.parse(localStorage.getItem("idValue")) || [];

    let submitItem ={
        firstName: firstName.value,
        lastName:lastName.value,
        slctProvince : slctProvince.value,
        slctRegion: slctRegion.value,
        email: email.value,
        contactNumber: contactNumber.value,
        message: message.value,
        id: ++n
       
       }
       if (submitEntries == null){
        submitEntries = [];
       }
       submitEntries.push(submitItem);

       localStorage.setItem("submitEntries", JSON.stringify(submitEntries));
       localStorage.setItem("idValue", n);
    //    dispalyEntries();
  
}
);