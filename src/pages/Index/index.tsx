import React, { useEffect } from 'react';
import TypeScriptTest from './typescript-test'

export default () => {
  useEffect(() => {
    TypeScriptTest.run()
  })
  return <>Index</>
}
