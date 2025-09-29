"use client";

import Image from "@tiptap/extension-image";
import {
	NodeViewContent,
	type NodeViewProps,
	NodeViewWrapper,
	ReactNodeViewRenderer,
} from "@tiptap/react";
import {
	AlignCenter,
	AlignLeft,
	AlignRight,
	Copy,
	Maximize,
	MoreVertical,
	Trash,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { cn, duplicateContent } from "@/lib/utils";

export const ImageExtension = Image.extend({
	addAttributes() {
		return {
			src: {
				default: null,
			},
			alt: {
				default: null,
			},
			title: {
				default: null,
			},
			width: {
				default: "100%",
			},
			height: {
				default: null,
			},
			align: {
				default: "center",
			},
		};
	},

	addNodeView: () => {
		return ReactNodeViewRenderer(TiptapImage);
	},
});

function TiptapImage(props: NodeViewProps) {
	const { node, editor, selected, deleteNode, updateAttributes } = props;
	const imageRef = useRef<HTMLImageElement | null>(null);
	const nodeRef = useRef<HTMLDivElement | null>(null);
	const [resizing, setResizing] = useState(false);
	const [resizingPosition, setResizingPosition] = useState<"left" | "right">(
		"left",
	);
	const [resizeInitialWidth, setResizeInitialWidth] = useState(0);
	const [resizeInitialMouseX, setResizeInitialMouseX] = useState(0);

	const [openedMore, setOpenedMore] = useState(false);

	function handleResizingPosition({
		e,
		position,
	}: {
		e: React.MouseEvent<HTMLDivElement, MouseEvent>;
		position: "left" | "right";
	}) {
		startResize(e);
		setResizingPosition(position);
	}

	function startResize(event: React.MouseEvent<HTMLDivElement>) {
		event.preventDefault();

		setResizing(true);

		setResizeInitialMouseX(event.clientX);
		if (imageRef.current) {
			setResizeInitialWidth(imageRef.current.offsetWidth);
		}
	}

	function resize(event: MouseEvent) {
		if (!resizing) {
			return;
		}

		let dx = event.clientX - resizeInitialMouseX;
		if (resizingPosition === "left") {
			dx = resizeInitialMouseX - event.clientX;
		}

		const newWidth = Math.max(resizeInitialWidth + dx, 150); // Minimum width: 150
		const parentWidth = nodeRef.current?.parentElement?.offsetWidth || 0; // Get the parent element's width

		if (newWidth < parentWidth) {
			updateAttributes({
				width: newWidth,
			});
		}
	}

	function endResize() {
		setResizing(false);
		setResizeInitialMouseX(0);
		setResizeInitialWidth(0);
	}

	function handleTouchStart(
		event: React.TouchEvent,
		position: "left" | "right",
	) {
		event.preventDefault();

		setResizing(true);
		setResizingPosition(position);

		setResizeInitialMouseX(event.touches[0].clientX);
		if (imageRef.current) {
			setResizeInitialWidth(imageRef.current.offsetWidth);
		}
	}

	function handleTouchMove(event: TouchEvent) {
		if (!resizing) {
			return;
		}

		let dx = event.touches[0].clientX - resizeInitialMouseX;
		if (resizingPosition === "left") {
			dx = resizeInitialMouseX - event.touches[0].clientX;
		}

		const newWidth = Math.max(resizeInitialWidth + dx, 150);
		const parentWidth = nodeRef.current?.parentElement?.offsetWidth || 0;

		if (newWidth < parentWidth) {
			updateAttributes({
				width: newWidth,
			});
		}
	}

	function handleTouchEnd() {
		setResizing(false);
		setResizeInitialMouseX(0);
		setResizeInitialWidth(0);
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		// Mouse events
		window.addEventListener("mousemove", resize);
		window.addEventListener("mouseup", endResize);
		// Touch events
		window.addEventListener("touchmove", handleTouchMove);
		window.addEventListener("touchend", handleTouchEnd);
		return () => {
			window.removeEventListener("mousemove", resize);
			window.removeEventListener("mouseup", endResize);
			window.removeEventListener("touchmove", handleTouchMove);
			window.removeEventListener("touchend", handleTouchEnd);
		};
	}, [resizing, resizeInitialMouseX, resizeInitialWidth]);

	return (
		<NodeViewWrapper
			ref={nodeRef}
			className={cn(
				"relative flex flex-col rounded-md border-2 border-transparent",
				selected ? "border-blue-300" : "",
				node.attrs.align === "left" && "left-0 -translate-x-0",
				node.attrs.align === "center" && "left-1/2 -translate-x-1/2",
				node.attrs.align === "right" && "left-full -translate-x-full",
			)}
			style={{ width: node.attrs.width }}
		>
			<div
				className={cn(
					"group relative flex flex-col rounded-md",
					resizing && "",
				)}
			>
				<img
					ref={imageRef}
					src={node.attrs.src}
					alt={node.attrs.alt}
					title={node.attrs.title}
				/>
				<NodeViewContent as="div" className="text-center">
					{node.attrs.title}
				</NodeViewContent>

				{editor?.isEditable && (
					<>
						<div
							className="absolute inset-y-0 z-20 flex w-[25px] cursor-col-resize items-center justify-start p-2"
							style={{ left: 0 }}
							onMouseDown={(event) => {
								handleResizingPosition({ e: event, position: "left" });
							}}
							onTouchStart={(event) => handleTouchStart(event, "left")}
						>
							<div className="z-20 h-[70px] w-1 rounded-xl border bg-[rgba(0,0,0,0.65)] opacity-0 transition-all group-hover:opacity-100" />
						</div>
						<div
							className="absolute inset-y-0 z-20 flex w-[25px] cursor-col-resize items-center justify-end p-2"
							style={{ right: 0 }}
							onMouseDown={(event) => {
								handleResizingPosition({ e: event, position: "right" });
							}}
							onTouchStart={(event) => handleTouchStart(event, "right")}
						>
							<div className="z-20 h-[70px] w-1 rounded-xl border bg-[rgba(0,0,0,0.65)] opacity-0 transition-all group-hover:opacity-100" />
						</div>
						<div
							className={cn(
								"absolute right-4 top-4 flex items-center gap-1 rounded-md border bg-background p-1 opacity-0 transition-opacity",
								!resizing && "group-hover:opacity-100",
								openedMore && "opacity-100",
							)}
						>
							<Button
								size="icon"
								className={cn(
									"size-7",
									node.attrs.align === "left" && "bg-accent",
								)}
								variant="ghost"
								onClick={() => {
									updateAttributes({
										align: "left",
									});
								}}
							>
								<AlignLeft className="size-4" />
							</Button>
							<Button
								size="icon"
								className={cn(
									"size-7",
									node.attrs.align === "center" && "bg-accent",
								)}
								variant="ghost"
								onClick={() => {
									updateAttributes({
										align: "center",
									});
								}}
							>
								<AlignCenter className="size-4" />
							</Button>
							<Button
								size="icon"
								className={cn(
									"size-7",
									node.attrs.align === "right" && "bg-accent",
								)}
								variant="ghost"
								onClick={() => {
									updateAttributes({
										align: "right",
									});
								}}
							>
								<AlignRight className="size-4" />
							</Button>
							<Separator orientation="vertical" className="h-[20px]" />
							<DropdownMenu
								open={openedMore}
								onOpenChange={(val) => {
									setOpenedMore(val);
								}}
							>
								<DropdownMenuTrigger asChild>
									<Button size="icon" className="size-7" variant="ghost">
										<MoreVertical className="size-4" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									align="start"
									alignOffset={-90}
									className="mt-1 text-sm"
								>
									<DropdownMenuItem
										onClick={() => {
											duplicateContent(editor);
										}}
									>
										<Copy className="mr-2 size-4" /> Duplicate
									</DropdownMenuItem>
									<DropdownMenuItem
										onClick={() => {
											updateAttributes({
												width: "fit-content",
											});
										}}
									>
										<Maximize className="mr-2 size-4" /> Full Screen
									</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem
										className="text-destructive focus:text-destructive"
										onClick={() => {
											deleteNode();
										}}
									>
										<Trash className="mr-2 size-4" /> Delete Image
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</>
				)}
			</div>
		</NodeViewWrapper>
	);
}
