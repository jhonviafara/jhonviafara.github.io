function downloadDoc() {
   var doc = new jspdf('p', 'pt','letter');
   var margin = 10;
   var scale =(doc.internal.pageSize.width - margin * 2) / document.body.scrollWidth;
   doc.html(document.body, {
        x: margin,
        y: margin,
        html2canvas:{
            scale: scale,
        },
        callback: function (doc){
            doc.ouput( 'dataurlnewwindow' , {filename : 'fichero-pdf.pdf'});
        }
   });   
}