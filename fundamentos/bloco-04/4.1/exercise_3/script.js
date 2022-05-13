const notaRecebida = 70;

if (notaRecebida >= 80) {
    console.log("Parabéns, você foi aprovada(o)!");
} else if (notaRecebida < 80 && notaRecebida >= 60) {
    console.log("Você está na nossa lista de espera");
} else {
    console.log("Você foi reprovada(o)");
}
