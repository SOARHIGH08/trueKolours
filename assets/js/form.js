let slctRegion = document.querySelector("#slctRegion")
let getRegion = async() => {
    let res = await fetch("https://ph-locations-api.buonzz.com/v1/regions");
    console.log(res);
    let data = await res.json();

    console.log(data);
    console.log(data.data);
    let region = data.data;

    let txt = "";
    
    region.forEach((x)=>{
        txt += `<option>${x.name}</option>`
    })
        slctRegion.innerHTML = txt;

}
getRegion();

let slctProvince = document.querySelector("#slctProvince")
let getProvince = async() => {
    let res = await fetch("https://ph-locations-api.buonzz.com/v1/provinces");
    console.log(res);
    let data = await res.json();
    // console.log(data);
    // console.log(data.data);
    let province = data.data;

    let txt = "";
    
    province.forEach((x)=>{
        txt += `<option>${x.name}</option>`
    })
        slctProvince.innerHTML = txt;

}
getProvince();

let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let contactNumber = document.querySelector("#contactNumber");
let message = document.querySelector("#message");

let submitBtn = document.querySelector("#submitBtn");
let confirmationPopup = document.getElementById('confirmationPopup');

let submitEntries =JSON.parse(localStorage.getItem("submitEntries"));
console.log(submitEntries);

let submit = (event) =>{
    event.preventDefault();

    let n = localStorage.getItem("idValue");

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

       localStorage.setItem("submitEntries", JSON.stringify(submitItem));
       localStorage.setItem("idValue", n);
    //    dispalyEntries();
    myForm.style.display = 'none';
    confirmationPopup.style.display = 'block';
}

submitBtn.addEventListener("click", submit);