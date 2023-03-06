import CartItem from './CartItem'
import { useAppContext } from './context'

const CartContainer = () => {
  const { items, total, clearCart } = useAppContext()

  if (items.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  
  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
      </header>

      <div>
        {items.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>

        <button
          className='btn clear-btn'
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
