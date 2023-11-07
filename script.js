

// const requestURL = "https://randomuser.me/api";
// const xhr = new XMLHttpRequest();
// xhr.open('GET', requestURL);
// xhr.onreadystatechange = function() {
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4) {
//         const data = JSON.parse(this.responseText);
//         // console.log(typeof data);
//         console.log(data.results[0]['gender']);
//     }
// }
// xhr.send();

const requestURL = "https://randomuser.me/api";
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);
xhr.onreadystatechange = function() {
        const data = JSON.parse(this.response);

    if(xhr.readyState === 4) {
        const profilePhoto = data.results[0]['picture']['large'];
        const firstName = data.results[0]['name']['first'];
        const lastName = data.results[0]['name']['last'];
        const userName = data.results[0]['login']['username'];
        const gender = data.results[0]['gender'];
        const phone = data.results[0]['phone'];
        const email = data.results[0]['email'];
        const country = data.results[0]['location']['country'];
        const postCode = data.results[0]['location']['postcode'];

        const mainProfilePhoto = document.querySelector('#profile-photo');
        const mainFirstName = document.querySelector('#first-name');
        const mainLastName = document.querySelector('#last-name');
        const mainUserName = document.querySelector('#username');
        const mainGender = document.querySelector('#gender');
        const mainPhone = document.querySelector('#phone');
        const mainEmail = document.querySelector('#email');
        const mainCountry = document.querySelector('#country');
        const mainPostCode = document.querySelector('#postcode');
        // console.log(profilePhoto);
        // console.log(firstName);
        // console.log(lastName);
        // console.log(userName);
        // console.log(gender);
        // console.log(email);
        // console.log(country);
        // console.log(postCode);

        mainProfilePhoto.src = profilePhoto;
        mainFirstName.innerText = firstName;
        mainLastName.innerText = lastName;
        mainUserName.innerText = userName;
        mainGender.innerText = gender;
        mainPhone.innerText = phone;
        mainEmail.innerText = email;
        mainCountry.innerText = country;
        mainPostCode.innerText = postCode;

        }
    }
    xhr.send();