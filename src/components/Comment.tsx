import React, { useRef, useEffect, HtmlHTMLAttributes } from "react";

export default function Comment() {
  const commentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.setAttribute("repo", "ws0671/ws0671.github.io");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("label", "comment");
    script.setAttribute("theme", "github-light");
    script.setAttribute("crossorigin", "anonymous");

    commentRef.current?.appendChild(script);
  }, []);
  return <div ref={commentRef} />;
}
