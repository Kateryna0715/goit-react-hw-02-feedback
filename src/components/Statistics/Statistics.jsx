import CSS from './index.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={CSS.categoryName}>Good: {good}</p>
      <p className={CSS.categoryName}>Neutral: {neutral}</p>
      <p className={CSS.categoryName}>Bad: {bad}</p>
      <p className={CSS.categoryName}>Total: {total}</p>
      <p className={CSS.categoryName}>
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  );
};

export default Statistics;
