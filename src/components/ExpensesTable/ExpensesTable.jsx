import s from './ExpensesTable.module.css';
import sprit from '../../assets/icons/sprite.svg';
function ExpensesTable(props) {
  return (
    <div className={s.table}>
      <h3 className={s.categori}>
        <span>Date</span> <span>Description</span> <span>category</span>
        <span>Sum</span> <span></span>
      </h3>
      <ul className={s['inform-list']}>
        <li className={s.inform}>
          <div>
            <span>05.09.2019</span>
            <span>Моя зп</span>
          </div>

          <span>Зп</span>
          <span>20 000.00 грн.</span>
          <button className={s.btn} type="button">
            <svg width="18" height="18">
              <use href={sprit + '#icon-delete'}></use>
            </svg>
          </button>
        </li>
        <li className={s.inform}>
          <span>05.09.2019</span>
          <span> % на остаток на карте</span>
          <span>Доп.доходы</span>
          <span>500.00 грн.</span>
          <button className={s.btn} type="button">
            <svg width="18" height="18">
              <use href={sprit + '#icon-delete'}></use>
            </svg>
          </button>
        </li>
        <li className={s.inform}>
          <span>05.09.2019</span>
          <span> % на остаток на карте</span>
          <span>Доп.доходы</span>
          <span>500.00 грн.</span>
          <button className={s.btn} type="button">
            <svg width="18" height="18">
              <use href={sprit + '#icon-delete'}></use>
            </svg>
          </button>
        </li>
        <li className={s.inform}>
          <span>05.09.2019</span>
          <span> % на остаток на карте</span>
          <span>Доп.доходы</span>
          <span>500.00 грн.</span>
          <button className={s.btn} type="button">
            <svg width="18" height="18">
              <use href={sprit + '#icon-delete'}></use>
            </svg>
          </button>
        </li>
        <li className={s.inform}>
          <span>05.09.2019</span>
          <span> % на остаток на карте</span>
          <span>Доп.доходы</span>
          <span>500.00 грн.</span>
          <button type="button">
            <svg width="18" height="18">
              <use href={sprit + '#icon-delete'}></use>
            </svg>
          </button>
        </li>
        <li className={s.inform}>
          <span>05.09.2019</span>
          <span> % на остаток на карте</span>
          <span>Доп.доходы</span>
          <span>500.00 грн.</span>
          <button type="button">
            <svg width="18" height="18">
              <use href={sprit + '#icon-delete'}></use>
            </svg>
          </button>
        </li>
        <li className={s.inform}>
          <span>05.09.2019</span>
          <span> % на остаток на карте</span>
          <span>Доп.доходы</span>
          <span>500.00 грн.</span>
          <button type="button">
            <svg width="18" height="18">
              <use href={sprit + '#icon-delete'}></use>
            </svg>
          </button>
        </li>
        <li className={s.inform}>
          <span>05.09.2019</span>
          <span> % на остаток на карте</span>
          <span>Доп.доходы</span>
          <span>500.00 грн.</span>
          <button type="button">
            <svg width="18" height="18">
              <use href={sprit + '#icon-delete'}></use>
            </svg>
          </button>
        </li>
        <li className={s.inform}>
          <span>05.09.2019</span>
          <span> % на остаток на карте</span>
          <span>Доп.доходы</span>
          <span>500.00 грн.</span>
          <button type="button">
            <svg width="18" height="18">
              <use href={sprit + '#icon-delete'}></use>
            </svg>
          </button>
        </li>
        <li className={s.inform}>
          <span>05.09.2019</span>
          <span> % на остаток на карте</span>
          <span>Доп.доходы</span>
          <span>500.00 грн.</span>
          <button type="button">close</button>
        </li>
        <li className={s.inform}>
          <span>05.09.2019</span>
          <span> % на остаток на карте</span>
          <span>Доп.доходы</span>
          <span>500.00 грн.</span>
          <button type="button">close</button>
        </li>
        <li className={s.inform}>
          <span>05.09.2019</span>
          <span> % на остаток на карте</span>
          <span>Доп.доходы</span>
          <span>500.00 грн.</span>
          <button type="button">close</button>
        </li>
        <li className={s.inform}>
          <span>05.09.2019</span>
          <span> % на остаток на карте</span>
          <span>Доп.доходы</span>
          <span>500.00 грн.</span>
          <button type="button">
            <svg width="18" height="18">
              <use href={sprit + '#icon-delete'}></use>
            </svg>
          </button>
        </li>
        <li className={s.inform}>
          <span>05.09.2019</span>
          <span> % на остаток на карте</span>
          <span>Доп.доходы</span>
          <span>500.00 грн.</span>
          <button type="button">close</button>
        </li>
        <li className={s.inform}>
          <span>05.09.2019</span>
          <span> % на остаток на карте</span>
          <span>Доп.доходы</span>
          <span>500.00 грн.</span>
          <button type="button">close</button>
        </li>
        <li className={s.inform}>
          <span>05.09.2019</span>
          <span> % на остаток на карте</span>
          <span>Доп.доходы</span>
          <span>500.00 грн.</span>
          <button type="button">close</button>
        </li>
      </ul>
    </div>
  );
}

export default ExpensesTable;
