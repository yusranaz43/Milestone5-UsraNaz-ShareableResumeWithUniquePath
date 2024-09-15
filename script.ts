const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplay = document.getElementById("resume-display") as HTMLDivElement;
const shareableLinkContainer = document.getElementById("shareable-link-container") as HTMLDivElement;
const shareableLink = document.getElementById("shareable-link") as HTMLAnchorElement;
const downloadPdfButton = document.getElementById("download-pdf") as HTMLButtonElement;


// Function to create a content-editable section
function makeEditable(element: HTMLElement) {
  element.setAttribute("contenteditable", "true");
  element.style.border = "1px dashed #007bff"; // Visual feedback
  element.style.padding = "5px";
}


form.addEventListener("submit", (event) => {
  event.preventDefault();

 
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const phoneNumber = (document.getElementById("phone-number") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const instituteName = (document.getElementById("institue-name") as HTMLInputElement).value;
  const fieldOfStudy = (document.getElementById("field-of-study") as HTMLInputElement).value;
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const completionYear = (document.getElementById("completion-year") as HTMLInputElement).value;
  const skills = (document.getElementById("skills-list") as HTMLTextAreaElement).value;
  const jobTitle = (document.getElementById("job-title") as HTMLInputElement).value;
  const companyName = (document.getElementById("company-name") as HTMLInputElement).value;
  const duration = (document.getElementById("duration") as HTMLInputElement).value;
  const username = (document.getElementById("username") as HTMLInputElement).value;

  // Create the unique URL
  const uniqueUrl = `${username.replace(/\s+/g, '_')}.vercel.app/resume`;
  
  

    
    
    // Display the resume
    const resumeHTML = `
    <div id="resume-container">
    <h2>Your Resume</h2>

    <fieldset class="resume-section">
        <legend>Personal Information</legend>
        <p><strong>Your Resume URL:</strong>${uniqueUrl}</P>
        <p><strong>Name:</strong>${name}</p>
        <p><strong>Phone Number:</strong>${phoneNumber}</p>
        <p><strong>Email:</strong>${email}</p>
    </fieldset>

    <fieldset class="resume-section">
        <legend>Education</legend>
        <p><strong>Institute Name:</strong> ${instituteName}</p>
        <p><strong>Field of Study:</strong> ${fieldOfStudy}</p>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>Completion Year:</strong> ${completionYear}</p>
    </fieldset>

    <fieldset class="resume-section">
        <legend>Skills</legend>
        <p>${skills}</p>
    </fieldset>

    <fieldset class="resume-section">
        <legend>Work Experience</legend>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Duration:</strong> ${duration}</p>
    </fieldset>
    </div>

`;


  resumeDisplay.innerHTML = resumeHTML;
  resumeDisplay.style.display = "block";

  // Show the shareable link container and set the link
  shareableLinkContainer.style.display = "block";
  shareableLink.href = uniqueUrl;
  shareableLink.textContent = uniqueUrl;

  // PDF Download functionality (basic HTML download)
    downloadPdfButton.addEventListener("click", () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeHTML);
    downloadLink.download = `${username.replace(/\s+/g, '_')}_resume.html`;
    downloadLink.click();
  });


  // // Create and append download link
  // const downloadLink = document.createElement('a');
  // downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeHTML);
  // downloadLink.download = `${username}_resume.html`;
  // downloadLink.textContent = "Download as PDF";
  // resumeDisplay.appendChild(downloadLink);

  // // Create and append unique URL
  // const shareableLink = document.createElement('p');
  // shareableLink.innerHTML = `Your shareable resume link: <a href="${uniqueUrl}" target="_blank">${uniqueUrl}</a>`;
  // resumeDisplay.appendChild(shareableLink);


  // Make each section editable
  const nameDisplay = document.getElementById("name-display") as HTMLElement;
  const phoneDisplay = document.getElementById("phone-display") as HTMLElement;
  const emailDisplay = document.getElementById("email-display") as HTMLElement;
  const instituteDisplay = document.getElementById("institute-display") as HTMLElement;
  const fieldDisplay = document.getElementById("field-display") as HTMLElement;
  const degreeDisplay = document.getElementById("degree-display") as HTMLElement;
  const yearDisplay = document.getElementById("year-display") as HTMLElement;
  const skillsDisplay = document.getElementById("skills-display") as HTMLElement;
  const jobDisplay = document.getElementById("job-display") as HTMLElement;
  const companyDisplay = document.getElementById("company-display") as HTMLElement;
  const durationDisplay = document.getElementById("duration-display") as HTMLElement;
  const usernameDisplay = document.getElementById("username-display") as HTMLElement;


  // Apply content-editable to each element
  makeEditable(nameDisplay);
  makeEditable(phoneDisplay);
  makeEditable(emailDisplay);
  makeEditable(instituteDisplay);
  makeEditable(fieldDisplay);
  makeEditable(degreeDisplay);
  makeEditable(yearDisplay);
  makeEditable(skillsDisplay);
  makeEditable(jobDisplay);
  makeEditable(companyDisplay);
  makeEditable(durationDisplay);
  makeEditable(usernameDisplay);

});
