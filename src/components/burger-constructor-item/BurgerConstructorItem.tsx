import styles from './BurgerConstructorItem.module.css';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import {DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { CHANGE_SORT, ADD_INGREDIENT, DEL_INGREDIENT, GET_ORDER, SET_ORDER } from '../../services/actions';
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";

function BurgerConstructorItem({item, index}) {
    const ref = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch(); 

    const [{ isDragging }, dragRef] = useDrag({
        type: "constructor",
        item: () => {
            return { item, index }
        },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    function onDropHandler(item){
        console.log('onDropHandler2', item.index, index);
        /*dispatch({
          type: CHANGE_SORT,
          item: item.item
        });*/
    }
          

    const [{ handlerId }, dropRef] = useDrop({
        accept: "constructor",
        collect(monitor) {
            return {
              handlerId: monitor.getHandlerId(),
            }
        },        
        drop(item) {
            //onDropHandler(item);
             //@ts-ignore
            const idrag = item.index;
            const ihover = index;  
            if(idrag==ihover) return;          
            dispatch({type:CHANGE_SORT, drag:idrag, hover:ihover});
        },
        hover(item, monitor) {
            if (!ref.current) return;
            //@ts-ignore
            //console.log(item.index, index);
            //@ts-ignore
            const idrag = item.index;
            const ihover = index;
            if(idrag==ihover) return;

            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            //@ts-ignore
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            //@ts-ignore
            const hoverClientY = clientOffset.y - hoverBoundingRect.top

            // Dragging downwards
            if (idrag < ihover && hoverClientY < hoverMiddleY) return;
            if (idrag > ihover && hoverClientY > hoverMiddleY) return;
            
            dispatch({type:CHANGE_SORT, drag:idrag, hover:ihover});
            //@ts-ignore
            item.index = ihover;
          },        
    });  

    const opacity = isDragging ? 0.2 : 1;

    dragRef(dropRef(ref));

    return (
        <div className={`${styles.constructor_item} dragable mb-4 ml-4 mr-2`} ref={ref} style={{ opacity }} data-handler-id={handlerId}>
            <span className={styles.drag_space}><DragIcon type="primary" /></span>
            <ConstructorElement text={`${index} ${item.name}`} price={item.price} thumbnail={item.image} handleClose={()=>{dispatch({type:DEL_INGREDIENT, index: index, id: item._id});}}/>
        </div>
    )


}

export default BurgerConstructorItem;