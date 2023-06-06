var html5QrcodeScanner = new Html5QrcodeScanner("reader", {
    fps: 10,
    qrbox: 250
});

html5QrcodeScanner.render(onScanSuccess);
function onScanSuccess(scannedData) {
    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', "{% url 'home_url' %}");

    var csrfToken = document.createElement('input');
    csrfToken.setAttribute('type', 'hidden');
    csrfToken.setAttribute('name', 'csrfmiddlewaretoken');
    csrfToken.setAttribute('value', '{{ csrf_token }}');
    form.appendChild(csrfToken);

    var scannedDataInput = document.createElement('input');
    scannedDataInput.setAttribute('type', 'hidden');
    scannedDataInput.setAttribute('name', 'scanned_data');
    scannedDataInput.setAttribute('value', scannedData);
    form.appendChild(scannedDataInput);

    document.body.appendChild(form);
    form.submit();
}

// Start the scanning process automatically
html5QrcodeScanner.start();