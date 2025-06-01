 // Importamos Zod
const { z } = window.Zod;

// Esquema para validar los datos del formulario
const registerSchema = z.object({
    name: z
    .string()
    .nonempty("El nombre es obligatorio.")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El nombre solo puede contener letras."),
    email: z.string().email("El correo electrónico no es válido."),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres."),
});

document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Capturamos los valores ingresados
    const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    };

    try {
    // Validación con Zod
    registerSchema.parse(formData);
    document.getElementById("errors").textContent = "";  // Limpia errores previos
    alert("¡Registro exitoso!");
    } catch (error) {
    // Muestra los mensajes de error en la página.
    if (error.errors) {
        document.getElementById("errors").textContent = error.errors.map(e => e.message).join(", ");
    } else {
        document.getElementById("errors").textContent = "Hubo un error en la validación.";
    }
    }
});