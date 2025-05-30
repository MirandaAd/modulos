document.getElementById('registroEvento').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío automático del formulario

    // Variables
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const intereses = document.querySelectorAll('input[name="intereses"]:checked');
    const horario = document.querySelector('input[name="horario"]:checked');
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    let errores = [];

    if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    if (nombre.length < 3) {
        errores.push('El nombre debe tener al menos 3 caracteres.');
    }

    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
        errores.push('El correo electrónico no es válido.');
    }

    if (telefono.length !== 10) {
        errores.push('El teléfono debe tener 10 dígitos.');
    }

    if (intereses.length === 0) {
        errores.push('Debes seleccionar al menos un interés.');
    }

    const fechaSeleccionada = new Date(fecha);
    const fechaActual = new Date();
    // Comparar solo fechas, no horas
    fechaActual.setHours(0, 0, 0, 0);
    fechaSeleccionada.setHours(0, 0, 0, 0);

    if (fechaSeleccionada < fechaActual) {
        errores.push('La fecha seleccionada debe ser posterior a la fecha actual.');
    }

    if (errores.length > 0) {
        alert('Por favor, corrige la siguiente información:\n' + errores.join('\n'));
        return; // Detiene la función si hay errores
    }

    // Si todo está bien
    alert('Registro exitoso. ¡Gracias por registrarte!');
});