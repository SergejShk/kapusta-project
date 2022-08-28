import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from './Income.module.css';
import {getCurrentUserThunk} from '../../redux/userData/userDataOperations';
import sprite from "../../assets/icons/sprite.svg";
import translateOptions from '../../utils/options/translateOptions';
import ChartBar from '../chartBar/ChartBar';


const Income = () => {
    

    const dispatch = useDispatch();
    const categories = useSelector(state=>state.periodData.incomes.incomesData)
    const firstData = categories.map((cat)=>{
        return cat.transactions.transactionsData[0]
    })

    const [chartData, setChartData] = useState(firstData)
    const [isActive, setIsActive] = useState(0)


    useEffect(()=>{
        dispatch(getCurrentUserThunk());
    }, [dispatch])

    const handleClick = (dataForChart, index) => {
        setChartData(dataForChart)
        setIsActive(index)
    }


    return(
        <>
        <div className={s.wrapper}>
            <ul className={s.list}>
                {categories.map((categorie, index)=>(
                    <li onClick={()=> handleClick( categorie.transactions.transactionsData, index)} className={s.item} key={index}>
                        <p className={s.sum}>{categorie.transactions.total} uah</p>
                        <svg className={s.svg}
                        style={{
                            fill: 
                            index === isActive && ' #FF751D'
                        }
                        }>
                            <use 
                            href={sprite + `${translateOptions[categorie.type].icon}`}
                            ></use>
                        </svg>
                        <span className={s.span}
                        style={{
                            backgroundColor: 
                            index === isActive && '  #FFDAC0'
                        }
                        }></span>
                        <p className={s.categorieName}>{translateOptions[categorie.type].name}</p>
                    </li>
                ))}
            </ul>
        </div>
            <ChartBar dataForChart={chartData} />
        </>
    )

}

export default Income