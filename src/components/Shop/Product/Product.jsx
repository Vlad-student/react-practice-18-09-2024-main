import Proptypes from 'prop-types';



const Product = (props) => {
  const {product:{ title, price, quantity }} = props;
  return (
    <tr>
      <td>{title}</td>
      <td>{price} uah</td>
      <td>{quantity} etc.</td>
    </tr>
  );
};

Product.propTypes = {
product: Proptypes.shape({
  title: Proptypes.string.isRequired,
  price: Proptypes.number.isRequired,
  quantity: Proptypes.number,
}),
};


export default Product;
