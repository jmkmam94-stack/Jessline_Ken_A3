// Feature 1: Interactive Program Table Filter
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const tableRows = document.querySelectorAll('tbody tr');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      tableRows.forEach(row => {
        if (filterValue === 'all' || row.getAttribute('data-category') === filterValue) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });
});

// JavaScript Form Validation and Interactive Feedback
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('enquiryForm');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent page reload to run validation checks

      const parentName = document.getElementById('parentName');
      const parentPhone = document.getElementById('parentPhone');
      const studentName = document.getElementById('studentName');
      const feedback = document.getElementById('formFeedback');

      let isValid = true;

      // Simple validation checks
      if (parentName.value.trim() === '') {
        alert('Please enter the Parent/Guardian Full Name.');
        parentName.focus();
        isValid = false;
      } else if (parentPhone.value.trim() === '') {
        alert('Please enter a contact phone number.');
        parentPhone.focus();
        isValid = false;
      } else if (studentName.value.trim() === '') {
        alert('Please enter the Student Full Name.');
        studentName.focus();
        isValid = false;
      }

      // If valid, show success alert
      if (isValid) {
        feedback.style.display = 'block';
        form.reset(); // Clear form fields
        
        // Hide feedback automatically after 5 seconds
        setTimeout(() => {
          feedback.style.display = 'none';
        }, 5000);
      }
    });
  }
});