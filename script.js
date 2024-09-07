function showHidePass() {
    let pass = document.getElementById('user-pass');
    if (pass.type === 'password') {
        pass.type = 'string';
        document.querySelector('#pass-hide-icon').style.display = 'none';
        document.querySelector('#pass-show-icon').style.display = 'block';
    }
    else {
        pass.type = 'password';
        document.querySelector('#pass-hide-icon').style.display = 'block';
        document.querySelector('#pass-show-icon').style.display = 'hide';
    }
}