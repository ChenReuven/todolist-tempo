import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Edit2, Trash2, CheckCircle } from "lucide-react";

interface TaskCardProps {
  title?: string;
  description?: string;
  priority?: "low" | "medium" | "high";
  dueDate?: string;
  tags?: string[];
  onEdit?: () => void;
  onDelete?: () => void;
  onComplete?: () => void;
}

const priorityColors = {
  low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  medium:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
};

const TaskCard = ({
  title = "Sample Task",
  description = "This is a sample task description that shows how the card will look with content.",
  priority = "medium",
  dueDate = "2024-04-01",
  tags = ["work", "project"],
  onEdit = () => console.log("Edit clicked"),
  onDelete = () => console.log("Delete clicked"),
  onComplete = () => console.log("Complete clicked"),
}: TaskCardProps) => {
  return (
    <Card className="w-[300px] h-[180px] bg-white dark:bg-gray-800 relative group overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="p-4 h-full flex flex-col">
        {/* Priority Indicator */}
        <div
          className={`absolute top-0 right-0 w-2 h-2 m-2 rounded-full ${priority === "high" ? "bg-red-500" : priority === "medium" ? "bg-yellow-500" : "bg-green-500"}`}
        />

        {/* Task Title */}
        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2 truncate">
          {title}
        </h3>

        {/* Task Description */}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs items-center"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-[3] mb-[3]">
          {description}
        </p>

        {/* Due Date */}
        <div className="text-gray-500 dark:text-gray-400 mt-auto text-sm">
          Due: {new Date(dueDate).toLocaleDateString()}
        </div>

        {/* Action Buttons - Shown on Hover */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8"
                  onClick={onEdit}
                >
                  <Edit2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit Task</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8"
                  onClick={onComplete}
                >
                  <CheckCircle className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Complete Task</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 text-red-500 hover:text-red-600"
                  onClick={onDelete}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete Task</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
