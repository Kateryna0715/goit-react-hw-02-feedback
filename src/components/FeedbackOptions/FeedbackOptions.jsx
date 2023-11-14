const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={'statisticBtn'}>
      {options.map(option => (
        <button
          className=""
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
export default FeedBackOptions;
