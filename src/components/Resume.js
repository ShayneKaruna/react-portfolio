import React from "react";
import { saveAs } from "file-saver";
import resume from "../ShayneResume.docx";
import "./ResumeStyles.css";

const Resume = () => {
  const downloadResume = () => {
    saveAs(resume, "ShayneKarunaResume.docx");
  };

  return (
    <div className="resumedl">
      <button className="button1" onClick={downloadResume}>
        {" "}
        Download 
      </button>
    </div>
  );
};

export default Resume;
