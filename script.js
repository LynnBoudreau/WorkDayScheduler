//  grab user input store in variable
//
//
//add past class changes color
//
//
//
//
//
//
//
//
//
//
//
$(".save-btn").on("click", function () {
  var saveButtonEl = $(this);
  var inputEl = saveButtonEl.siblings(".hour-input");
  var storageKey = saveButtonEl.attr("data-key");
  localStorage.setItem(storageKey, inputEl.val());
});
