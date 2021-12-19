const imageUploadBtn = document.getElementById('image-upload-btn');
const imageUploadRaiser = document.getElementById('image-upload-raiser');
const userImgAvatar = document.querySelector('.user-image-avatar');
const cancelBtn = document.getElementById('cancel-btn');
const cancelLink = document.getElementById('cancel-link');
const saveBtn = document.getElementById('save-btn');
const userInfoForm = document.querySelector('.user-information-form');
const userInfoGroup = document.querySelector('#user-informations-group');
const userChangeGroup = document.querySelector('#user-change-password-group');
const userInfoBox = document.querySelector('.user-informations');
const userChangePassBox = document.querySelector('.user-change-password')


imageUploadRaiser.onclick = () => {
    imageUploadBtn.click();
};

imageUploadBtn.onchange = (evt) => {
    userImgAvatar.src = URL.createObjectURL(evt.target.files[0]);
};

userInfoForm.onchange = () => {
    cancelBtn.removeAttribute('disabled');
    cancelLink.setAttribute('href', '/profile');
    saveBtn.removeAttribute('disabled');
};

userChangeGroup.onclick = () => {
    userInfoBox.style.display = "none"
    userChangePassBox.style.display = "block"
    userInfoGroup.removeAttribute("style")
    userChangeGroup.setAttribute("style", "font-weight: 600; color: #9f0311;")
}

userInfoGroup.onclick = () => {
    userChangePassBox.style.display = "none"
    userInfoBox.style.display = "block"
    userChangeGroup.removeAttribute("style")
    userInfoGroup.setAttribute("style", "font-weight: 600; color: #9f0311;")
}