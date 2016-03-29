import { ADD_LIST, DELETE_LIST, EMAIL_ACTIVE, ACTIVE_LABLES, DELETE_LABLES, SHOW_DEL} from '../constants/ActionTypes'

const initialState = [
  {
    text: '1',
    active: false,
    lables: [],
    id: 0
  },
  {
    text: '2',
    active: false,
    lables: [],
    id: 1
  },
  {
    text: '3',
    active: false,
    lables: [],
    id: 2
  },
  {
    text: '4',
    active: false,
    lables: [],
    id: 3
  },
]

export default function Email(state = initialState, action) {
  switch (action.type) {

    case EMAIL_ACTIVE:
      return state.map(email =>
        email.id === action.id ?
          Object.assign({}, email, { active: !email.active }) :
          email
      )

    case ACTIVE_LABLES:
      return state.map(letter =>
        letter.active ?
        Object.assign({}, letter, {
          lables: (letter.lables.filter(el => el.id === action.list.id)).length ? 
              letter.lables : [...letter.lables, action.list]
          }) : letter 
        ) 

    case DELETE_LABLES:
      return state.map(letter =>
        letter.active ?
        Object.assign({}, letter, {
          lables: (letter.lables.filter(el => el.id !== action.label.id)) 

          }) : letter 
        ) 
    

    default:
      return state
  }
}
