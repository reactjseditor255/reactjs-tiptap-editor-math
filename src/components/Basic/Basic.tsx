/* eslint-disable unicorn/no-null */
/* eslint-disable quotes */
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Mathematics } from 'tiptap-editor-extension-mathematics';
import 'katex/dist/katex.min.css';

function Basic() {
  const editor: any = useEditor({
    extensions: [StarterKit, Mathematics],
    content: `
     <h1>
        This editor supports $\\LaTeX$ math expressions.
      </h1>
      <p>
        Did you know that $3 * 3 = 9$? Isn't that crazy? Also Pythagoras' theorem is $a^2 + b^2 = c^2$.<br />
        Also the square root of 2 is $\\sqrt{2}$. If you want to know more about $\\LaTeX$ visit <a href="https://katex.org/docs/supported.html" target="_blank">katex.org</a>.
      </p>
      <code>
        <pre>$\\LaTeX$</pre>
      </code>
      <p>
        Do you want go deeper? Here is a list of all supported functions:
      </p>
      <ul>
        <li>$\\sin(x)$</li>
        <li>$\\cos(x)$</li>
        <li>$\\tan(x)$</li>
        <li>$\\log(x)$</li>
        <li>$\\ln(x)$</li>
        <li>$\\sqrt{x}$</li>
        <li>$\\sum_{i=0}^n x_i$</li>
        <li>$\\int_a^b x^2 dx$</li>
        <li>$\\frac{1}{x}$</li>
        <li>$\\binom{n}{k}$</li>
        <li>$\\sqrt[n]{x}$</li>
        <li>$\\left(\\frac{1}{x}\\right)$</li>
        <li>$\\left\\{\\begin{matrix}x&\\text{if }x>0\\\\0&\\text{otherwise}\\end{matrix}\\right.$</li>
      </ul>
    `,
  });

  return (
    <>
      <EditorContent editor={editor} />
    </>
  );
}

export default Basic;
