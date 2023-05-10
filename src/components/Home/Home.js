import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.mainContainer}>
                <form onSubmit={() => alert(1)}>
                    <label>
                        <span>Tipo Gola</span>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Insira o tipo de gola"
                        />
                        <span>Cor da Gola</span>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Insira a cor da gola"
                        />
                    </label>
                    <label>
                        <span>Tipo de Manga</span>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Insira o tipo das mangas"
                        />
                        <span>Cor da Manga</span>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Insira a cor das mangas"
                        />
                    </label>
                    <label>
                        <span>Tipo de Malha</span>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Insira o tipo de malha"
                        />
                        <span>Cor da Malha</span>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Insira a cor da malha"
                        />
                    </label>

                    <label>
                        <span>Contém Camisa Tradicional?</span>
                        <label>
                            <span>Sim</span>
                            <input type="radio" name="option" id="" />
                        </label>
                        <label>
                            <span>Não</span>
                            <input type="radio" name="option" id="" />
                        </label>
                    </label>
                    <label>
                        <span>Contém Babylook?</span>
                        <label>
                            <span>Sim</span>
                            <input type="radio" name="option1" id="" />
                        </label>
                        <label>
                            <span>Não</span>
                            <input type="radio" name="option1" id="" />
                        </label>
                    </label>
                    <label>
                        <span>Há peças do cliente?</span>
                        <label>
                            <span>Sim</span>
                            <input type="radio" name="option2" id="" />
                        </label>
                        <label>
                            <span>Não</span>
                            <input type="radio" name="option2" id="" />
                        </label>
                    </label>
                    <label>
                        <span>Qual o total de peças?</span>
                        <input type="number" name="" id="" />
                    </label>
                    <label>
                        <span>Qual o método de estampa?</span>
                        <input type="text" name="" id="" />
                    </label>

                    <button className={styles.mainBtn}>Gerar Layout</button>
                </form>
            </div>
        </div>
    );
};

export default Home;
