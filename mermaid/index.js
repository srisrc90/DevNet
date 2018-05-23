<div>
    This Pen makes use of 
    <a href="https://knsv.github.io/mermaid" target="_blank">mermaid.js</a> to describe diagrams like a <a href="https://en.wikipedia.org/wiki/Gantt_chart" target="_blank">Gantt</a> with Markdown. The example code is taken from <a href="https://knsv.github.io/mermaid/live_editor/" target="_blank">their live editor</a>.
  </div>
  <div>
    <textarea name="" id="input" cols="30" rows="10">
  sequenceDiagram
  A->> B: Query
  B->> C: Forward query
  Note right of C: Thinking...
  C->> B: Response
  B->> A: Forward response
    </textarea>
  </div>
  <div>
    Your code (for debugging): <pre id="preview"></pre>
  </div>
  <div>
    <button type="button" id="render">Render</button>
  </div>
  <div>Graph:
    <div id="output"></div>
  </div>