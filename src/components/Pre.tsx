import { useState, useRef } from "react";
import { Editor } from "./Editor";

const Pre: React.FC<{ filename?: string }> = ({
  children,
  filename = "file",
}) => {
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
    <Editor filename={filename} onCopy={onCopy} copied={copied}>
      <div ref={textInput} className="relative">
        <pre className="!m-0 !p-5">{children}</pre>
      </div>
    </Editor>
  );
};

export default Pre;
