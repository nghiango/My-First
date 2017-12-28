function toggleShowPassword(content, checkbox) {
    checkbox.bind('click', function () {
        if (checkbox.is(':checked')) {
            content.attr('type', 'text');
        } else {
            content.attr('type', 'password');
        }
    })
};
$(function () {
    toggleShowPassword($('#password'), $('#showPassword'))
})
