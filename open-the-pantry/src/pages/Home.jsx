import BlogIntro from '../components/BlogIntro';
import MainHeader from '../components/MainHeader';

const Home = () => {
  return (
    <div>
      <MainHeader />
      <div className='container'>
        <BlogIntro />
      </div>
    </div>
  );
};

export default Home;
