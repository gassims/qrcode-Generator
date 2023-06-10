import React from 'react';
import QRCode from 'react-qr-code';

function QRimage(request) {
    return <QRCode value={request.value} />
}

export default QRimage;
