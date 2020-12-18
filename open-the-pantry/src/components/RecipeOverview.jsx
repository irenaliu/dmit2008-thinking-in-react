import { Link } from 'react-router-dom';

const RecipeOverview = (props) => {
  let { index, recipe } = props;

  return (
    <li className='col-4 px-0 recipe-overview' key={index}>
      <div className='recipe-overview-img-container'>
        <img
          className='recipe-overview-img'
          src={recipe.coverImageURL}
          alt={recipe.title}
        />
        <h3>{recipe.title}</h3>
        <Link to='/recipes'>Read more</Link>
        <p>{recipe.datePosted}</p>
      </div>
    </li>
  );
};

export default RecipeOverview;
