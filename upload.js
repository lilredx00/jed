document.addEventListener('DOMContentLoaded', function() {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const uploadForm = document.getElementById('uploadForm');
    
    // Handle drag and drop
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.style.backgroundColor = 'rgba(52, 152, 219, 0.2)';
    });
    
    dropZone.addEventListener('dragleave', () => {
        dropZone.style.backgroundColor = '';
    });
    
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.style.backgroundColor = '';
        
        if (e.dataTransfer.files.length) {
            fileInput.files = e.dataTransfer.files;
            updateThumbnail(dropZone, e.dataTransfer.files[0]);
        }
    });
    
    // Handle click to browse
    dropZone.addEventListener('click', () => {
        fileInput.click();
    });
    
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length) {
            updateThumbnail(dropZone, fileInput.files[0]);
        }
    });
    
    // Form submission
    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // In a real app, you would upload to a server here
        const file = fileInput.files[0];
        if (!file) {
            alert('Please select an image to upload');
            return;
        }
        
        // Simulate upload
        setTimeout(() => {
            alert('Image uploaded successfully!');
            uploadForm.reset();
            dropZone.innerHTML = `
                <i class="fas fa-cloud-upload-alt"></i>
                <p>Drag & drop your image here or click to browse</p>
            `;
        }, 1500);
    });
    
    // Helper function to show thumbnail preview
    function updateThumbnail(dropZone, file) {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            
            reader.readAsDataURL(file);
            reader.onload = () => {
                dropZone.innerHTML = `
                    <img src="${reader.result}" alt="Preview" style="max-width: 100%; max-height: 200px; border-radius: 4px;">
                    <p>${file.name}</p>
                `;
            };
        } else {
            alert('Please select an image file');
            fileInput.value = '';
        }
    }
});