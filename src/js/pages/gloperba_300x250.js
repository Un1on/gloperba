const SetupStandardBanner = require('../setup/setup-standard');

window.addEventListener('load', () => {
  const standardBanner = new SetupStandardBanner();
  standardBanner.init();
});