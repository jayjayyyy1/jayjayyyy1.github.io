document.querySelectorAll('.see-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.menu-card');
        const details = card.getAttribute('data-details');
        const title = card.querySelector('.card-title').textContent;

        // Populate the modal with details
        document.getElementById('detailsModalLabel').textContent = title;
        document.getElementById('detailsContent').textContent = details;

        // Show the modal
        const detailsModal = new bootstrap.Modal(document.getElementById('detailsModal'));
        detailsModal.show();
    });
});