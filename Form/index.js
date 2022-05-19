let form = document.querySelector(".form")
let formAlert = document.querySelector(".form-alert")
let submitBtn = document.querySelector(".btn")

let perm1 = document.querySelector("#perm1")
let perm2 = document.querySelector("#perm2")
let perm3 = document.querySelector("#perm3")
let perm4 = document.querySelector("#perm4")

let checkBoxes = document.getElementsByName('perm1');
console.log(checkBoxes.length)


const handleSubmit = (e) => {

    let email = document.querySelector("#email").value
    let emailInput = document.querySelector("#email")
    let password = document.querySelector("#password").value
    let passwordInput = document.querySelector("#password")
    let emailAlert = document.querySelector("#emailAlert")
    let passwordAlert = document.querySelector("#passwordAlert")
    let gender = document.querySelector("#sex").value
    let admin = document.querySelector("#admin")
    let user = document.querySelector("#user")

    e.preventDefault();
    console.log(password)
    console.log(email)
    console.log(gender)
    console.log(admin.checked)
    console.log(checkBoxes[0].value)

    if (password == "") {
        passwordAlert.textContent = "please enter password"
        return false
    }
    if (password.length < 8) {
        passwordAlert.innerHTML = "please enter more than 8 characters"
        return false
    }
    if (password.search(/[0-9]/) === -1) {
        passwordAlert.textContent = "please enter number"
        return false
    }
    if (password.search(/[a-z]/) === -1) {
        passwordAlert.textContent = "please enter LowerCase"
        return false
    }
    if (password.search(/[A-Z]/) === -1) {
        passwordAlert.textContent = "please enter Uppercase"
        return false
    }
    if (password.search(/[!\@\#\$\%\^\&\*\(\)\_\?]/) === -1) {
        passwordAlert.textContent = "please enter atleast one special character"
        return false;
    }

    const ans = checkPermission(checkBoxes)
    console.log(ans)
    if (ans === false) {
        formAlert.textContent = "select atleast two permissions"
    } else {

        formAlert.textContent = "Confirm"

        form.textContent = ""

        emailInput.disabled = true;
        passwordInput.disabled = true;

        form.style.backgroundColor = "#ffefef"
        submitBtn.textContent = "Confirm"

        const cnfrmEmail = document.createElement("p");
        const emailData = document.createTextNode("Email Address: " + email);

        const cnfrmPass = document.createElement("p")
        const passwordData = document.createTextNode("Password: " + password);

        const cnfrmGender = document.createElement("p")
        const genderData = document.createTextNode("Gender: " + gender);

        const cnfrmRole = document.createElement("p")
        const roleData = document.createTextNode(admin.checked ? "User Role: Admin" : "User Role: User");

        const cnfrmPermission = document.createElement("p")
        const permissionData = document.createTextNode("Permission")


        cnfrmEmail.appendChild(emailData);
        form.appendChild(cnfrmEmail)

        cnfrmPass.appendChild(passwordData);
        form.appendChild(cnfrmPass)

        cnfrmGender.appendChild(genderData)
        form.appendChild(cnfrmGender)

        cnfrmRole.appendChild(roleData)
        form.appendChild(cnfrmRole)

        // cnfrmPermission.appendChild(permissionData)
        // form.appendChild(cnfrmPermission)

        console.log("LOL")

        // for (let i = 0; i < checkBoxes.length; i++) {
        //     console.log("LOL")

        //     if (checkBoxes[i].checked) {
        //         let value = checkBoxes[i].value
        //         let perm = document.createElement("p");
        //         let permData = document.createTextNode(value);

        //         console.log(permData)
        //         perm.appendChild(permData);
        //         form.appendChild(perm)

        //         console.log(value)
        //     }
        // }

        // for(item of checkBoxes){
        //     console.log(checkBoxes)
        // }

        const button = document.createElement("button");
        const data= document.createTextNode("confirm");
        button.classList.add="btn"
        console.log(button.classList)
        button.appendChild(data)
        form.appendChild(button)


        form.addEventListener("click",(e)=>{
            console.log(e.target)
            if(e.target.classList.add==="btn"){
                form.textContent="";
                const notification= document.createElement("h5")
                const msg=document.createTextNode("Form Submitted Successfully")

                notification.appendChild(msg)
                form.appendChild(notification)
            }
        })

    }
}

function checkPermission(checkBoxes) {
    count = 0;
    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked === true) {
            count++;
        }
    }
    if (count >= 2) {
        return true
    } else {
        return false
    }
}

function checkedBoxes(checkBoxes) {
    count = 0;
    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked === true) {
            count++;
        }
    }
    return count;
}

formAlert.textContent = "Submit"

form.addEventListener('submit', handleSubmit)
