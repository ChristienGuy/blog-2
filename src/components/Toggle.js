import React, { useState } from 'react'

const ToggleState = {
  ON: 'on',
  OFF: 'off',
}

const Toggle = ({ onChange }) => {
  const [toggleState, setToggleState] = useState(ToggleState.OFF)
  const onToggle = () => {
    if (toggleState === ToggleState.ON) {
      setToggleState(ToggleState.OFF)
      onChange({ toggleState: ToggleState.OFF })
    } else {
      setToggleState(ToggleState.ON)
      onChange({ toggleState: ToggleState.ON })
    }
  }

  return (
    <>
      <label>{toggleState}</label>
      <input
        type="checkbox"
        onChange={onToggle}
        value={toggleState === ToggleState.ON}
      />
    </>
  )
}

Toggle.States = ToggleState
export default Toggle
