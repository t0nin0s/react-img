import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Player from './player'

const player = {
  id: 2,
  firstName: "Mark",
  lastName: "Steven",
  country: "UK"
}

test('Player component renders as expected', () => {
  const component = shallow(<Player  {...player} />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
