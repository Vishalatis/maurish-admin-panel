$(document).ready(function() {
    $("#checkout-nav-pills-wizard").bootstrapWizard({
        tabClass: "nav nav-pills nav-justified"
    })
});
var triggerTabList = [].slice.call(document.querySelectorAll(".twitter-bs-wizard-nav .nav-link"));
triggerTabList.forEach(function(t) {
    var a = new bootstrap.Tab(t);
    t.addEventListener("click", function(t) {
        t.preventDefault(), a.show()
    })
});