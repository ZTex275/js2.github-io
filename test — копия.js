var age = prompt("Сколько вам лет?");
var company = prompt('Курите?');

if (age < 18 && company == 'да') {
    alert( 'Маме раскажу' );
  }
  if (age < 18 && company == 'нет') {
    alert( 'Так держать!' );
  }
  if (age >= 18 && company == 'да') {
    alert( 'Ну и зря' );
  }
  if (age >= 18 && company == 'нет') {
    alert( 'Молодец, и не надо' );
  }