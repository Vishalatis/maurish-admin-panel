var defaultOptions = {};
$('[data-bs-toggle="touchspin"]').each(function(t, a) {
    var n = $.extend({}, defaultOptions, $(a).data());
    $(a).TouchSpin(n)
});