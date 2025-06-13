let clickedButton = null;
let currentSugarLevel = null;

function openModal(type, button) {
  if (document.getElementById('side-modal').style.display === 'block') return;

  currentSugarLevel = type;

  ['low', 'normal', 'high'].forEach(id => {
    document.getElementById('modal-' + id).style.display = 'none';
  });

  document.querySelectorAll('.button').forEach(btn => btn.classList.remove('active'));

  clickedButton = button;
  clickedButton.classList.add('active');

  document.getElementById('modal-' + type).style.display = 'block';

  document.body.classList.add('blur');
}

function closeSideModal() {
  document.getElementById('side-modal').style.display = 'none';
  document.body.classList.remove('blur');

  ['cheesecake', 'cake', 'icecream', 'chocolate'].forEach(id => {
    const modal = document.getElementById('dessert-modal-' + id);
    if (modal) modal.style.display = 'none';
  });

  if (clickedButton) {
    clickedButton.classList.remove('active');
    clickedButton.style.opacity = '1';
  }

  document.querySelectorAll('.button').forEach(btn => {
    btn.classList.remove('disabled');
  });
}

function closeModal(type) {
  const modal = document.getElementById('modal-' + type);
  if (modal) modal.style.display = 'none';

  showSideModal();
}

function showSideModal() {
  document.getElementById('side-modal').style.display = 'block';

  if (clickedButton) {
    document.getElementById('selected-level').textContent = "You selected: " + clickedButton.textContent;
  }

  document.querySelectorAll('.button').forEach(btn => {
    if (btn !== clickedButton) btn.classList.add('disabled');
  });
}

function openDessertModal(type) {
    ['cheesecake', 'cake', 'icecream', 'chocolate'].forEach(id => {
      document.getElementById('dessert-modal-' + id).style.display = 'none';
    });
  
    const modal = document.getElementById('dessert-modal-' + type);
    if (modal) {
      const title = modal.querySelector('h3');
      if (currentSugarLevel === 'low') {
        title.textContent = `Low Sugar ${type.charAt(0).toUpperCase() + type.slice(1)} Options`;
      } else if (currentSugarLevel === 'normal') {
        title.textContent = `Normal Sugar ${type.charAt(0).toUpperCase() + type.slice(1)} Options`;
      } else if (currentSugarLevel === 'high') {
        title.textContent = `High Sugar ${type.charAt(0).toUpperCase() + type.slice(1)} Options`;
      }
  
      const lowOptions = modal.querySelectorAll('.low-sugar-options');
      const normalOptions = modal.querySelectorAll('.normal-sugar-options');
      const highOptions = modal.querySelectorAll('.high-sugar-options');
      
      lowOptions.forEach(opt => opt.style.display = 'none');
      normalOptions.forEach(opt => opt.style.display = 'none');
      highOptions.forEach(opt => opt.style.display = 'none');
      
      if (currentSugarLevel === 'low') {
        lowOptions.forEach(opt => opt.style.display = 'flex');
      } else if (currentSugarLevel === 'normal') {
        normalOptions.forEach(opt => opt.style.display = 'flex');
      } else if (currentSugarLevel === 'high') {
        highOptions.forEach(opt => opt.style.display = 'flex');
      }
  
      modal.style.display = 'block';
    }
}