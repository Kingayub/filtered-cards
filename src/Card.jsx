import React from "react";
import { useState } from "react";
import styles from "./index.css";

const Card = (props) => {

    const [text,setText] = useState("")
    const textHandler=(e)=> {
        setText(e.target.value)
    }

    const filtered = props.propsObject.filter(card=>{
        return card.name.toLowerCase().includes(text.toLocaleLowerCase())  //Если инпут пустой то почему при загрузке страницы выводится полный список,
    })

  const [detailsClick, setDetailsClick] = useState(false);
  const detailsClickHandler = () => {
    setDetailsClick(!detailsClick);
  };


  //button

  const [buttonClick, setButtonClick] = useState(false);
  const buttonHandler = () => {
    setButtonClick(!buttonClick);
  };

  return (
      <div>
    <div className='header_div'>
    <input placeholder='Сделайте поиск' type="text" className='input_header' value={text} onChange={textHandler}/>
    </div>

    <div className="content_div">
      {filtered.map((el) => {
          return (
        <div style={styles.card} className="card">
          <div>
            <img className="img" src={el.imageUrl} alt="..." />
          </div>
          {detailsClick && (
            <div className="modal_div">
              <div
                className="x"
                role="button"
                onClick={() => setDetailsClick(!detailsClick)}
              >
                x
              </div>
              {el.details}
            </div>
          )}
          <div className="details">
            <div className="price">
              <p>
                <b>{el.name}</b>
              </p>
              <p>
                <b>{`${el.price}$`}</b>
              </p>
            </div>
            <div className="btn_d">
              <button
                className="btn_details"
                onClick={() => detailsClickHandler()}
              >
                Детали
              </button>
            </div>
          </div>

          <div className="text">{el.descripiton}</div>

          <div className="btn">
            <button
              disabled={buttonClick}
              className="btn_bay"
              onClick={() => buttonHandler()}
            >
              {buttonClick ? "Товар уже в корзине" : "Добавить в корзину"}
            </button>
            {buttonClick && (
              <div
                className="deleteBascket"
                role="button"
                onClick={() => setButtonClick(!buttonClick)}
              >
                Удалить из корзины
              </div>
            )}
          </div>
        </div>
      )})}
    </div>
    </div>
  );
};

export default Card;
