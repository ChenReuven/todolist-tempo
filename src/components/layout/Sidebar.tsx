import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  LayoutGrid,
  ListTodo,
  Star,
  Clock,
  Tag,
  ChevronRight,
  Hash,
} from "lucide-react";

interface SidebarProps {
  onFilterChange?: (filter: string) => void;
  onCategorySelect?: (category: string) => void;
  selectedFilter?: string;
  selectedCategory?: string;
}

const Sidebar = ({
  onFilterChange = () => {},
  onCategorySelect = () => {},
  selectedFilter = "all",
  selectedCategory = "work",
}: SidebarProps) => {
  const filters = [
    { id: "all", label: "All Tasks", icon: LayoutGrid },
    { id: "today", label: "Today", icon: Calendar },
    { id: "important", label: "Important", icon: Star },
    { id: "upcoming", label: "Upcoming", icon: Clock },
  ];

  const categories = [
    { id: "work", label: "Work", count: 12 },
    { id: "personal", label: "Personal", count: 8 },
    { id: "shopping", label: "Shopping", count: 4 },
    { id: "health", label: "Health", count: 6 },
  ];

  return (
    <div className="w-[280px] h-full bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col">
      <div className="p-4">
        <Input
          placeholder="Filter tasks..."
          className="w-full bg-white dark:bg-gray-800"
        />
      </div>

      <ScrollArea className="flex-1 px-3">
        <div className="space-y-4">
          {/* Filters Section */}
          <div>
            <h3 className="mb-2 px-4 text-sm font-semibold text-gray-500 dark:text-gray-400">
              Filters
            </h3>
            <div className="space-y-1">
              {filters.map((filter) => {
                const Icon = filter.icon;
                return (
                  <Button
                    key={filter.id}
                    variant={
                      selectedFilter === filter.id ? "secondary" : "ghost"
                    }
                    className="w-full justify-start"
                    onClick={() => onFilterChange(filter.id)}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {filter.label}
                  </Button>
                );
              })}
            </div>
          </div>

          <Separator />

          {/* Categories Section */}
          <div>
            <h3 className="mb-2 px-4 text-sm font-semibold text-gray-500 dark:text-gray-400">
              Categories
            </h3>
            <div className="space-y-1">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "secondary" : "ghost"
                  }
                  className="w-full justify-between group"
                  onClick={() => onCategorySelect(category.id)}
                >
                  <div className="flex items-center">
                    <Hash className="mr-2 h-4 w-4" />
                    {category.label}
                  </div>
                  <Badge
                    variant="secondary"
                    className="ml-auto bg-gray-100 dark:bg-gray-800"
                  >
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          <Separator />

          {/* Tags Section */}
          <div>
            <h3 className="mb-2 px-4 text-sm font-semibold text-gray-500 dark:text-gray-400">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2 px-4">
              <Badge variant="outline">#project</Badge>
              <Badge variant="outline">#meeting</Badge>
              <Badge variant="outline">#urgent</Badge>
              <Badge variant="outline">#followup</Badge>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
