import styles from "./Main.module.css";

import rightArrow from "../media/icons/rightArrow.svg";

const Main = () => {
    const products = ["Camisa", "Tecido", "Camisa Extendido"];

    return (
        <div className={styles.main}>
            <h1>
                Para qual produto
                <br /> deseja gerar o layout?
            </h1>

            <form>
                <select name="" id="">
                    {products.map((item) => (
                        <option value={item}>{item}</option>
                    ))}
                </select>

                <div className={styles.customRoundBtn}>
                    <img src={rightArrow} alt="aaa" fill="white" />
                </div>
            </form>
        </div>
    );
};

export default Main;
