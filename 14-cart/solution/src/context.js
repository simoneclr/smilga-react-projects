import { useContext, useReducer, useEffect, createContext, useMemo } from 'react'
import {
  getCartClearedAction,
  getAmountIncreasedAction,
  getItemRevoedAction,
  getAmountDecreasedAction,
  getRequestStartedAction,
  getRequestRejectedAction,
  getRequestFullfilledAction
} from './actions'

import cartItems from './data'
import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'

const initialState = {
  loading: false,
  items: cartItems
}

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const fecthData = async () => {
      dispatch(getRequestStartedAction())

      const response = await fetch(url)

      if (!response.ok) {
        dispatch(getRequestRejectedAction())
        console.error("Request rejected")
      } else {
        const data = await response.json()
        dispatch(getRequestFullfilledAction(data))
      }
    }

    try {
      fecthData()
    } catch (error) {
      dispatch(getRequestRejectedAction())
      console.error(error)
    }
  }, [])

  const total = useMemo(() => {
    return state.items.reduce((sum, item) => sum + item.price * item.amount, 0)
  }, [state.items])

  const amount = useMemo(() => {
    return state.items.reduce((sum, items) => sum + items.amount, 0)
  }, [state.items])

  const clearCart = () => {
    dispatch(getCartClearedAction())
  }

  const removeItemById = (id) => {
    dispatch(getItemRevoedAction(id))
  }

  const increaseAmountById = (id) => {
    dispatch(getAmountIncreasedAction(id))
  }

  const decreaseAmountById = (id) => {
    dispatch(getAmountDecreasedAction(id))
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        total,
        amount,
        clearCart,
        removeItemById,
        increaseAmountById,
        decreaseAmountById
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useAppContext = () => {
  return useContext(AppContext)
}
