function previewImage() {
    var fileInput = document.getElementById('upload');
    var uploadContainer = document.getElementById('uploadContainer');

    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            uploadContainer.innerHTML = '<img src="' + e.target.result + '" class="img-fluid"><span class="remove-icon" onclick="removeImage()">X</span>';
        }

        reader.readAsDataURL(fileInput.files[0]);
    }
}

function removeImage() {
    var uploadContainer = document.getElementById('uploadContainer');
    uploadContainer.innerHTML = '<label for="upload" class="upload-icon"><i class="fa fa-upload"></i></label><input type="file" id="upload" style="display: none;" onchange="previewImage()"><p class="upload-text">Upload Image</p>';
}
