import { ADD_LIST, DELETE_LIST, SHOW_DEL} from '../constants/ActionTypes'

const initialState = [
  {
    text: 'text',
    change: false,
    id: 0
  },
  {
    text: 'email',
    change: false,
    id: 1
  },
  {
    text: 'blabla',
    change: false,
    id: 2
  },
  {
    text: 'srul',
    change: false,
    id: 3
  },
]

export default function list(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST:
      return [
        {
          id: state.reduce((maxId, list) => Math.max(list.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }, 
        ...state
      ]
      
    case DELETE_LIST:
      return state.filter(list =>
        list.id !== action.id
      )

    case SHOW_DEL:
      return [...state].map(el => {
        el.active = action.getstate.filter(f => 
          f.active && (f.lables.filter(l => 
            l.id === el.id).length)
        ).length ? true : false
        return el
      })
      


    default:
      return state
  }
}
