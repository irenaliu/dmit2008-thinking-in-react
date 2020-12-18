import RecipeOverview from './RecipeOverview';

const RecipeCategory = (props) => {
  let { recipeCategory } = props;
  return (
    <div className='col-12 py-3'>
      <h2>{recipeCategory.recipeCategoryName}</h2>
      <ul className='pl-0 list-unstyled d-flex flex-wrap'>
        {recipeCategory.recipeCollection.map((recipe, index) => {
          return <RecipeOverview key={index} recipe={recipe} />;
        })}
      </ul>
    </div>
  );
};

export default RecipeCategory;
