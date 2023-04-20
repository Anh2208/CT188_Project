
function Validator(options) {

    var selectorRules = {};

    //kiểm tra nhập thông tin
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage;

        //lấy ra các rule của selector
        var rules = selectorRules[rule.selector];

        //duyệt từng rule & kiểm tra-->có lỗi thì dừng
        for (var i = 0; i < rule.length; ++i) {
            errorMessage = rule[i](inputElement.value);
            if (errorMessage) break;
        }
        // if (errorMessage) {
        //     errorElement.innerText = errorMessage;
        //     inputElement.parentElement.classList.add('invalid');
        // } else {
        //     errorElement.innerText = '';
        //     inputElement.parentElement.classList.remove('invalid');
        // }
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');

        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }

    }

    var formElement = document.querySelector(options.form);

    if (formElement) {
        options.rules.forEach(function (rule) {

            //Lưu rule cho mỗi input

            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);

            } else {
                selectorRules[rule.selector] = [rule.test];
            }



            var inputElement = formElement.querySelector(rule.selector);
            if (inputElement) {
                //Xử lý blur khỏi input
                inputElement.onblur = function () {
                    var errorMessage = rule.test(inputElement.value);

                    validate(inputElement, rule);

                }

                //Xử lý khi nhập vào input
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }

        })

    }

}

Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {

            return value.trim() ? undefined : message || 'Vui lòng không bỏ trống';
        }
    };
}


Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Địa chỉ email không hợp lệ';
        }
    };

}

Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    };
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Mật khẩu không trùng khớp'
        }
    };
}