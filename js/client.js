var pet_info = {
  name: 'Doge',
  weight: 9,
  happiness: 3
};
  
function clickedTreatButton() {
  pet_info.happiness++;
  pet_info.weight++;
  checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  pet_info.happiness++;
  pet_info.weight--;
  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  pet_info.happiness--;
  pet_info.weight--;
  checkAndUpdatePetInfoInHtml();
}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();  
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  if (pet_info.weight < 1) {
    pet_info.weight = 1;
  }

  if (pet_info.happiness < 1) {
    pet_info.happiness = 1;
  }
}

function updatePetInfoInHtml() {
  $('.name').text(pet_info['name']);
  $('.weight').text(pet_info['weight']);
  $('.happiness').text(pet_info['happiness']);
}

$(function() {  
  checkAndUpdatePetInfoInHtml();

  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);  
});