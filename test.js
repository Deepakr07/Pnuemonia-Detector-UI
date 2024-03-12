function previewImage() {
    var fileInput = document.getElementById('upload');
    var uploadContainer = document.getElementById('uploadContainer');

    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            uploadContainer.innerHTML = '<img src="' + e.target.result + '" class="img-fluid">';
        }

        reader.readAsDataURL(fileInput.files[0]);
    }
}