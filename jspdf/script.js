$(document).ready(function(){
    const specialelement={
        "#editor":function(element,renderer){
            return true;
        }
    }
    $("#click").click(function(){
        const doc=new jsPDF();
        doc.fromHTML($("#target").html(),17,17,{
            "width":150,
            "elementHandler":specialelement
        })

        doc.save("sample.pdf");
    })
})