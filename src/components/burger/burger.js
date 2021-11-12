import './burger.css'

const Burger = (props) => {
  const isShow = props.isShow;

    return(
      <label for="check" className={["burgerLabel", props.className].join(' ')} onClick={props.onClick} >
      <span className={isShow && "open1"}></span>
      <span className={isShow && "open2"}></span>
      <span className={isShow &&"open3"}></span>
    </label>
    )
}

export default Burger;