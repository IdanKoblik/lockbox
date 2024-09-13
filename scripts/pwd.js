function generatePassword() {
    const length = parseInt(document.getElementById('passwordLen').value, 10);
    if (length > 32) {
        alert("You cannot generate a password longer than 32 characters");
        return;
    }

    if (length <= 0) {
        alert("Nice try");
        return;
    }

    const useUppercase = document.getElementById('uppercase').checked;
    const useLowercase = document.getElementById('lowercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let charSet = '';
    if (useUppercase) charSet += uppercaseChars;
    if (useLowercase) charSet += lowercaseChars;
    if (useNumbers) charSet += numberChars;
    if (useSymbols) charSet += symbolChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    document.getElementById('password').value = password;
}