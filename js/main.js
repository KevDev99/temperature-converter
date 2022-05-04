const _calulatedTemperature = document.getElementById('calulatedTemperature')


const calcTemp = (e) => {
  e.preventDefault();

  // get form data
  const data = Object.fromEntries(new FormData(e.target).entries());

  // check if empty or ''
  if (!data.degrees || data.degrees.trim() === '') return;

  // check if input is a number, if not return alert
  if (isNaN(data.degrees)) {
    return alert('invalid input!!')
  }

  // parse input degrees to integer, is better for calculations later on :)
  const inputDegrees = parseInt(data.degrees);

  let result = '';
  let kelvin = 0;
  let fahrenheit = 0;
  let celsius = 0;

  switch (data.type) {

    case "celsius":
      // from celsius to fahrenheit and kelvin
      fahrenheit = ((inputDegrees * 9 / 5) + 32).toFixed(2)
      kelvin = (inputDegrees + 273.15).toFixed(2)
      result = `${fahrenheit} °F ${kelvin} K`
      break;

    case "fahrenheit":
      // from fahrenheit to celsius and kelvin
      celsius = ((inputDegrees - 32) * 5 / 9).toFixed(2);
      kelvin = (celsius + 273.15).toFixed(2);
      result = `${celsius} °C ${kelvin} K`
      break;

    case "kelvin":
      // from kelvin to celsius and fahrenheit
      celsius = (inputDegrees - 273.15).toFixed(2);
      fahrenheit = ((celsius * 9 / 5) + 32).toFixed(2);
      result = `${celsius} °C ${fahrenheit} °F`
      break;

    default:
      result = 'No result.';

  }

  // set the result
  _calulatedTemperature.innerHTML = result

  // needed to prevent the form submit (reload)
  return false;
}