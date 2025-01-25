import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Grid, List, Moon, Search, Sun } from "lucide-react";

interface TopNavProps {
  onViewToggle?: (view: "grid" | "list") => void;
  onSearch?: (query: string) => void;
  onThemeToggle?: () => void;
  currentView?: "grid" | "list";
  isDarkMode?: boolean;
}

const TopNav = ({
  onViewToggle = () => {},
  onSearch = () => {},
  onThemeToggle = () => {},
  currentView = "grid",
  isDarkMode = false,
}: TopNavProps) => {
  return (
    <div className="w-full h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 flex items-center justify-between">
      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search tasks..."
            className="pl-10 w-full"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>

      {/* View Toggle and Theme Switch */}
      <div className="flex items-center gap-4">
        <TooltipProvider>
          {/* View Toggle Buttons */}
          <div className="flex gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={currentView === "grid" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => onViewToggle("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Grid View</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={currentView === "list" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => onViewToggle("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>List View</p>
              </TooltipContent>
            </Tooltip>
          </div>

          {/* Theme Toggle */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={onThemeToggle}
                className="ml-2"
              >
                {isDarkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{isDarkMode ? "Light Mode" : "Dark Mode"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default TopNav;
