var input = document.getElementById('displayID');

var button_0 = document.getElementById('button_0').addEventListener('click', buttonDataEvent);
var button_1 = document.getElementById('button_1').addEventListener('click', buttonDataEvent);
var button_2 = document.getElementById('button_2').addEventListener('click', buttonDataEvent);
var button_3 = document.getElementById('button_3').addEventListener('click', buttonDataEvent);
var button_4 = document.getElementById('button_4').addEventListener('click', buttonDataEvent);
var button_5 = document.getElementById('button_5').addEventListener('click', buttonDataEvent);
var button_6 = document.getElementById('button_6').addEventListener('click', buttonDataEvent);
var button_7 = document.getElementById('button_7').addEventListener('click', buttonDataEvent);
var button_8 = document.getElementById('button_8').addEventListener('click', buttonDataEvent);
var button_9 = document.getElementById('button_9').addEventListener('click', buttonDataEvent);
var button_division = document.getElementById('button_division').addEventListener('click', buttonOperationEvent);
var button_multiplication = document.getElementById('button_multiplication').addEventListener('click', buttonOperationEvent);
var button_addition = document.getElementById('button_addition').addEventListener('click', buttonOperationEvent);
var button_subtraction = document.getElementById('button_subtraction').addEventListener('click', buttonOperationEvent);
var button_result = document.getElementById('button_result').addEventListener('click', buttonOperationEvent);
var button_reset = document.getElementById('button_reset').addEventListener('click', buttonOperationEvent);

var stringResult = "";
var flagData = false;
var countOperations = 0;
var stringOperation = "";
var regex1;
var regex2;

function buttonDataEvent() {
    var buttonDataValue = this.getAttribute('value');
    addDataButton(buttonDataValue);
};

function addDataButton(buttonDataValue) {
    flagData = true;
    stringResult += buttonDataValue;
    input.setAttribute('value', stringResult);
};

function buttonOperationEvent() {
    var buttonOperationValue = this.getAttribute('value');
    if (buttonOperationValue == "0" || buttonOperationValue == "=") {
        flagData = true;
    }
    if (flagData) {
        flagData = false;

        addOperationButton(buttonOperationValue);
    }
};

function addOperationButton(buttonOperationValue) {
    countOperations++;

    if (countOperations <= 1) {
        if (buttonOperationValue != "0" & buttonOperationValue != "=") {
            stringResult += buttonOperationValue;
            input.setAttribute('value', stringResult);
            var stringRegex = "\\" + buttonOperationValue;
            regex1 = new RegExp(stringRegex);
            stringOperation = buttonOperationValue;

        } else if (buttonOperationValue == "0") {
            countOperations = 0;
            stringResult = "";
            input.setAttribute('value', "");

        } else if (buttonOperationValue == "=") {
            countOperations = 0;
        }

    }

    if (countOperations == 2) {
        if (buttonOperationValue != "0") {
            var stringRegex = "\\" + buttonOperationValue;
            regex2 = new RegExp(stringRegex);
            var arr = stringResult.split(regex1);
        }


        if (stringOperation == "/") {
            if (buttonOperationValue != "0" & buttonOperationValue != "=") {
                stringResult = Number(arr[0]) / Number(arr[1]);
                input.setAttribute('value', stringResult);
                stringResult += buttonOperationValue;
            } else if (buttonOperationValue == "0") {
                input.setAttribute('value', "");
                flagData = false;
                stringResult = "";
                stringOperation = "";
                stringRegex = "";
                regex1 = null;
                regex2 = null;
                countOperations = 0;
            } else if (buttonOperationValue == "=") {
                stringResult = Number(arr[0]) / Number(arr[1]);
                input.setAttribute('value', stringResult);
                flagData = true;
                // stringResult = "";
                stringOperation = "";
                stringRegex = "";
                regex1 = null;
                regex2 = null;
                countOperations = 0;
            }

        } else if (stringOperation == "*") {
            if (buttonOperationValue != "0" & buttonOperationValue != "=") {
                stringResult = Number(arr[0]) * Number(arr[1]);
                input.setAttribute('value', stringResult);
                stringResult += buttonOperationValue;
            } else if (buttonOperationValue == "0") {
                input.setAttribute('value', "");
                flagData = false;
                stringResult = "";
                stringOperation = "";
                stringRegex = "";
                regex1 = null;
                regex2 = null;
                countOperations = 0;
            } else if (buttonOperationValue == "=") {
                stringResult = Number(arr[0]) * Number(arr[1]);
                input.setAttribute('value', stringResult);
                flagData = true;
                // stringResult = "";
                stringOperation = "";
                stringRegex = "";
                regex1 = null;
                regex2 = null;
                countOperations = 0;
            }

        } else if (stringOperation == "+") {
            if (buttonOperationValue != "0" & buttonOperationValue != "=") {
                stringResult = Number(arr[0]) + Number(arr[1]);
                input.setAttribute('value', stringResult);
                stringResult += buttonOperationValue;
            } else if (buttonOperationValue == "0") {
                input.setAttribute('value', "");
                flagData = false;
                stringResult = "";
                stringOperation = "";
                stringRegex = "";
                regex1 = null;
                regex2 = null;
                countOperations = 0;
            } else if (buttonOperationValue == "=") {
                stringResult = Number(arr[0]) + Number(arr[1]);
                input.setAttribute('value', stringResult);
                flagData = true;
                // stringResult = "";
                stringOperation = "";
                stringRegex = "";
                regex1 = null;
                regex2 = null;
                countOperations = 0;
            }


        } else if (stringOperation == "-") {
            if (buttonOperationValue != "0" & buttonOperationValue != "=") {
                stringResult = Number(arr[0]) - Number(arr[1]);
                input.setAttribute('value', stringResult);
                stringResult += buttonOperationValue;
            } else if (buttonOperationValue == "0") {
                input.setAttribute('value', "");
                flagData = false;
                stringResult = "";
                stringOperation = "";
                stringRegex = "";
                regex1 = null;
                regex2 = null;
                countOperations = 0;
            } else if (buttonOperationValue == "=") {
                stringResult = Number(arr[0]) - Number(arr[1]);
                input.setAttribute('value', stringResult);
                flagData = true;
                // stringResult = "";
                stringOperation = "";
                stringRegex = "";
                regex1 = null;
                regex2 = null;
                countOperations = 0;
            }

        }

        if (buttonOperationValue != "0" & buttonOperationValue != "=") {
            regex1 = regex2;
            stringOperation = buttonOperationValue;
            countOperations--;
        }


    }


};




