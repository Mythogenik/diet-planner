import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
        <div className="page-up">
          <h1 className="title">Meal Planner</h1>
        </div>
        <div className="page-middle">
          <p className="meal-title">Your Own Meal Plan</p>
          <p>
            {" "}
            Welcome to your personalized meal planner! Our site is designed to
            help you create balanced, delicious meal plans tailored to your
            preferences, dietary needs, and goals.
          </p>
          <p>
            We offer two specialized plans: one to help you lose weight through
            calorie deficit and guided workouts, and another to support healthy
            weight gain with nutrient-rich meals.
          </p>
          <p>
            Whether you're looking to slim down, build muscle, or simply stay
            organized, our platform makes meal planning easy and enjoyable for
            every lifestyle.{" "}
          </p>
          <p> Let’s get started on your journey to a healthier you!</p>
        </div>
        <div className="page-down">
          <div className="lose">

          </div>
          <div className="gain">

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
