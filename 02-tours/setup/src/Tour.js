import ExpandableParagraph from "./ExpandableParaagraph";

const Tour = ({name, image, info, price, handleRemoveClick}) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} />

      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">
            ${price}
          </h4>
        </div>

        <ExpandableParagraph text={info} clippedLength={200} />

        <button onClick={handleRemoveClick} className="delete-btn">
          Not Interested
        </button>
      </footer>
    </article>
  ); 
};

export default Tour;
