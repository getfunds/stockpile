import { useState } from "react";

export default function Project() {
  const [activeTab, setActiveTab] = useState("Description");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Description":
        return <p>Replace with your campaign story.</p>;
      case "Updates and Comments":
        return <p>Replace with your updates and comments.</p>;
      case "Progress":
        return <p>Replace with your risks and challenges.</p>;
      case "FAQ":
        return <p>Replace with your FAQ.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <img src="https://via.placeholder.com/500" alt="Campaign"/>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Campaign Title</h1>
          <p>by Creator</p>
          <div>Replace with progress bar component.</div>
          <button className="btn-primary">Contribute</button>
          <div>Replace with social sharing buttons.</div>
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <div className="flex space-x-2">
          <button className={activeTab === "Description" ? "btn-active" : "btn"} onClick={() => setActiveTab("Description")}>Description</button>
          <button className={activeTab === "Updates and Comments" ? "btn-active" : "btn"} onClick={() => setActiveTab("Updates and Comments")}>Updates and Comments</button>
          <button className={activeTab === "Progress" ? "btn-active" : "btn"} onClick={() => setActiveTab("Progress")}>Progress</button>
          <button className={activeTab === "FAQ" ? "btn-active" : "btn"} onClick={() => setActiveTab("FAQ")}>FAQ</button>
        </div>
        <div className="mt-4">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}
