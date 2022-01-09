
function renderLicenseBadge(license) {
    let licenseSection = data.license[0];
    let yourLicense = ''
    if(licenseSection === 'MIT') {
      yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (licenseSection === 'GPLv3') {
      yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    } else if (licenseSection === 'IBM') {
      yourLicense = `![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`
    } else if(licenseSection === 'Apache') {
      yourLicense = '![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)'
    } else {
      yourLicense = '';
    }
    return yourLicense;
};


function renderLicenseLink(license) {
    let licenseLink = data.license[0];
    let yourLink = '';
    if(licenseLink === 'MIT') {
      yourLink = `<a href = "https://opensource.org/licenses/MIT">License Link</a>`
    } else if (licenseLink === 'GPLv3') {
      yourLink = `<a href = "http://perso.crans.org/besson/LICENSE.html">License Link</a>`
    } else if (licenseLink === 'IBM') {
      yourLink = `<a href = "https://opensource.org/licenses/IPL-1.0">License Link</a>`
    } else if(licenseLink === 'Apache') {
      yourLink = `<a href = "https://opensource.org/licenses/Apache-2.0">License Link</a>`
    } else {
      yourLink = '';
    }
    return yourLink;
};

function renderLicenseSection(license) {
    let licenseSection = data.license[0];
    let yourSection = ''
    if(licenseSection === 'MIT') {
      yourSection = `<a href = "https://gist.github.com/ckib16/8732561535ed766cd6b8">MIT Guide</a>`
  
    } else if(licenseSection === 'GPLv3') {
      yourSection = `<a href = "https://github.com/TheFox/GPLv3.mdl">GPLv3 Guide</a>`
  
    } else if(licenseSection === 'IBM') {
      yourSection = `<a href = "https://www.ibm.com/docs/en/spectrum-archive-ee/1.3.0.0?topic=reference-licensing-readme" </a>`
  
    }else if(licenseSection === 'Apache') {
      yourSection = `<a href = "https://github.com/Medium/opensource/blob/master/apache-license-2.0.md">Apache Guide</a>`
  
    } else {
      yourSection = 'N/A'
    }
    return yourSection;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.description}
  ${data.licenseBadge}
  [A deployed version can be viewed here.](${data.URL})
  
---
  ## Contents
  1. [About](#about)
      1. [User Story](#user%20story)
      2. [Acceptance criteria](#acceptance%20criteria)
      3. [Visuals](#visuals)
      4. [Build](#build)
  2. [Installation](#installation)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Authors and acknowledgment](#authors%20and%20acknowledgment)
---
  ## About
  ${data.about}
---
  ### User Story
  
---
  ### Acceptance Criteria
  
  
---
  ## Visuals:
  ![]()
---
  ## Installation:
  ${data.installation}
  To clone the repo:
  
      git clone ${data.clone}
  
---
  ## License
  License used for this project - ${data.license}
  * For more information on license types, please reference this website
  for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).
---
  ## Contributing:
  
  To contribute to this application, create a pull request.
  Here are the steps needed for doing that:
  - Fork the repo
  - Create a feature branch (git checkout -b NAME-HERE)
  - Commit your new feature (git commit -m 'Add some feature')
  - Push your branch (git push)
  - Create a new Pull Request
  Following a code review, your feature will be merged.
---
  ## Tests:
  ${data.test}
---
  ## Authors and Acknowledgments
  ${data.author}
---
  ### Contact Information:
    *GitHub Username: ${data.userName}
    *GitHub Email: ${data.userEmail}
  

`;
}

module.exports = generateMarkdown;
