import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LiveEvent from './liveEvent'

const liveEvent = {
  id: "2016-11-MS02",
  time: "11:00+01:00",
  p1: {
    id: 2,
    firstName: "Mark",
    lastName: "Steven",
    country: "UK"
  },
  p2: {
    id: 3,
    firstName: "Marcos",
    lastName: "Steven",
    country: "BRZ"
  },
  tournamentName: "UK Cup"
}

test('LiveEvent component renders as expected', () => {
  const component = shallow(<LiveEvent  {...liveEvent} />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
