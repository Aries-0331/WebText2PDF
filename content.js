console.log('Content.js is running!');

// Inject jsPDF script
const jspdfScript = document.createElement('script');
jspdfScript.src = chrome.runtime.getURL('lib/jspdf.umd.min.js');
jspdfScript.onload = function () {
    this.remove();
    try {
        if (window.jspdf && window.jspdf.jsPDF) {
            const doc = new window.jspdf.jsPDF();
            const content = document.body.innerText;
            doc.text(content, 10, 10);
            doc.save('webpage-content.pdf');
        } else {
            console.error('jsPDF not found');
        }
    } catch (error) {
        console.error('Error generating PDF:', error);
    }
};
(document.head || document.documentElement).appendChild(jspdfScript);