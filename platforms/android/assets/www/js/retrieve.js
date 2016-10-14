nfc.addMimeTypeListener('flaggy', function(nfcEvent){
    var records = nfcEvent.tagData;

    for (var i = 0; i < records.length; i++){
        var record = records[i];
        socket.emit('nfcID', nfc.bytesToString(record.payload));
    }
});

