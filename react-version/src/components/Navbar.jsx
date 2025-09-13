import { useEffect, useState } from "react";

export default function Navbar() {
  const [viewCount, setViewCount] = useState("Loading...");

  useEffect(() => {
    async function fetchViewCount() {
      try {
        const res = await fetch("Your lambda API");
        const data = await res.json();
        setViewCount(data.views);
      } catch (err) {
        console.error("Failed to fetch view count", err);
        setViewCount("error");
      }
    }
    fetchViewCount();
  }, []);

  return (
    <nav id="navbar">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#Experience">Experience</a></li>

        <li><a href="#education">Education</a></li>
        <li><a href="#certifications">Certifications</a></li>
        
        <li><a href="#activities">Activities</a></li>
        <li><a href="#hobbies">Hobbies</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="https://github.com/Harshjain10020/Dream" target="_blank" rel="noopener noreferrer">Resume</a></li>
        <li id="counter-link">
          <a href="#">Visits: <span>{viewCount}</span></a>
        </li>
      </ul>
    </nav>
  );
}
