const insects = ['🐞', '🐜', '🦋', '🐝', '🐌', '🦗']; // Array of insect emojis
const button = document.createElement('button');
button.textContent = 'Generate Insects';
document.body.appendChild(button);

button.addEventListener('click', () => {
    var rotate = Math.random() * 360; // Corrected 'Math.randon' to 'Math.random'
    const insect = insects[Math.floor(Math.random() * insects.length)];
    const insectElement = document.createElement('div');
    insectElement.textContent = insect;
    insectElement.style.position = 'absolute';
    insectElement.style.left = Math.random() * window.innerWidth + 'px';
    insectElement.style.top = Math.random() * window.innerHeight + 'px';
    insectElement.style.fontSize = '30px';
    insectElement.style.pointerEvents = 'none'; // Prevent interaction
    document.body.appendChild(insectElement);
    insectElement.style.transform = `rotate(${rotate}deg)`; // Changed 'style.rotate' to 'style.transform'
});
