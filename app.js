// Mock JSON data
const mockData = {
    "featuredJobs": [
      {
        "id": 1,
        "title": "Full Stack Developer",
        "company": "Tech Innovators",
        "location": "San Francisco, CA",
        "skills": ["JavaScript", "React", "Node.js", "MongoDB"],
        "description": "We are looking for an experienced Full Stack Developer to join our innovative team. You will be responsible for designing and implementing web applications, ensuring the responsiveness of applications, and collaborating with the development team.",
        "applyLink": "https://example.com/full-stack-developer"
      },
      {
        "id": 2,
        "title": "Software Developer",
        "company": "Tech Innovators",
        "location": "Toonto, CA",
        "skills": ["JavaScript", "HTML", "Node.js", "CSS"],
        "description": "We are looking for an experienced Software Developer to join our innovative team. You will be responsible for designing and implementing web applications, ensuring the responsiveness of applications, and collaborating with the development team.",
        "applyLink": "https://example.com/sofware-developer"
      },
      {
        "id": 3,
        "title": "Mobile App Developer",
        "company": "Mobile Solutions Co.",
        "location": "New York, NY",
        "skills": ["Swift", "Java", "React Native", "iOS", "Android"],
        "description": "Join our dynamic team as a Mobile App Developer and contribute to the development of cutting-edge mobile applications. You will be responsible for building high-quality, innovative, and fully performing software in compliance with coding standards and technical design.",
        "applyLink": "https://example.com/mobile-app-developer"
      },
      {
        "id": 4,
        "title": "Data Scientist",
        "company": "Data Insights Corp.",
        "location": "Seattle, WA",
        "skills": ["Python", "Machine Learning", "Data Analysis", "SQL"],
        "description": "Exciting opportunity for a Data Scientist to join our analytics team. You will work on data modeling, machine learning, and statistical analysis to extract insights and support decision-making. Apply now to be part of a data-driven organization!",
        "applyLink": "https://example.com/data-scientist"
      }
      
      // Add more featured jobs as needed
    ]
  };
  
  // Function to create a job listing element
  function createJobListing(job) {
      const jobListing = document.createElement('article');
      jobListing.classList.add('job-listing');
  
      const title = document.createElement('h3');
      title.textContent = job.title;
  
      const company = document.createElement('p');
      company.textContent = `Company: ${job.company}`;
  
      const location = document.createElement('p');
      location.textContent = `Location: ${job.location}`;
  
      const skills = document.createElement('p');
      skills.textContent = `Skills: ${job.skills.join(', ')}`;
  
      const description = document.createElement('p');
      description.textContent = job.description;
  
      const applyLink = document.createElement('a');
      applyLink.href = job.applyLink;
      applyLink.textContent = 'Apply Now';
  
      // Append elements to the job listing container
      jobListing.appendChild(title);
      jobListing.appendChild(company);
      jobListing.appendChild(location);
      jobListing.appendChild(skills);
      jobListing.appendChild(description);
      jobListing.appendChild(applyLink);
  
      return jobListing;
  }
  
  // Function to populate the HTML with job listings
  function populateJobListings() {
      const jobListingsContainer = document.getElementById('job-listings');
  
      // Check if the container exists
      if (!jobListingsContainer) {
          console.error('Container not found');
          return;
      }
  
      // Iterate through each featured job and create HTML elements
      mockData.featuredJobs.forEach(job => {
          const jobListing = createJobListing(job);
          jobListingsContainer.appendChild(jobListing);
      });
  }
  
  // Call the function to populate the HTML with job listings
  populateJobListings();
// Function to filter job listings based on job title and location
function filterJobListings() {
    const jobListingsContainer = document.getElementById('job-listings');
    const jobTitleFilter = document.getElementById('job-title').value.toLowerCase();
    const locationFilter = document.getElementById('location').value.toLowerCase();

    // Remove existing job listings
    while (jobListingsContainer.firstChild) {
        jobListingsContainer.removeChild(jobListingsContainer.firstChild);
    }

    // Filter and display job listings
    mockData.featuredJobs.forEach(job => {
        const jobTitleMatches = job.title.toLowerCase().includes(jobTitleFilter);
        const locationMatches = job.location.toLowerCase().includes(locationFilter);

        if (jobTitleMatches && locationMatches) {
            const jobListing = createJobListing(job);
            jobListingsContainer.appendChild(jobListing);
        }
    });
}

// Add event listeners for the search form
document.getElementById('job-search-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    filterJobListings();
});
  