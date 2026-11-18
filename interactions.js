const art = document.querySelector('.art');
art.addEventListener('touchstart', () => art.classList.add('touched'), { passive: true });
art.addEventListener('touchend', () => setTimeout(() => art.classList.remove('touched'), 2400), { passive: true });
