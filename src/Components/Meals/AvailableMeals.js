import classes from "./AvailableMeals.module.css";
import meals from "../../assets/dummy-meals";
import Card from "../Framework/Card/Card";
import MealItem from "./MealItem/MealItem";
const AvailableMeals = (props) => {
  const mealList = meals.map((m) => {
    return (
      <MealItem
        key={m.id}
        id={m.id}
        name={m.name}
        description={m.description}
        price={m.price}
        meal={m}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
