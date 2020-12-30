module.exports = function() {
  if (document.getElementsByClassName('linkToSite').length) {
    const links = document.getElementsByClassName('linkToSite');
    for (let i = 0; i < links.length; i += 1) {
      links[i].addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        Enabler.exit('Gloperba', 'http://gloperba.com/');
      });
    }
  }
  if (document.getElementsByClassName('linkToHowWorksPatient').length) {
    const links = document.getElementsByClassName('linkToHowWorksPatient');
    for (let i = 0; i < links.length; i += 1) {
      links[i].addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        Enabler.exit('Gloperba', 'http://gloperba.com/');
      });
    }
  }
};