import React, { useState, Fragment } from 'react'

const ToggleState = {
  ON: 'on',
  OFF: 'off',
}

// TODO: styling
type Props = {
  onChange: ({ toggleState }: { toggleState: string }) => void
}

const Toggle = ({ onChange }: Props) => {
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
    <Fragment>
      <label>{toggleState}</label>
      <input
        type="checkbox"
        onChange={onToggle}
        value={toggleState === ToggleState.ON}
      />
    </Fragment>
  )
}

Toggle.States = ToggleState
export default Toggle
