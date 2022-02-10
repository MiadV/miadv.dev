import { useState, useRef } from "react";
import { EditorLayout } from "./EditorLayout";

const Pre: React.FC<{ filename?: string }> = (props) => {
  const textInput = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    let content = textInput.current!.textContent || "";
    navigator.clipboard.writeText(content);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <EditorLayout filename={props.filename} onCopy={onCopy} copied={copied}>
      <div ref={textInput} className="relative">
        <pre className="!m-0 !p-5 dark:bg-slate-800">{props.children}</pre>
      </div>
    </EditorLayout>
  );
};

export default Pre;
