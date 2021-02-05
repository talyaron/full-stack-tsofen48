import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import './AutoCompleteDropDown.css'


const AutoCompleteDropDown = () => (
  <Dropdown
    placeholder='הכנשם השם של חבר הכנסת'
    fluid
    multiple
    search
    selection
    left
    options={[{ text: '123', value: '1' },{ text: '123', value: '2' },{ text: '123', value: '3' }]}
  />
)

export default AutoCompleteDropDown
