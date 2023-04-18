import "./fakeProcess.ts"
import './App.css'
import code from './code.tsx?raw'
import { parseFromSource } from '@ts-ast-parser/core'
function App() {
  let error, ast
  // return parseFromSource(code)
  return (
    <>
      {error && <pre>{error}</pre>}
      {ast && <pre>{ast}</pre>}
      <pre>
        {code}
        <div className="block purple">
          <span className="line">
            function <span className="field">add</span> (
            <span className="field">
              <span className="element yellow">a</span>, <span className="element yellow">b</span>
            </span>
            ){' {'}
          </span>
          {'\n'}
          <span className="indent purple">{'  '}</span>
          <span className="block blue">
            <span className="line">
              console.log(<span className="field">'Hello World'</span>);
            </span>
          </span>
          {'\n'}
          <span className="indent purple">{'  '}</span>
          <span className="block yellow">
            <span className="line">
              return{' '}
              <span className="element green">
                <span className="element cyan">a</span>+<span className="element cyan">b</span>
              </span>
              ;
            </span>
          </span>
          {'\n'}
          <span className="line">{'}                '}</span>
        </div>
      </pre>
    </>
  )
}

export default App
