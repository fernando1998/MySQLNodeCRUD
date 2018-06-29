$(document).ready(function(){
    var img = $("#previewImage");
    var inptImage  = $("#inputImage");
    inptImage.change(function () {
        filePreview(this);
    });
});

function filePreview(input) {
    var dominio = document.domain;
    if($("#changeImage").val() ===''){
        $('#previewImage').html('<img  class="img-responsive img-circle" ' +
            'src="http://localhost:6080'+'/public/images/default.jpg" width="300"/>')
    }
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#previewImage').html('<img  class="img-responsive img-circle" src="'+e.target.result+'" width="400"/>');
        };
        reader.readAsDataURL(input.files[0]);
    }
}