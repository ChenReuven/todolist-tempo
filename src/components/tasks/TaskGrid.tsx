import React, { useState } from "react";
import TaskCard from "./TaskCard";
import { Button } from "@/components/ui/button";
import { LayoutGrid, List } from "lucide-react";

interface Task {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  dueDate: string;
  tags: string[];
}

interface TaskGridProps {
  tasks?: Task[];
  viewMode?: "grid" | "list";
  onTaskEdit?: (taskId: string) => void;
  onTaskDelete?: (taskId: string) => void;
  onTaskComplete?: (taskId: string) => void;
}

const defaultTasks: Task[] = [
  {
    id: "1",
    title: "Complete Project Proposal",
    description: "Draft and finalize the Q2 project proposal for client review",
    priority: "high",
    dueDate: "2024-04-15",
    tags: ["work", "urgent"],
  },
  {
    id: "2",
    title: "Team Meeting",
    description: "Weekly sync with development team",
    priority: "medium",
    dueDate: "2024-04-10",
    tags: ["meeting", "team"],
  },
  {
    id: "3",
    title: "Update Documentation",
    description: "Review and update API documentation",
    priority: "low",
    dueDate: "2024-04-20",
    tags: ["documentation"],
  },
];

const TaskGrid = ({
  tasks = defaultTasks,
  viewMode = "grid",
  onTaskEdit = (id) => console.log("Edit task:", id),
  onTaskDelete = (id) => console.log("Delete task:", id),
  onTaskComplete = (id) => console.log("Complete task:", id),
}: TaskGridProps) => {
  const [currentViewMode, setCurrentViewMode] = useState(viewMode);

  return (
    <div className="w-full h-full bg-gray-50 dark:bg-gray-900 p-6">
      {/* View Toggle */}
      <div className="mb-6 flex justify-end">
        <div className="flex gap-2 bg-white dark:bg-gray-800 p-1 rounded-lg shadow-sm">
          <Button
            variant={currentViewMode === "grid" ? "default" : "ghost"}
            size="sm"
            onClick={() => setCurrentViewMode("grid")}
          >
            <LayoutGrid className="h-4 w-4 mr-1" />
            Grid
          </Button>
          <Button
            variant={currentViewMode === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => setCurrentViewMode("list")}
          >
            <List className="h-4 w-4 mr-1" />
            List
          </Button>
        </div>
      </div>

      {/* Tasks Container */}
      <div
        className={`
          ${
            currentViewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "flex flex-col gap-4"
          }
        `}
      >
        {tasks.map((task) => (
          <div
            key={task.id}
            className={currentViewMode === "list" ? "w-full" : ""}
          >
            <TaskCard
              title={task.title}
              description={task.description}
              priority={task.priority}
              dueDate={task.dueDate}
              tags={task.tags}
              onEdit={() => onTaskEdit(task.id)}
              onDelete={() => onTaskDelete(task.id)}
              onComplete={() => onTaskComplete(task.id)}
            />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {tasks.length === 0 && (
        <div className="flex flex-col items-center justify-center h-[50vh] text-gray-500 dark:text-gray-400">
          <p className="text-lg font-medium">No tasks found</p>
          <p className="text-sm">Create a new task to get started</p>
        </div>
      )}
    </div>
  );
};

export default TaskGrid;
