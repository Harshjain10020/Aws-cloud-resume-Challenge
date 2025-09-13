"use strict";
const functionUrl = "Your lambda API";
      
        async function fetchViewCount() {
          try {
            const response = await fetch(functionUrl);
            const data = await response.json();
      
            // Display the view count
            document.getElementById("viewCount").innerText = data.views;
          } catch (error) {
            console.log(error)
            console.error("Error fetching view count:", error);
            document.getElementById("viewCount").innerText = "error";
          }
        }
      
        // Run when the page loads
        window.onload = fetchViewCount;