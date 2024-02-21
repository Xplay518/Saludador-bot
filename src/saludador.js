function saludar(name, age, genero, language) {
  let fechaActual = new Date();
  let message;
  if (language == 'EN') {
    if (fechaActual.getHours() >= 1) {
      message = 'Good morning, ';
      if (fechaActual.getHours() >= 12) {
        message = 'Good afternoon, ';
        if (fechaActual.getHours() >= 18){
          message = 'Good night, '
        }
      }
    } 
    if (parseInt(age) > 30 && genero != "other") {
      if (genero == "female") {
        message = message + 'Mrs. ';
      } else if (genero == "male") {
        message = message + 'Mr. ';
      }
    }
  }
  else{
    if (fechaActual.getHours() >= 1){
      message = 'Buenos dias, '
      if (fechaActual.getHours() >= 12){
        message = 'Buenas tardes, '
        if (fechaActual.getHours() >= 18){
          message = 'Buenas noches, '
        }
      }
    }
    if (parseInt(age) > 30 && genero != "other") {
      if (genero == "female") {
        message = message + 'Sra. ';
      } else if (genero == "male") {
        message = message + 'Sr. ';
      }
    }
  }
  return message + `${name}`;
}

export default saludar;

