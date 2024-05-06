//Dự án

function toggleActive(element) {
  // Kiểm tra xem phần tử đã có lớp 'active' chưa
  var isActive = element.classList.contains('active');

  // Nếu chưa có lớp 'active', thêm nó và điều chỉnh kích thước
  if (!isActive) {
    var items = document.querySelectorAll('.item');
    items.forEach(function(item) {
      item.classList.remove('active');
      item.style.transform = "scale(1)";
    });

    element.classList.add('active');
    element.style.transform = "scale(1.05)";
  }
}

// Lấy tất cả các phần tử có lớp 'item'
const items = document.querySelectorAll('.item');

// Thêm lớp 'animate' cho mỗi phần tử
const delay = 500; // Khoảng thời gian cố định cho mỗi phần tử
items.forEach((item, index) => {
  setTimeout(() => {
    item.classList.add('animate');
  }, delay * index);
});






//Form

document.addEventListener('DOMContentLoaded', function () {
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');

  signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
  });

  signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
  });

  function handleFormSubmit(event) {
      event.preventDefault();
      if (event.target.id === 'signUpBtn') {
          handleSignUp();
      } else if (event.target.id === 'signInBtn') {
          handleSignIn();
      }
  }

  function handleSignUp() {
    var name = document.getElementById('name').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var address = document.getElementById('address').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();

// Kiểm tra ràng buộc và hiển thị thông báo lỗi tương ứng cho phần đăng ký
var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var addressError = document.getElementById('address-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');

nameError.textContent = phoneError.textContent = addressError.textContent = emailError.textContent = passwordError.textContent = '';

if (name === '') {
    nameError.textContent = 'Vui lòng nhập tên của bạn';
}

if (phone === '') {
    phoneError.textContent = 'Vui lòng nhập số điện thoại của bạn';
}

if (address === '') {
    addressError.textContent = 'Vui lòng nhập địa chỉ của bạn';
}

if (email === '') {
    emailError.textContent = 'Vui lòng nhập địa chỉ email của bạn';
} else if (!isValidEmail(email)) {
    emailError.textContent = 'Địa chỉ email không hợp lệ';
}

if (password === '') {
    passwordError.textContent = 'Vui lòng nhập mật khẩu của bạn';
} else if (password.length < 6) {
    passwordError.textContent = 'Mật khẩu phải có ít nhất 6 ký tự';
}
}

  function handleSignIn() {
    var email = document.getElementById('loginEmail').value.trim();
    var password = document.getElementById('loginPassword').value.trim();

    // Kiểm tra ràng buộc và hiển thị thông báo lỗi tương ứng cho phần đăng nhập
    var emailError = document.getElementById('loginEmail-error');
    var passwordError = document.getElementById('loginPassword-error');

    emailError.textContent = passwordError.textContent = '';

    if (email === '') {
        emailError.textContent = 'Vui lòng nhập địa chỉ email của bạn';
    } else if (!isValidEmail(email)) {
        emailError.textContent = 'Địa chỉ email không hợp lệ';
    }

    if (password === '') {
        passwordError.textContent = 'Vui lòng nhập mật khẩu của bạn';
    } else if (password.length < 6) {
        passwordError.textContent = 'Mật khẩu phải có ít nhất 6 ký tự';
    }
}

function isValidEmail(email) {
    // Kiểm tra định dạng email hợp lệ
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
}
   

  // Sự kiện click cho nút "Đăng ký" và "Đăng nhập"
  document.getElementById('signUpBtn').addEventListener('click', handleFormSubmit);
  document.getElementById('signInBtn').addEventListener('click', handleFormSubmit);

  // Hàm validator
  function validator(options) {
      function validate(inputElement, rule) {
          var errorElement = document.getElementById(inputElement.id + '-error');
          var errorMessage = rule.test(inputElement.value);
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
              var inputElement = formElement.querySelector(rule.selector);
              if (inputElement) {
                  inputElement.addEventListener('focusout', function() {
                      validate(inputElement, rule);
                  });

                  inputElement.addEventListener('input', function() {
                      var errorElement = document.getElementById(inputElement.id + '-error');
                      errorElement.innerText = '';
                      inputElement.parentElement.classList.remove('invalid');
                  });
              }
          });
      }
  }

  // Định nghĩa rules
  validator.isRequired = function (selector) {
      return {
          selector: selector,
          test: function (value) {
              return value.trim() ? undefined : 'Vui lòng nhập trường hợp này';
          }
      };
  };

  validator.isPhoneNumber = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\d{10}$/; // Kiểm tra xem chuỗi có 10 chữ số không
            return regex.test(value) ? undefined : 'Số điện thoại không hợp lệ';
        }
    };
};


  validator.isEmail = function (selector) {
      return {
          selector: selector,
          test: function (value) {
              var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return regex.test(value) ? undefined : 'Trường hợp này phải là email';
          }
      };
  };

  validator.minLength = function (selector, min) {
      return {
          selector: selector,
          test: function (value) {
              return value.length >= min ? undefined : 'Vui lòng nhập ít nhất 6 kí tự';
          }
      };
  };

  // Sử dụng validator cho cả form đăng nhập và form đăng ký
  validator({
      form: '#signUpForm',
      rules: [
          validator.isRequired('#name'),
          validator.isEmail('#email'),
          validator.minLength('#password', 6),
          validator.isRequired('#phone'),
          validator.isPhoneNumber('#phone'),
          validator.isRequired('#address')
      ]
  });

  validator({
      form: '#signInForm',
      rules: [
          validator.isRequired('#loginEmail'),
          validator.isEmail('#loginEmail'),
          validator.isRequired('#loginPassword'),
          validator.minLength('#loginPassword', 6)
      ]
  });
});

// Footer
let foothien = document.querySelector('.xuongg')
let foothien1 = document.querySelector('.xuongg1')
let foothien2 = document.querySelector('.xuongg2')
let hienra = document.querySelector(".hienra")
let hienra1 = document.querySelector(".hienra1")
let hienra2 = document.querySelector(".hienra2")
let d = document.querySelector('i.downnn')
let d1 = document.querySelector('i.downnn1')
let d2 = document.querySelector('i.downnn2')

let h = true
foothien.addEventListener('click',function(){
    if(h){
        hienra.style.display = 'block';
        d.style.transform = "rotate(180deg)"
        h = false;
    }
    else{
        hienra.style.display = 'none';
        d.style.transform = "rotate(0deg)"

        h = true;
    }
})
foothien1.addEventListener('click',function(){
    if(h){
        hienra1.style.display = 'block';
        d1.style.transform = "rotate(180deg)"

        h = false;
    }
    else{
        hienra1.style.display = 'none';
        d1.style.transform = "rotate(0deg)"


        h = true;
    }
})
foothien2.addEventListener('click',function(){
    if(h){
        hienra2.style.display = 'block';
        d2.style.transform = "rotate(180deg)"

        h = false;
    }
    else{
        hienra2.style.display = 'none';
        d2.style.transform = "rotate(0deg)"

        h = true;
    }
})




