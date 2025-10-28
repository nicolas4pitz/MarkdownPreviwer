import { useState } from 'react'
import './App.css'
import { marked } from 'marked'

function App() {
  const defaultMarkdown = `# Título principal (H1)
## Subtítulo (H2)

[Exemplo de link](https://www.freecodecamp.org)

Texto com \`código inline\`.

\`\`\`javascript
// Bloco de código
function soma(a, b) {
  return a + b;
}
\`\`\`

- Item de lista 1
- Item de lista 2

> Um bloco de citação.

![Exemplo de imagem](https://via.placeholder.com/300x100.png?text=Imagem)

**Texto em negrito**
`

  const [markdown, setMarkdown] = useState(defaultMarkdown)

  marked.setOptions({
    gfm: true,
    breaks: true
  })

  return (
    <div className="previewer-wrapper">
      <h1 className="visually-hidden">Markdown Previewer</h1>

      <section className="editor-section">
        <h2>Editor</h2>
        <textarea
          id="editor"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
      </section>

      <section className="preview-section">
        <h2>Preview</h2>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
        />
      </section>
    </div>
  )
}

export default App
