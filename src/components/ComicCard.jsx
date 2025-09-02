
import React from "react";

const ComicCard = ({ Comic}) => {
 const { thumb,title} = Comic;
  return (
    (<div className="col-16" ><div className="Comic-card"><img src={thumb} alt={title} />
    <h3>{title}</h3>
    </div></div>)
  );
};

export default ComicCard;

