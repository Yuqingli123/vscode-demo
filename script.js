document.addEventListener('mousemove', (event) => {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        const pupil = eye.querySelector('.pupil');
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const angle = Math.atan2(event.clientY - eyeY, event.clientX - eyeX);
        const pupilX = Math.cos(angle) * 10;
        const pupilY = Math.sin(angle) * 10;
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });

    const spotlight = document.querySelector('.spotlight');
    spotlight.style.transform = `translate(${event.clientX - 75}px, ${event.clientY - 75}px)`;
});
