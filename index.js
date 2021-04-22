/*

##########-Ahamad Encryption Decryption-##########
- A encryption decryption method that works on all key length.
- Best to produce secret messages or passwords.
- Copyright protected by Ahmad Habib™

*/

let encrypt_value = document.getElementById("encrypt");
let encrypt_result = document.getElementById("encrypt_results");

let decrypted_value = document.getElementById("decrypt");
let decrypted_result = document.getElementById("decrypt_results");

function encrypt() {
    let resultant_string = '';
    let start_encrypt = randomStringGenerate(7);
    let ascii_code;

    var MAIN_VALUE = encrypt_value.value;
    for (var i = 0; i < MAIN_VALUE.length; i++) {
        ascii_code = MAIN_VALUE.charCodeAt(i);
        if (i % 2 == 0) {
            // Checking if ascii exceeds ASCII codes number
            if (255 - ascii_code < 0) {
                ascii_code = (ascii_code - 255) + 32;
            }
            else
                ascii_code = ascii_code + 7;


        }
        else if (i % 2 != 0) {
            // Checking if ascii is less than starting point
            if (ascii_code - 7 < 32) {
                /*Making to go ascii reverse ie if user
                entered ascii goes less than 32 which does
                not have proper ascii then we are making
                it go from  33->32->255
                */
                let remaining = ascii_code - 31;
                ascii_code = 255 - (7 - remaining);
            }
            else
                ascii_code = ascii_code - 7;
        }
        resultant_string += String.fromCharCode(ascii_code);
    }
    let end_encrypt = randomStringGenerate(7);

    encrypt_result.innerHTML = start_encrypt + resultant_string + end_encrypt;

}

function decrypt() {
    let resultant_string = '';
    let trim_part_1 = decrypted_value.value.substr(7, decrypted_value.value.length - 7);
    let MAIN_VALUE = trim_part_1.substr(0, trim_part_1.length - 7);
    let ascii_code;

    for (let i = 0; i < MAIN_VALUE.length; i++) {
        ascii_code = MAIN_VALUE.charCodeAt(i);

        if (i % 2 == 0) {
            // Checking if ascii exceeds ASCII codes number
            if (ascii_code - 7 < 32) {
                let remaining = ascii_code - 32;
                ascii_code = 255 - (7 - remaining);
            }
            else
                ascii_code = ascii_code - 7;
        }
        else if (i % 2 != 0) {
            // Checking if ascii is less than starting point
            if (ascii_code + 7 > 255) {
                let remaining = 255 - ascii_code;
                ascii_code = 31 + (7 - remaining);
            }
            else
                ascii_code = ascii_code + 7;
        }
        resultant_string += String.fromCharCode(ascii_code);
    }

    decrypted_result.innerHTML = resultant_string;
}


function randomStringGenerate(length) {
    var result = '';
    var string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_';
    var stringLength = string.length;
    for (var i = 0; i < length; i++) {
        result += string.charAt(Math.floor(Math.random() * stringLength));
    }

    return result;
}