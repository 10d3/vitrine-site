'use client';

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Strike from '@tiptap/extension-strike';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import CodeBlock from '@tiptap/extension-code-block';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import CharacterCount from '@tiptap/extension-character-count';
import Color from '@tiptap/extension-color';
import Document from '@tiptap/extension-document';
import Dropcursor from '@tiptap/extension-dropcursor';
import Focus from '@tiptap/extension-focus';
import FontFamily from '@tiptap/extension-font-family';
import Heading from '@tiptap/extension-heading';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Link from '@tiptap/extension-link';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import TextStyle from '@tiptap/extension-text-style';
import Typography from '@tiptap/extension-typography';
import Toolbar from "./Toolbar";

const Tiptap = ({ onFieldChange, setContent, content }: any) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Bold,
      Italic,
      Strike,
      BulletList,
      OrderedList,
      // CodeBlockLowlight,
      CharacterCount,
      Color,
      Document,
      Dropcursor,
      Focus,
      FontFamily,
      Heading,
      HorizontalRule,
      Link,
      Paragraph,
      Placeholder,
      Subscript,
      Superscript,
      TaskList.configure({
        HTMLAttributes: {
          class: "not-prose pl-2",
        },
      }),
      TaskItem.configure({
        HTMLAttributes: {
          class: "flex items-start my-4",
        },
        nested: true,
      }),
      TextStyle,
      Typography
    ],
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
      },
    },
    content: content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onFieldChange(html);
      setContent(html);
    },
  });

  const editorStyles = `
    .ProseMirror h1 {
      font-size: 2em;
      margin-bottom: 0.5em;
    }
    .ProseMirror h2 {
      font-size: 1.5em;
      margin-bottom: 0.5em;
    }
    .ProseMirror h3 {
      font-size: 1.17em;
      margin-bottom: 0.5em;
    }
    .ProseMirror p {
      margin-bottom: 1em;
      line-height: 1.5em;
    }
    .ProseMirror ul,
    .ProseMirror ol {
      padding-left: 2em;
      margin-bottom: 1em;
    }
    .ProseMirror blockquote {
      padding-left: 1em;
      border-left: 2px solid #ddd;
      margin-left: 0;
      margin-right: 0;
      font-style: italic;
    }
    .ProseMirror code {
      background-color: #f5f5f5;
      padding: 0 0.2em;
      border-radius: 3px;
    }
    .ProseMirror {
      cursor: text;
    }
  `;

  return (
    <div className="w-full px-4">
      <style>{editorStyles}</style>
      <Toolbar editor={editor} />
      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
    </div>
  );
};

export default Tiptap;
