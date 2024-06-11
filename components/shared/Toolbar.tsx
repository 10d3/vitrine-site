'use client';

import React from "react";
import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Underline,
  Quote,
  Undo,
  Redo,
  Code,
  Image as ImageIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Highlighter,
  Pilcrow,
} from "lucide-react";

type Props = {
  editor: Editor | null;
};

const Toolbar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }

  const addImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const url = reader.result as string;
        editor.chain().focus().setImage({ src: url }).run();
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="px-2 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start gap-2 w-full flex-wrap border border-gray-700">
      <div className="flex justify-around items-center gap-3 w-full lg:w-12/12 flex-wrap ">
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive("heading", { level: 1 }) ? "bg-black text-white p-2 rounded-lg" : "text-black"}>
          <Heading1 size={15} />
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive("heading", { level: 2 }) ? "bg-black text-white p-2 rounded-lg" : "text-black"}>
          <Heading2 size={15} />
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive("heading", { level: 3 }) ? "bg-black text-white p-2 rounded-lg" : "text-black"}>
          <Heading3 size={15} />
        </button>
        <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive("bold") ? "bg-black text-white p-2 rounded-lg" : "text-black"}>
          <Bold size={15} />
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive("italic") ? "bg-black text-white p-2 rounded-lg" : "text-black"}>
          <Italic size={15} />
        </button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()} className={editor.isActive("strike") ? "bg-black text-white p-2 rounded-lg" : "text-black"}>
          <Strikethrough size={15} />
        </button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={editor.isActive("underline") ? "bg-black text-white p-2 rounded-lg" : "text-black"}>
          <Underline size={15} />
        </button>
        <button onClick={() => editor.chain().focus().toggleHighlight().run()} className={editor.isActive("highlight") ? "bg-black text-white p-2 rounded-lg" : "text-black"}>
          <Highlighter size={15} />
        </button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive("bulletList") ? "bg-black text-white p-2 rounded-lg" : "text-black"}>
          <List size={15} />
        </button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive("orderedList") ? "bg-black text-white p-2 rounded-lg" : "text-black"}>
          <ListOrdered size={15} />
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign('left').run()} className={editor.isActive({ textAlign: 'left' }) ? "bg-black text-white p-2 rounded-lg" : "text-black"}>
          <AlignLeft size={15} />
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign('center').run()} className={editor.isActive({ textAlign: 'center' }) ? "bg-black text-white p-2 rounded-lg" : "text-black"}>
          <AlignCenter size={15} />
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign('right').run()} className={editor.isActive({ textAlign: 'right' }) ? "bg-black text-white p-2 rounded-lg" : "text-black"}>
          <AlignRight size={15} />
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign('justify').run()} className={editor.isActive({ textAlign: 'justify' }) ? "bg-black text-white p-2 rounded-lg" : "text-black"}>
          <AlignJustify size={15} />
        </button>
        <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={editor.isActive("codeBlock") ? "bg-black text-white p-2 rounded-lg" : "text-black"}>
          <Code size={15} />
        </button>
        <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={editor.isActive("blockquote") ? "bg-black text-white p-2 rounded-lg" : "text-black"}>
          <Quote size={15} />
        </button>
        {/* <button onClick={() => editor.chain().focus().toggleEmoji().run()} className={editor.isActive("emoji") ? "bg-black text-white p-2 rounded-lg" : "text-black"}>
          <EmojiIcon size={15} />
        </button>
        <button onClick={() => editor.chain().focus().toggleMathematics().run()} className={editor.isActive("mathematics") ? "bg-black text-white p-2 rounded-lg" : "text-black"}>
          <MathFunctionIcon size={15} />
        </button> */}
        <input type="file" onChange={addImage} className="hidden" id="upload-image" />
        <label htmlFor="upload-image" className="text-black">
          <ImageIcon size={15} />
        </label>
        <button onClick={() => editor.chain().focus().undo().run()} className="text-black">
          <Undo size={15} />
        </button>
        <button onClick={() => editor.chain().focus().redo().run()} className="text-black">
          <Redo size={15} />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
