function triangleAnglesValidate(degreeAngleA, degreeAngleB, degreeAngleC) {
    let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;
    let allAnglesArePositives =
        degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

    if (allAnglesArePositives) {
        if (sumOfAngles === 180) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Erro: ângulo inválido";
    }
}
