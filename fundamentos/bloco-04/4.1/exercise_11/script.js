let degreeAngleA = 80;
let degreeAngleB = 70;
let degreeAngleC = 30;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives =
    degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if (allAnglesArePositives) {
    if (sumOfAngles === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("ângulo inválido");
}
