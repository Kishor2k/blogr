const productDrop = document.querySelector('#myDropdown1');
const companyDrop = document.querySelector('#myDropdown2');
const contentDrop = document.querySelector('#myDropdown3');
const productArrow = document.querySelector('.arrow1');
const companyArrow = document.querySelector('.arrow2');
const contentArrow = document.querySelector('.arrow3');
function openFunctionProduct(){
  document.querySelector('#myDropdown1').classList.toggle('show');
  companyDrop.classList.remove('show');
  contentDrop.classList.remove('show');
  productArrow.classList.toggle('rotate');
  if(companyArrow.classList.contains('rotate') || contentArrow.classList.contains('rotate')){
    companyArrow.classList.remove('rotate');
    contentArrow.classList.remove('rotate');
  }
}
function openFunctionCompany(){
  document.querySelector('#myDropdown2').classList.toggle('show');
   productDrop.classList.remove('show');
  contentDrop.classList.remove('show');
   companyArrow.classList.toggle('rotate');
   if(productArrow.classList.contains('rotate') || contentArrow.classList.contains('rotate')){
    productArrow.classList.remove('rotate');
    contentArrow.classList.remove('rotate');
  }
}
function openFunctionConnect(){
  document.querySelector('#myDropdown3').classList.toggle('show');
   productDrop.classList.remove('show');
  companyDrop.classList.remove('show');
   contentArrow.classList.toggle('rotate');
   if(companyArrow.classList.contains('rotate') || productArrow.classList.contains('rotate')){
    companyArrow.classList.remove('rotate');
    productArrow.classList.remove('rotate');
  }
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.querySelectorAll(".dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
     if(productArrow.classList.contains('rotate') || companyArrow.classList.contains('rotate') || contentArrow.classList.contains('rotate')){
      productArrow.classList.remove('rotate');
      companyArrow.classList.remove('rotate');
      contentArrow.classList.remove('rotate');
    }
  }
}


  menu = document.querySelector(".hamburger");
  wrapper = document.querySelector('.wrapper');
  dropdown = document.querySelector('.dropdown');
  ctaGroup = document.querySelector('header .cta-group');
  menu.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    wrapper.classList.toggle('active')
    dropdown.classList.toggle('active');
    ctaGroup.classList.toggle('active');
  })
