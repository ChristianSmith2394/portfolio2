import React from "react";
import Categories from "./Categories.jsx";
import MenuItems from "./MenuItems.jsx";
import projects from "./allProjects.jsx";
import { useState } from "react";
import "../styles/projects.css";

const allCategories = [
  "All",
  ...new Set(projects.map((item) => item.category)),
];

function PortfoliosPage() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(projects);

  const filter = (category) => {
    if (category === "All") {
      setMenuItems(projects);
      return;
    }
    const filteredData = projects.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filteredData);
  };

  return (
    <div className="PortfolioPage">
      <div className="title"></div>
      <div className="portfolios-data">
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
}

export default PortfoliosPage;
