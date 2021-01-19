// import faker from 'faker'
// import _ from 'lodash'

import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import './AutoCompleteDropDown.css'
// const addressDefinitions = faker.definitions.address
// const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
//   key: addressDefinitions.state_abbr[index],
//   text: state,
//   value: addressDefinitions.state_abbr[index],
// }))

const AutoCompleteDropDown = () => (
  <Dropdown
    placeholder='שש'
    fluid
    multiple
    search
    selection
    left
    options={[{ text: '123', value: '1' },{ text: '123', value: '2' },{ text: '123', value: '3' }]}
  />
)

export default AutoCompleteDropDown