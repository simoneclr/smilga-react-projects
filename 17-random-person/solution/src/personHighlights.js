import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'

// TODO: May want to implement some safety checks in selectors
const personHighlights = {
	name: {
		message: "My name is",
		icon: <FaUser/>,
		selector: (person) => `${person.name.first} ${person.name.last}`
	},
	email: {
		message: "My email is",
		icon: <FaEnvelopeOpen/>,
		selector: (person) => person.email
	},
	age: {
		message: "My age is",
		icon: <FaCalendarTimes/>,
		selector: (person) => person.dob.age
	},
	address: {
		message: "My address is",
		icon: <FaMap/>,
		selector: (person) => `${person.location.street.number} ${person.location.street.name}`
	},
	phone: {
		message: "My phone is",
		icon: <FaPhone/>,
		selector: (person) => person.phone
	},
	password: {
		message: "My password is",
		icon: <FaLock/>,
		selector: (person) => person.login.password
	},
}

export default personHighlights
