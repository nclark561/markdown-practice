'use client'
import '@mdxeditor/editor/style.css'
import { ForwardRefEditor } from "./FowardRefEditor";

export default function Home() {
 
  return (
    <main>
      <ForwardRefEditor markdown="" contentEditableClassName='prose'></ForwardRefEditor>
    </main>
  );
}
