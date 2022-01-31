// ID 인풋창에 한글이 있을 때 입력을 막는 기능
function chkCharCode(event) {
    const keyCode = event.keyCode;
    const isValidKey = (
      (keyCode >= 48 && keyCode <= 57) || // Numbers
      (keyCode >= 97 && keyCode <= 122) || // Numbers, Keypad
      (keyCode >= 65 && keyCode <= 90) || // Alphabet
      (keyCode === 32) || // Space
      (keyCode === 8) || // BackSpace
      (keyCode === 189) // Dash
    );
    if (!isValidKey) {
      event.preventDefault();
      return false;
    }
};