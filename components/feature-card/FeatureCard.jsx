import Pill from "../../ui/pill/Pill";
import styles from "./FeatureCard.module.scss";

const featureFilterOptions = [
  "All",
  "UI",
  "UX",
  "Enhancement",
  "Bug",
  "Feature",
];

const FeatureCard = () => {
  return (
    <div className={styles.card}>
      {featureFilterOptions.map((option, index) => {
        return <Pill key={`${option}-${index}`}>{option}</Pill>;
      })}
    </div>
  );
};

export default FeatureCard;
