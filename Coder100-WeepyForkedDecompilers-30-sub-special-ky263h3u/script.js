const styles = ["red", "green", "blue", "purple", "yellow", "orange", "white", "pink", "gray"];
const sizes = ["long", "small", "medium", "big"];
const speed = ["fast", "normal", "slow"];

const confetti = document.querySelector(".confetti");

console.log((sizes.length ** styles.length).toLocaleString(), "possible confetti");

setInterval(() => {
    const cont = document.createElement("div");
    cont.classList.add(
        "rot",
        speed[Math.floor(Math.random() * speed.length)]
    );

    cont.style.left = `${Math.random() * 100}%`;

    const el = document.createElement("div");
    el.classList.add(
        styles[Math.floor(Math.random() * styles.length)],
        sizes[Math.floor(Math.random() * sizes.length)]
    );
    el.style.transform = `rotate(${Math.random() * 360}deg)`;

    cont.appendChild(el);

    confetti.appendChild(cont);

    setTimeout(() => {
        cont.remove();
        el.remove();
    }, 3000);
}, 100);