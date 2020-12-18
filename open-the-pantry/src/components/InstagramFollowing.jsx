import { MDBIcon } from 'mdbreact';

const InstagramFollowing = () => {
  let creatorFollowerCount = '16.7';

  return (
    <div className='pt-5'>
      <h4>Join me on my food adventures on instagram</h4>
      <div className='d-flex'>
        <a href='https://www.instagram.com/openthepantry/'>
          <MDBIcon fab icon='instagram' />
        </a>
        <p className='pl-2'>{creatorFollowerCount}K Followers</p>
      </div>
    </div>
  );
};

export default InstagramFollowing;
