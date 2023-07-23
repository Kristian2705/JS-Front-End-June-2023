function encodeAndDecodeMessages() {
    const encodeButton = document.querySelector('div:nth-child(1) button');
    let encodedMessage = '';
    let decodeTextarea = document.querySelector('div:nth-child(2) textarea');
    encodeButton.addEventListener('click', () => {
        encodedMessage = '';
        let encodeTextarea = document.querySelector('div:nth-child(1) textarea');
        for (let i = 0; i < encodeTextarea.value.length; i++) {
            const currAsciiCode = encodeTextarea.value.charCodeAt(i);
            encodedMessage += String.fromCharCode(currAsciiCode + 1);
        }
        encodeTextarea.value = '';
        encodeTextarea.textContent = '';
        decodeTextarea.textContent = encodedMessage;
        decodeTextarea.value = encodedMessage;
    });

    const decodeButton = document.querySelector('div:nth-child(2) button');
    decodeButton.addEventListener('click', () => {
        let decodedMessage = '';
        const receivedMessage = decodeTextarea.value;
        for (let i = 0; i < receivedMessage.length; i++) {
            const currAsciiCode = receivedMessage.charCodeAt(i);
            decodedMessage += String.fromCharCode(currAsciiCode - 1);
        }
        decodeTextarea.textContent = decodedMessage;
        decodeTextarea.value = decodedMessage;
    });
}