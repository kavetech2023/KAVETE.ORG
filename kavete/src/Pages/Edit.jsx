import { House } from "lucide-react";
import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { JobContext } from "../Context/JobContext";
import { useReactToPrint } from "react-to-print";
import run from "../Config/gemini";

const Edit = () => {
  const { saved } = useContext(JobContext);

  const [moreInfoData, setMoreInfoData] = useState(null);
  const [close, setClose] = useState(false);

  const componentRef = useRef();
  const handlePrintRTP = useReactToPrint({
    content: () => componentRef.current,
  });

  const open = () => {
    close ? setClose(false) : setClose(true);
  };

  const handleMoreInfo = async () => {
    try {
      const processedData = await run(
        `Create a comprehensive CV for a position based on ${saved}. Include the following sections: Summary, Skills, Experience, Education, Projects, and Certifications with examples of made up companies. Tailor the CV to highlight some guessed Specific Skills or Achievements and format the paragraph under the sections into unordered lists."`
      ); // Assuming run exists to process the data
      const formattedData = formatData(processedData); // Assuming formatData exists to format the data

      setMoreInfoData(formattedData);
    } catch (error) {
      console.error("Error processing data:", error);
      // Handle errors gracefully (e.g., display an error message to the user)
    }
  };

  function formatData(data) {
    // Remove three asterisks
    data = data.replace(/\*\*\*/g, "");
    data = data.replace(/\*\*/g, "</b>");
  
    // Replace single asterisk with an unordered list
    data = data.replace(/\*/g, "<li>");
  
    // Split the data into paragraphs
    const paragraphs = data.split("\n\n");
  
    // Initialize an array to store formatted paragraphs
    const formattedParagraphs = [];
  
    // Loop through each paragraph and apply styling based on its role
    for (const paragraph of paragraphs) {
      let formattedParagraph = paragraph;
  
      // Detect paragraph role using regular expressions or other techniques
      if (paragraph.startsWith("Summary")) {
        formattedParagraph =
          `<h2 className="font-bold text-gray-800">` +
          formattedParagraph +
          `</h2>`;
      } else if (paragraph.startsWith("Skills")) {
        formattedParagraph =
          `<h3 className="font-bold">` + formattedParagraph + `</h3>`;
      } else if (paragraph.startsWith("Experience")) {
        formattedParagraph =
          `<h3 className="font-bold">` + formattedParagraph + `</h3>`;
      } else if (paragraph.startsWith("Education")) {
        formattedParagraph =
          `<h3 className="font-bold">` + formattedParagraph + `</h3>`;
      } else if (paragraph.startsWith("Projects")) {
        formattedParagraph =
          `<h3 className="font-bold">` + formattedParagraph + `</h3>`;
      } else if (paragraph.startsWith("Certifications")) {
        formattedParagraph =
          `<h3 className="font-bold">` + formattedParagraph + `</h3>`;
      }
  
      // Add formatted paragraph to the array
      formattedParagraphs.push(formattedParagraph);
    }
  
    // Join formatted paragraphs into a single string
    const formattedString = formattedParagraphs.join("<br><br>");
  
    return formattedString;
  }
  return (
    <div className="w-full  px-1 max-w-[850px] mx-auto">
      <div className="mt-5 grid items-center grid-cols-1 gap-3  w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 border-r-black gap-3 items-center bg-white rounded-lg shadow-lg p-3 h-full">
          <div>
            <button
              className="py-2.5 px-5 me-2 w-full h-full text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={() => {
                handleMoreInfo();
                open();
              }}
            >
              {" "}
              Generate Cv
            </button>
          </div>
          <div>
            <button className="py-2.5 px-5 me-2 w-full h-full text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Generate Cover Letter
            </button>
          </div>
          <div>
           
          </div>
        </div>

        <div className="bg-white shadow-lg rounded p-4 font-normal ">
          <div className={`cv ${close ? "show" : ""}`} ref={componentRef}>
            {moreInfoData ? (
              <p dangerouslySetInnerHTML={{ __html: moreInfoData }} />
            ) : (
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
