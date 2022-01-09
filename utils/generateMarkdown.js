
function renderLicenseBadge(data) {
    let licenseSection = data.license[0];
    let License = ''
    if(licenseSection === 'MIT') {
      License = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (licenseSection === 'GPLv3') {
      License = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    } else if (licenseSection === 'IBM') {
      License = `![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`
    } else if(licenseSection === 'Apache') {
      License = '![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)'
    } else {
      License = '';
    }
    return License;
};


function renderLicenseLink(data) {
    let linkLicense = data.license[0];
    let licenseLink = '';
    if(linkLicense === 'MIT') {
      licenseLink = `<a href = "https://opensource.org/licenses/MIT">License Link</a>`
    } else if (linkLicense === 'GPLv3') {
      licenseLink = `<a href = "http://perso.crans.org/besson/LICENSE.html">License Link</a>`
    } else if (linkLicense === 'IBM') {
      licenseLink = `<a href = "https://opensource.org/licenses/IPL-1.0">License Link</a>`
    } else if(linkLicense === 'Apache') {
      licenseLink = `<a href = "https://opensource.org/licenses/Apache-2.0">License Link</a>`
    } else {
      licenseLink = '';
    }
    return licenseLink;
}

function renderLicenseSection(data) {
    let licenseSection = data.license[0];
    let Section = ''
    if(licenseSection === 'MIT') {
      Section = `<a href = "https://gist.github.com/ckib16/8732561535ed766cd6b8">MIT Guide</a>`
  
    } else if(licenseSection === 'GPLv3') {
      Section = `<a href = "https://github.com/TheFox/GPLv3.mdl">GPLv3 Guide</a>`
  
    } else if(licenseSection === 'IBM') {
      Section = `<a href = "https://www.ibm.com/docs/en/spectrum-archive-ee/1.3.0.0?topic=reference-licensing-readme" </a>`
  
    }else if(licenseSection === 'Apache') {
      Section = `<a href = "https://github.com/Medium/opensource/blob/master/apache-license-2.0.md">Apache Guide</a>`
  
    } else {
      Section = 'N/A'
    }
    return Section;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badge: ${renderLicenseBadge(data)}
  ## Table of Contents:
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [Credits](#credits)
    5. [License](#license)
    6. [Features](#features)
    7. [Contirbute](#contribute)
    8. [Test](#test)
    9. [Questions](#questions)
  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## Credits:
  ${data.credits}
  ## Licenses:
  1. Your Badge: ${renderLicenseBadge(data)}
  2. Your Badge link: ${renderLicenseLink(data)}
  3. Your Badge Readme: ${renderLicenseSection(data)}
  ## Features:
  ${data.features}
  ## Contribute:
  ${data.contribute}
  ## Test:
  ${data.test}
  `
}

module.exports = generateMarkdown;
