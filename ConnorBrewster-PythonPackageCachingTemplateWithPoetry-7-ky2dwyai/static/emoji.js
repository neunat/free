document.addEventListener("DOMContentLoaded", () => {
  const killButton = document.querySelector('button[name="kill"]');
  killButton.addEventListener('click', (event) => {
    event.preventDefault();
    const win = window.open('/killkillkill', '🔪', 'width=300,height=300');
    setTimeout(() => {
      win.location.href = '/up';
      setTimeout(() => {
        window.location.href = '/';
        win.close();
      }, 5000);
    }, 1000);
  });
});