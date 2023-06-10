import html2canvas from 'html2canvas';

const download = (node,number) => {
    html2canvas(node).then(canvas => {
        const link = document.createElement('a');
        link.download = `qrcode ${number}.png`;
        link.href = canvas.toDataURL();
        link.click();
})
}

function downloadPlaceholder ({node,number}) {
    download(node,number)
}

export default downloadPlaceholder;
