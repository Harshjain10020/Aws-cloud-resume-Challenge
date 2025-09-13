export default function Certifications() {
  return (
    <section id="certifications">
      <dt>Licenses & Certifications</dt>
      <br />
      <dd>
        {/* --- Salesforce Certification --- */}
        <div className="certification-entry">
          <img src="/sf-cert.png" className="certification-badge" alt="Salesforce Certified Agentforce Specialist" />
          <div className="certification-details">
            <h2>Salesforce Certified Agentforce Specialist</h2>
            <p>Issued Sept 10, 2025</p>
            <a href="https://www.salesforce.com/trailblazer/harshjain10020" target="_blank" rel="noopener noreferrer">View credential</a>
          </div>
        </div>

        {/* --- GitHub Certification --- */}
        <div className="certification-entry">
          <img src="/image.png" className="certification-badge" alt="GitHub Foundations" />
          <div className="certification-details">
            <h2>GitHub Foundations</h2>
            <p>Issued March 22, 2025</p>
            <a href="https://www.credly.com/badges/3b72a56a-0d9e-4630-be82-38759b17931c" target="_blank" rel="noopener noreferrer">View credential</a>
          </div>
        </div>
        
        {/* --- AWS Certification --- */}
        <div className="certification-entry">
          <img src="/aws_cloud_practiotiner.png" className="certification-badge" alt="AWS CCP" />
          <div className="certification-details">
            <h2>AWS Certified Cloud Practitioner</h2>
            <p>Issued Jan 17, 2025</p>
            <a href="https://www.credly.com/badges/a8a95da4-8d97-4c4c-ab45-53b921249111" target="_blank" rel="noopener noreferrer">View credential</a>
          </div>
        </div>
        
        {/* --- IIT Kharagpur Certification --- */}
        <div className="certification-entry">
          <img src="/nptel.png" className="certification-badge nptel-badge" alt="nptel" />
          <div className="certification-details">
            <h2>Cloud Computing IIT Kharagpur Top 5% - Silver Medal</h2>
            <p>Issued Jan-Apr, 2024</p>
            <a href="https://github.com/Harshjain10020/certifications/blob/d5a76ea2968b2ec613a7a9309a4f572e28243fe9/Cloud%20Computing.pdf" target="_blank" rel="noopener noreferrer">View credential</a>
          </div>
        </div>

      </dd>
    </section>
  );
}