import MenuItem from "./MenuItem"

const Menu = ({items}) => {
  return (
    <section className="section-center">
      {items.map(item => 
        <MenuItem key={item.id} {...item}/>
      )}
    </section>
  )
};

export default Menu;
