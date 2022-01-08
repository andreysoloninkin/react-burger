import PropTypes from 'prop-types';

export const typeIngredient = PropTypes.shape({
    _id:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    image:PropTypes.string.isRequired,
    image_large:PropTypes.string.isRequired,
    image_mobile:PropTypes.string,
    price:PropTypes.number.isRequired,
    __v:PropTypes.number
  });

export const typeAppState = PropTypes.shape({ 
    tab: PropTypes.string,
    ingredients: PropTypes.arrayOf(typeIngredient),
    order: PropTypes.arrayOf(typeIngredient),
    total: PropTypes.number,
    orderid: PropTypes.string
  });

export const typeAppAction = PropTypes.shape({ 
    type: PropTypes.string,
    data: PropTypes.any
  }); 

  export default typeAppState;