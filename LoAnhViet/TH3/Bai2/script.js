$("#registrationForm").validate({
        rules: {
            fullName: {
                required: true,
                maxlength: 50
            },
            email: {
                required: true,
                email: true,
                maxlength: 100
            },
            password: {
                required: true,
                minlength: 6
            },
            repassword: {
                required: true,
                equalTo: password,
                minlength: 6
            }
        },
        messages: {
            fullName: {
                required: "Vui lòng nhập họ tên.",
                maxlength: "Họ tên không được vượt quá 50 ký tự."
            },
            email: {
                required: "Vui lòng nhập email.",
                email: "Vui lòng nhập email đúng định dạng.",
                maxlength: "Email không được vượt quá 100 ký tự."
            },
            password: {
                required: "Vui lòng nhập mật khẩu.",
                minlength: "Mật khẩu phải có ít nhất 6 ký tự."
            },
            repassword: {
                required: "Vui lòng nhập lại mật khẩu.",
                equalTo: "Hai mật khẩu phải giống nhau.",
                minlength: "Mật khẩu phải có ít nhất 6 ký tự."
            }
        },
    });