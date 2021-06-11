const shareLink = document.querySelector(".share-div");
const socialLinks = document.querySelector(".social-links");
const socialLinkOpened = document.querySelector(".share-link");

shareLink.addEventListener("click", () => {
  socialLinks.classList.toggle("active");
  console.log("clicked");
});
socialLinkOpened.addEventListener("click", () => {
  socialLinks.classList.remove("active");
  console.log("clicked me again");
});
