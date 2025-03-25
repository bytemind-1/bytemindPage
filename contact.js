document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Deshabilitar el botón de envío mientras se procesa el formulario
    const submitButton = e.target.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.innerHTML = 'Enviando...';

    // Obtener los valores del formulario
    const templateParams = {
        name: document.getElementById('name').value.trim(), // Coincide con {{name}} en la plantilla
        email: document.getElementById('email').value.trim(), // Coincide con {{email}} en la plantilla
        subject: document.getElementById('subject').value.trim(), // Coincide con {{subject}} en la plantilla
        message: document.getElementById('message').value.trim(), // Coincide con {{message}} en la plantilla
    };

    try {
        // Validar que los campos no estén vacíos
        if (!templateParams.name || !templateParams.email || !templateParams.subject || !templateParams.message) {
            throw new Error('Todos los campos son obligatorios.');
        }

        // Enviar el correo electrónico usando MailJS
        await emailjs.send(
            'service_3f8ulx6',  // Reemplaza con tu Service ID
            'template_o2yrk3b', // Reemplaza con tu Template ID
            templateParams
        );

        // Mostrar mensaje de éxito y resetear el formulario
        alert('¡Mensaje enviado correctamente!');
        e.target.reset();
    } catch (error) {
        // Manejar errores
        console.error('Error:', error);
        alert(error.message || 'Error al enviar el mensaje. Por favor, intente nuevamente.');
    } finally {
        // Restaurar el botón de envío
        submitButton.disabled = false;
        submitButton.innerHTML = 'Enviar Mensaje';
    }
});