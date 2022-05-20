const pai = document.getElementById("pai");

for (let i = pai.childNodes.length - 1; i >= 0; i -= 1) {
    const currentChildren = pai.childNodes[i];
    if (currentChildren.id !== "elementoOndeVoceEsta") {
        console.log(currentChildren);
        currentChildren.remove();
    }
}

const segundoEUltimoFilhoDoFilho = document.getElementById(
    "segundoEUltimoFilhoDoFilho"
);
segundoEUltimoFilhoDoFilho.remove();
