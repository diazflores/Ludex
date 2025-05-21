 function abrirSelectorEmojis() {
    const emojiSelector = document.getElementById('emojiSelector');
    emojiSelector.style.display = emojiSelector.style.display === 'none' ? 'block' : 'none';
}

function insertarEmoji(emoji) {
    const chatInput = document.getElementById('chatInput');
    chatInput.value += emoji; // Agrega el emoji al campo de entrada
    document.getElementById('emojiSelector').style.display = 'none'; // Oculta el selector
}

function enviarMensaje() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    const mensaje = chatInput.value.trim(); // Obtiene el mensaje y elimina espacios innecesarios

    if (mensaje) {
        // Crea un nuevo elemento para el mensaje
        const nuevoMensaje = document.createElement('div');
        nuevoMensaje.textContent = mensaje; // Agrega el texto del mensaje (incluidos los emojis)
        nuevoMensaje.style.marginBottom = '10px'; // Espaciado entre mensajes
        nuevoMensaje.style.color = 'white'; // Color del texto

        // Agrega el mensaje al contenedor de mensajes
        chatMessages.appendChild(nuevoMensaje);

        // Limpia el campo de entrada
        chatInput.value = '';
    }
}