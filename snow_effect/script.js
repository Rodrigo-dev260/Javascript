function createSnowflakes() {
    const snowContainer = document.getElementById('snow');
    const snowflakeCount = 100;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄'; 

        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; 
        snowflake.style.animationDelay = `${Math.random() * 5}s`; 

        snowflake.style.fontSize = `${Math.random() * 20 + 10}px`;
        snowflake.style.opacity = Math.random() * 0.5 + 0.5;

        snowContainer.appendChild(snowflake);
    }
}

createSnowflakes();

document.getElementById('jingleBells').play();
