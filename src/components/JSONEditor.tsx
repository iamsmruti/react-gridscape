import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { json } from '@codemirror/lang-json'

interface JSONEditorProps {
  value: string
  onChange: (val: string) => void
}

const JSONEditor: React.FC<JSONEditorProps> = ({ value, onChange }) => {
  return (
    <div className="bg-white shadow w-full h-full flex flex-col overflow-hidden">
      <div className="flex items-center justify-between p-4">
        <h3 className="font-semibold text-gray-900">JSON Layout Editor</h3>
      </div>

      <div className="flex-1 overflow-auto">
        <CodeMirror
          value={value}
          height="100%"
          extensions={[json()]}
          theme="light"
          onChange={val => onChange(val)}
        />
      </div>
    </div>
  )
}

export default JSONEditor
