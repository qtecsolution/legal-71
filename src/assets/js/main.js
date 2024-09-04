// nice selector 2
document.addEventListener("DOMContentLoaded", function (e) {
  var els = document.querySelectorAll(".selectize");
  els.forEach(function (select) {
    NiceSelect.bind(select);
  });
});
