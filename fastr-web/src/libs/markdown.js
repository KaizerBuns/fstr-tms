import Markdown from "markdown-it";
import highlight from "highlight.js";

const mdOptions = {
  linkify: true,
  typographer: true,
  breaks: true,
  langPrefix: "language-",
  highlight(str, lang) {
    if (lang && highlight.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          highlight.highlight(lang, str, true).value +
          "</code></pre>"
        );
        // eslint-disable-next-line no-empty
      } catch (__) {}
    }
    return "";
  },
};

export const md = new Markdown(mdOptions);
