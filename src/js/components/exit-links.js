module.exports = function() {
  if (document.getElementsByClassName('linkToSite').length) {
    const links = document.getElementsByClassName('linkToSite');
    for (let i = 0; i < links.length; i += 1) {
      links[i].addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        Enabler.exit('Gloperba', 'http://gloperba.com');
      });
    }
  }
  if (document.getElementsByClassName('medwatch').length) {
    const links = document.getElementsByClassName('medwatch');
    for (let i = 0; i < links.length; i += 1) {
      links[i].addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        Enabler.exit('Medwatch', 'https://www.fda.gov/medwatch');
      });
    }
  }
  if (document.getElementsByClassName('PInfo').length) {
    const links = document.getElementsByClassName('PInfo');
    for (let i = 0; i < links.length; i += 1) {
      links[i].addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        Enabler.exit('PInfo', 'https://www.gloperba.com/downloads/pdf/Gloperba_PI.pdf');
      });
    }
  }
  if (document.getElementsByClassName('references').length) {
    const links = document.getElementsByClassName('references');
    for (let i = 0; i < links.length; i += 1) {
      links[i].addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        Enabler.exit('References', 'https://www.accessdata.fda.gov/scripts/cder/ob/index.cfm');
      });
    }
  }
};