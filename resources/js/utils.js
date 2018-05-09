function chooseProfilePic() {
  var imgDianaCount = 2;
  var imgIsisCount = 4;
  var dianaIndex = getRandomIntInclusive(1, imgDianaCount);
  var isisIndex = getRandomIntInclusive(1, imgIsisCount);
  $("#img-profile-diana").attr("src", "./resources/images/profile/profile-diana-" + dianaIndex + ".jpg");
  $("#img-profile-isis").attr("src", "./resources/images/profile/profile-isis-" + isisIndex + ".jpg");
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is inclusive and the minimum is inclusive 
  return Math.floor(Math.random() * (max - min + 1)) + min;
}