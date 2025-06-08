"use strict";
const functionUrl = "https://q6bzlws26gibi34ul2hvglib240dtltp.lambda-url.ap-south-1.on.aws/";
      
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