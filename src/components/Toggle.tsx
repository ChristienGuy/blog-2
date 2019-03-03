import React, { useState, Fragment } from 'react'
import styled from 'styled-components'

enum ToggleState {
  ON,
  OFF,
}

const ToggleWrapper = styled.label<{ size: number }>`
  background-color: #333;
  display: inline-flex;
  width: ${ ({ size }) => `${ size * 2 }px` };
  border-radius: ${ ({ size }) => size }px;
  margin: 0;
  padding: 0;
`

type ToggleThumbProps = {
  on: boolean
  size: number
}
const ToggleThumb = styled.span<ToggleThumbProps>`
  width: ${ ({ size }) => `${ size }px` };
  height: ${ ({ size }) => `${ size }px` };
  background-color: white;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: ${ ({ on, size }) =>
    on ? `translateX(${ size }px)` : `translateX(0)` };

  border-radius: 100%;
  border: 1px solid black;
`

const HiddenInput = styled.input`
  width: 0;
  height: 0;
  visiblity: hidden;
`

type Props = {
  onChange: ({ toggleState }: { toggleState: ToggleState }) => void
  id: string
  size?: number
  className?: string
  defaultState: ToggleState
}

const Toggle = ({ onChange, id, size, className, defaultState }: Props) => {
  const [toggleState, setToggleState] = useState<ToggleState>(defaultState)
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
      <ToggleWrapper size={size} htmlFor={id} className={className}>
        <ToggleThumb on={toggleState === ToggleState.ON} size={size} />
      </ToggleWrapper>
      <HiddenInput
        id={id}
        type="checkbox"
        onChange={onToggle}
        value={toggleState === ToggleState.ON}
      />
    </Fragment>
  )
}

Toggle.defaultProps = {
  size: 20,
  defaultState: ToggleState.OFF,
}

Toggle.States = ToggleState
export default Toggle
