function animateBalance(func) {
    let i = 100;
    const interval = setInterval(() => {
        func()
        i -= 1
        if (!i) clearInterval(interval);
    }, 400 / 100);
}

export default animateBalance;