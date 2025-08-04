// Navigation functions
function showSection(section) {
    // Hide all sections
    document.getElementById('vocab-section').classList.add('hidden');
    document.getElementById('texts-section').classList.add('hidden');
    document.getElementById('greek-vocab-section').classList.add('hidden');
    document.getElementById('greek-texts-section').classList.add('hidden');
    document.getElementById('civ-topics-section').classList.add('hidden');
    document.getElementById('civ-resources-section').classList.add('hidden');
    
    // Show selected section
    document.getElementById(section + '-section').classList.remove('hidden');
    
    // Update nav active state - remove active from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active to the clicked nav item
    event.target.classList.add('active');
}

// Set text selection
function selectText(textName) {
    // Update active text card
    document.querySelectorAll('.text-card').forEach(card => {
        card.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Show corresponding videos
    document.getElementById('messalina-videos').classList.add('hidden');
    document.getElementById('future-videos').classList.add('hidden');
    
    if (textName === 'messalina') {
        document.getElementById('messalina-videos').classList.remove('hidden');
    } else {
        document.getElementById('future-videos').classList.remove('hidden');
    }
}

// Modal functions
function showInfoModal() {
    document.getElementById('infoModal').style.display = 'block';
}

function closeInfoModal() {
    document.getElementById('infoModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
        closeInfoModal();
    }
}
