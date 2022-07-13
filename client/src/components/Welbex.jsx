import classes from "./Welbex.module.css";
import Card from "./ui/Card/Card";

const Welbex = () => {
    return(
        <div className={classes.Welbex}>
            <Card>
                Фильтр
            </Card>
            <Card>
                Таблица
            </Card>
            <Card>
                Пагинация
            </Card>
        </div>
    );
};

export default Welbex;