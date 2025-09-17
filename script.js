// Tabs
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// Menu mobile
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
menuToggle.addEventListener('click',()=>{menu.classList.toggle('show');});

// Modal inscrição
const modal = document.getElementById("myModal");
const openModal = document.getElementById("openModal");
const openModal2 = document.getElementById("openModal2");
const closeModal = document.getElementById("closeModal");
const form = document.getElementById("inscricaoForm");
const successMsg = document.getElementById("successMsg");

openModal.onclick = () => {modal.style.display = "block";}
openModal2.onclick = () => {modal.style.display = "block";}
closeModal.onclick = () => {modal.style.display = "none";}
window.onclick = (event) => {if(event.target == modal){modal.style.display = "none";}}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  successMsg.style.display = "block";
  form.reset();
});
