// Fetch button click handler
document.getElementById('fetchButton').addEventListener('click', () => {
    const appNumber = document.getElementById('applicationNumber').value.trim();

    if (!appNumber) {
        alert("Please enter a valid application number.");
        return;
    }

    // Photo and Signature URLs
    const photoUrl = `https://examinationservices.nic.in/JeeMain2025/Handler/DisplayCandImagePDF.ashx?appformid=101032511&appno=${appNumber}&docType=01`;
    const signatureUrl = `https://examinationservices.nic.in/JeeMain2025/Handler/DisplayCandImagePDF.ashx?appformid=101032511&appno=${appNumber}&docType=03`;

    // Display output
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <div class="card">
            <img src="${photoUrl}" alt="Photo">
            <div class="card-caption">Photo</div>
        </div>
        <div class="card">
            <img src="${signatureUrl}" alt="Signature">
            <div class="card-caption">Signature</div>
        </div>
    `;
});