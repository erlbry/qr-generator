
document.getElementById("generateBtn").addEventListener("click", function() {
    const data = document.getElementById("dataInput").value;
    const bgColor = document.getElementById("bgColorInput").value;
    const dotColor = document.getElementById("dotColorInput").value;

    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(data)}&size=300x300&color=${dotColor.replace('#', '')}&bgcolor=${bgColor.replace('#', '')}`;

    const canvasDiv = document.getElementById("canvas");
    canvasDiv.innerHTML = '';

    const img = document.createElement("img");
    img.src = apiUrl;
    img.alt = "QR Code";

    canvasDiv.appendChild(img);
});

document.getElementById("downloadBtn").addEventListener("click", function() {
    const img = document.querySelector("#canvas img");
    if (!img) {
        alert("Please generate a QR code first!");
        return;
    }

    const link = document.createElement('a');
    link.href = img.src;
    link.download = "qr-code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});