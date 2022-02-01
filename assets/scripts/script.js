{
  var body = document.body;
  var header = document.createElement('h1');
  var formContainer = document.createElement('div');
  var numberDiv = document.createElement('div');
  var numberInputLabel = document.createElement('label');
  var numberInput = document.createElement('input');
  var controlsDiv = document.createElement('div');
  var dropdown = document.createElement('select');
  var defaultSelection = document.createElement('option');
  var binary = document.createElement('option');
  var convertButton = document.createElement('button');
  var clearFieldsButton = document.createElement('button');
  var calculatedValue__ReadOnly = document.createElement('input');

  body.style['background-color'] = 'black';
  header.style['color'] = 'white';
  header.textContent = 'Number Converter';
  formContainer.classList.add('form-container');
  numberDiv.classList.add('number-div');
  numberInputLabel.textContent = 'Number:';
  numberInput.type = 'number';
  controlsDiv.classList.add('controls-div');
  dropdown.setAttribute('name', 'numberStd');
  defaultSelection.setAttribute('value', null);
  defaultSelection.textContent = '---Please choose an option---';
  binary.setAttribute('value', 'binary');
  binary.textContent = 'binary';
  convertButton.textContent = 'Convert';
  clearFieldsButton.textContent = 'Clear';
  calculatedValue__ReadOnly.setAttribute('readonly', '');
  calculatedValue__ReadOnly.classList.add('calculated-field');

  numberDiv.append(numberInputLabel, numberInput);
  controlsDiv.append(dropdown, convertButton, clearFieldsButton);
  dropdown.append(defaultSelection, binary);
  formContainer.append(numberDiv, controlsDiv, calculatedValue__ReadOnly);
  body.append(header, formContainer);

  function convertNumberHandler() {
    if (dropdown.value === 'binary') {
      convertToBinary(numberInput.value);
    }
  }

  function convertToBinary(num) {
    var bit1,
      bitVal1,
      bitCalc1,
      bit2,
      bitVal2,
      bitCalc2,
      bit3,
      bitVal3,
      bitCalc3,
      bit4,
      bitVal4,
      bitCalc4,
      bit5,
      bitVal5,
      bitCalc5,
      bit6,
      bitVal6,
      bitCalc6,
      bit7,
      bitVal7,
      bitCalc7,
      bit8,
      bitVal8,
      bitCalc8;
    var bit = 2;

    bit1 = num % bit;
    bitCalc1 = parseInt((bitVal1 = num / bit));

    bit2 = bitCalc1 % bit;
    bitCalc2 = parseInt((bitVal2 = bitVal1 / bit));

    bit3 = bitCalc2 % bit;
    bitCalc3 = parseInt((bitVal3 = bitVal2 / bit));

    bit4 = bitCalc3 % bit;
    bitCalc4 = parseInt((bitVal4 = bitVal3 / bit));

    bit5 = bitCalc4 % bit;
    bitCalc5 = parseInt((bitVal5 = bitVal4 / bit));

    bit6 = bitCalc5 % bit;
    bitCalc6 = parseInt((bitVal6 = bitVal5 / bit));

    bit7 = bitCalc6 % bit;
    bitCalc7 = parseInt((bitVal7 = bitVal6 / bit));

    bit8 = bitCalc7 % bit;
    bitCalc8 = parseInt((bitVal8 = bitVal7 / bit));

    var result = `${bit8}${bit7}${bit6}${bit5}${bit4}${bit3}${bit2}${bit1}`;
    calculatedValue__ReadOnly.value = result;
  }

  function clearFieldsHandler() {
    numberInput.value = '';
    calculatedValue__ReadOnly.value = '';
  }

  if (window.innerWidth <= 500) {
    convertButton.addEventListener('touchstart', convertNumberHandler);
    clearFieldsButton.addEventListener('touchstart', clearFieldsHandler);
  } else if (window.innerWidth > 500) {
    convertButton.addEventListener('click', convertNumberHandler);
    clearFieldsButton.addEventListener('click', clearFieldsHandler);
  }
}
