import React from 'react'
import Language from 'models/Language'
import AppStore from 'stores/AppStore'
import Button from 'components/Button'

export default function LanguageButtons() {
  return (
    <div>
      {Object.values(Language).map((k) => (
        <Button
          key={k}
          onClick={() => {
            AppStore.language = k
          }}
          title={k}
        />
      ))}
    </div>
  )
}
