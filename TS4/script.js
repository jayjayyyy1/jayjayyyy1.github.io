document.getElementById('menuBtn').addEventListener('click', function() {
    const modal = document.getElementById('detailsModal');
    if (modal) {
        const modalInstance = bootstrap.Modal.getInstance(modal);
        if (modalInstance) {
            modalInstance.hide();
        }
    }
});

document.querySelectorAll('.see-more-btn').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.menu-card');
        const title = card.querySelector('.card-title').textContent;
        const image = card.querySelector('.card-img-top').src;
        const details = card.getAttribute('data-details');
        
        document.getElementById('detailsModalLabel').textContent = title;
        document.getElementById('modalImage').src = image;
        document.getElementById('modalDescription').textContent = details;
        
        const modal = new bootstrap.Modal(document.getElementById('detailsModal'));
        modal.show();
    });
});