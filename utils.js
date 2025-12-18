// script.js
document.addEventListener('DOMContentLoaded', function() {

// clipboard copy. *meant for the installer command
// box
const copyButton = document.querySelector('.copy-button');
const copyText = document.querySelector('.copy-text');
const copyMessage = document.querySelector('.copy-message');
    
    if (copyButton && copyText) {
        copyButton.addEventListener('click', async function() {
            try {
            await navigator.clipboard.writeText(copyText.textContent);

            copyMessage.textContent = 'Copied to clipboard!';
            copyMessage.classList.add('show');
                
            // briefly show copy succeeded to let
            // the user know
            const icon = this.querySelector('i');
            icon.classList.remove('fa-copy');
            icon.classList.add('fa-check');
                
            setTimeout(() => {
                copyMessage.classList.remove('show');
               icon.classList.remove('fa-check');
              icon.classList.add('fa-copy');
            }, 2000);
                
            } catch (err) {
                // what the fuck even happened
                console.error('Failed to copy: ', err);
                copyMessage.textContent = 'Failed to copy to clipboard';
                copyMessage.classList.add('show');
                
                setTimeout(() => {
                    copyMessage.classList.remove('show');
                }, 2000);
            }
        });
    }
    
    // sorry i had to use AI for whats below im no frontend
    // expert whatsoever

    // Parallax effect for floating shapes
    window.addEventListener('mousemove', function(e) {
        const shapes = document.querySelectorAll('.shape');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        shapes.forEach((shape, index) => {
            const speed = 0.02 + (index * 0.01);
            const x = (mouseX - 0.5) * 30 * speed;
            const y = (mouseY - 0.5) * 30 * speed;
            
            const currentTransform = shape.style.transform;
            const baseTransform = currentTransform.replace(/translate\([^)]*\)/g, '').trim();
            shape.style.transform = `${baseTransform} translate(${x}px, ${y}px)`;
        });
    });
});