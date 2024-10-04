function calculateUnusedLength() {
    let A = parseInt(document.getElementById('lengthA').value);
    let B = parseInt(document.getElementById('lengthB').value);

    if (A <= B) {
        alert("A должно быть больше B.");
        return;
    }

    let unusedLength = A % B;

    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Длина незанятой части отрезка A: ${unusedLength}`;
}
