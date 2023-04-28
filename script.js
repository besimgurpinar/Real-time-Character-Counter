const textarea = document.getElementById('textarea');
const count = document.getElementById('count');
const limit = document.getElementById('limit').textContent;

// Update character count
function updateCount() {
  const text = textarea.value;
  count.textContent = text.length;
}

// Limit character count
function limitCount() {
  const text = textarea.value;
  if (text.length > limit) {
    textarea.value = text.substring(0, limit);
  }
}

// Event listeners
textarea.addEventListener('input', () => {
  updateCount();
  limitCount();
});
