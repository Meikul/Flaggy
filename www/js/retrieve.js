nfc.addMimeTypeListener('flaggy', function(nfcEvent){
    var records = nfcEvent.tagData;

    for (var i = 0; i < records.length; i++){
        var record = records[i];
        p = document.createElement('p');
        p.innerHTML = nfc.bytesToString(record.payload);
        display.appendChild(p);
    }
});

