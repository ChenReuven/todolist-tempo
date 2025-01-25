import React, { useState } from "react";
import TopNav from "./layout/TopNav";
import Sidebar from "./layout/Sidebar";
import TaskGrid from "./tasks/TaskGrid";
import QuickEntryFAB from "./tasks/QuickEntryFAB";

interface HomeProps {
  initialView?: "grid" | "list";
  initialTheme?: "light" | "dark";
}

const Home = ({ initialView = "grid", initialTheme = "light" }: HomeProps) => {
  const [currentView, setCurrentView] = useState<"grid" | "list">(initialView);
  const [isDarkMode, setIsDarkMode] = useState(initialTheme === "dark");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("work");
  const [isQuickEntryOpen, setIsQuickEntryOpen] = useState(false);

  const handleViewToggle = (view: "grid" | "list") => {
    setCurrentView(view);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleQuickEntrySubmit = (task: {
    title: string;
    description: string;
    priority: string;
  }) => {
    console.log("New task:", task);
    setIsQuickEntryOpen(false);
  };

  return (
    <div
      className={`h-screen w-full flex flex-col ${isDarkMode ? "dark" : ""}`}
    >
      <TopNav
        onViewToggle={handleViewToggle}
        onSearch={handleSearch}
        onThemeToggle={handleThemeToggle}
        currentView={currentView}
        isDarkMode={isDarkMode}
      />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar
          onFilterChange={handleFilterChange}
          onCategorySelect={handleCategorySelect}
          selectedFilter={selectedFilter}
          selectedCategory={selectedCategory}
        />
        <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
          <TaskGrid
            viewMode={currentView}
            searchQuery={searchQuery}
            onTaskEdit={(id) => console.log("Edit task:", id)}
            onTaskDelete={(id) => console.log("Delete task:", id)}
            onTaskComplete={(id) => console.log("Complete task:", id)}
          />
        </main>
      </div>
      <QuickEntryFAB
        isOpen={isQuickEntryOpen}
        onOpenChange={setIsQuickEntryOpen}
        onSubmit={handleQuickEntrySubmit}
      />
    </div>
  );
};

export default Home;
