'use client'
import '@mdxeditor/editor/style.css'
import { ForwardRefEditor } from "./FowardRefEditor";

export default function Home() {
 
  return (
    <main className='p-10'>
      <div className='border border-gray-300 rounded'>
        <ForwardRefEditor markdown="" contentEditableClassName='prose min-h-[80vh]'></ForwardRefEditor>
      </div>
    </main>
  );
}
