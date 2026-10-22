function showGenre(id) {
    document.querySelectorAll('main section').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}
