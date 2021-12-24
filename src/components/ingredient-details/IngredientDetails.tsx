import PropTypes from 'prop-types';
import styles from './IngredientDetails.module.css';



function IngredientDetails(props) {
    //console.log(props);
    const item = props.item;
    return <>

                <div className={styles.pic}><img src={item?item['image_large']:''} alt={item?item['name']:''}/></div>
                <div className={`${styles.title} text text_type_main-medium mt-4 mb-8`}>{item?item['name']:''}</div>
                <div className={`${styles.specs}`}>
                <div className={`${styles.specs_item} mr-5`}>
                    <span className="text text_type_main-default text_color_inactive">Калории,ккал</span>
                    <span className="text text_type_digits-default">{item?item['calories']:'-'}</span>
                </div>
                <div className={`${styles.specs_item} mr-5`}>
                    <span className="text text_type_main-default text_color_inactive">Белки, г</span>
                    <span className="text text_type_digits-default">{item?item['proteins']:'-'}</span>
                </div>
                <div className={`${styles.specs_item} mr-5`}>
                    <span className="text text_type_main-default text_color_inactive">Жиры, г</span>
                    <span className="text text_type_digits-default">{item?item['fat']:'-'}</span>
                </div>
                <div className={`${styles.specs_item}`}>
                    <span className="text text_type_main-default text_color_inactive">Углеводы, г</span>
                    <span className="text text_type_digits-default">{item?item['carbohydrates']:'-'}</span>
                </div>
                </div>
 
    </>;
  }
  
IngredientDetails.propTypes = {
    /*close:PropTypes.func,*/
    item:PropTypes.shape({
        _id:PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        calories: PropTypes.number,
        carbohydrates: PropTypes.number,
        image:PropTypes.string,
        image_large:PropTypes.string,
        image_mobile:PropTypes.string,
        price:PropTypes.number,
        __v:PropTypes.number
      })
}

export default IngredientDetails;