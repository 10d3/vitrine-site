"use client";

import { SeparatorHorizontal } from "lucide-react";
import React from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useToolbar } from "@/components/toolbars/toolbar-provider";

const HorizontalRuleToolbar = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, onClick, children, ...props }, ref) => {
		const { editor } = useToolbar();
		return (
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						variant="ghost"
						size="icon"
						className={cn("h-8 w-8", className)}
						onClick={(e) => {
							editor?.chain().focus().setHorizontalRule().run();
							onClick?.(e);
						}}
						ref={ref}
						{...props}
					>
						{children || <SeparatorHorizontal className="h-4 w-4" />}
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<span>Horizontal Rule</span>
				</TooltipContent>
			</Tooltip>
		);
	},
);

HorizontalRuleToolbar.displayName = "HorizontalRuleToolbar";

export { HorizontalRuleToolbar };
