// Función para configurar cada cuenta regresiva
function configurarCuenta(id, year, month, day, hours, minutes, seconds) {
	simplyCountdown('#' + id, {
	  year: year,
	  month: month,
	  day: day,
	  hours: hours,
	  minutes: minutes,
	  seconds: seconds,
	  words: {
		days: 'Día',
		hours: 'Hora',
		minutes: 'Minuto',
		seconds: 'Segundo',
		pluralLetter: 's',
	  },
	  plural: true,
	  inline: false,
	  inlineClass: 'simply-countdown-inline',
	  enableUtc: true,
	  onEnd: function () {
		document.getElementById('portada').classList.add('oculta');
		return;
	  },
	  refresh: 1000,
	  sectionClass: 'simply-section',
	  amountClass: 'simply-amount',
	  wordClass: 'simply-word',
	  zeroPad: false,
	  countUp: false,
	  onTick: function (state) {
		// Calcular la diferencia de días manualmente
		var currentDate = new Date();
		var targetDate = new Date(year, month - 1, day, hours, minutes, seconds);
		var differenceInDays = Math.floor((targetDate - currentDate) / (24 * 60 * 60 * 1000));
  
		// Cambiar el color del elemento <p> con clase "estado" dentro de cada cuenta regresiva
		var elementosP = document.querySelectorAll('#' + id + ' .estado');
		if (elementosP.length > 0) {
		  // Cambiar el color del elemento <p> a rojo cuando falten 10 días o menos
		  if (differenceInDays <= 10) {
			elementosP.forEach(function (elemento) {
			  elemento.style.color = 'red';
			});
		  } else {
			// Cambiar el color del elemento <p> a verde cuando falten más de 10 días
			elementosP.forEach(function (elemento) {
			  elemento.style.color = 'green';
			});
		  }
		}
	  },
	});
  }
  
  // Configurar cada cuenta regresiva
  configurarCuenta('cuenta1', 2023, 11, 20, 0, 0, 0);
  configurarCuenta('cuenta2', 2023, 12, 31, 0, 0, 0);
  configurarCuenta('cuenta3', 2023, 12, 31, 0, 0, 0);
  configurarCuenta('cuenta4', 2023, 12, 31, 0, 0, 0);
  configurarCuenta('cuenta5', 2023, 12, 31, 0, 0, 0);
  configurarCuenta('cuenta6', 2023, 12, 31, 0, 0, 0);
  configurarCuenta('cuenta7', 2023, 12, 31, 0, 0, 0);
  configurarCuenta('cuenta8', 2023, 12, 31, 0, 0, 0);
  configurarCuenta('cuenta9', 2023, 12, 31, 0, 0, 0);
  configurarCuenta('cuenta10', 2023, 12, 31, 0, 0, 0);
  