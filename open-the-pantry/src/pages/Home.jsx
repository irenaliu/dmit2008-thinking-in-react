import BlogIntro from '../components/BlogIntro';
import MainHeader from '../components/MainHeader';
import RecipeCategoryList from '../components/RecipeCategoryList';

const Home = () => {
  return (
    <div>
      <MainHeader />
      <div className='container'>
        <BlogIntro />
        <RecipeCategoryList />
      </div>
    </div>
  );
};

export default Home;
