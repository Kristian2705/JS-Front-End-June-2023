function extract(content) {
    const matches = document.getElementById(content).textContent.match(/\([\w+\s+]+\)/g);
    return matches.join('; ')
}