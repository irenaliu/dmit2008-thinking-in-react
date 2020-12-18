import RecipeCategory from './RecipeCategory';

const RecipeCategoryList = () => {
  const recipeCategoryList = [
    {
      recipeCategoryName: 'Latest Recipes',
      recipeCollection: [
        {
          title: 'Gingerbread glasshouse',
          datePosted: 'Dec 13, 2020',
          ingredients: '',
          directions: '',
          coverImageURL:
            'https://scontent.fyxd1-1.fna.fbcdn.net/v/t1.0-9/131579655_233056648360991_362023480047218538_n.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_ohc=UK9XaNftQocAX-A_MOF&_nc_oc=AQmAERXPkUriB0tBBbKw_P4AqamrndMK2e5s-2qYi0pQUADMVNoplKUCdpSc6otk9DXYvmwGPvTqABz5Jy6QgxjU&_nc_ht=scontent.fyxd1-1.fna&oh=db68c139be3a4bd1970556cf434f2fae&oe=6000897A',
        },
        {
          title: 'Christmas spiced tiramisu',
          datePosted: 'Dec 12, 2020',
          ingredients: '',
          directions: '',
          coverImageURL:
            'https://natashaskitchen.com/wp-content/uploads/2019/11/Tiramisu-Cake-5.jpg',
        },
        {
          title: 'Raspberry macarons',
          datePosted: 'Dec 4, 2020',
          ingredients: '',
          directions: '',
          coverImageURL:
            'https://scontent.fyxd1-1.fna.fbcdn.net/v/t1.0-9/129554105_227006315632691_2239758475719811480_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=C-I0P0LHrUYAX-jYZsm&_nc_ht=scontent.fyxd1-1.fna&oh=08b91d7b6072b2303be6fca7e70fc1e6&oe=6002ECFC',
        },
      ],
    },
    {
      recipeCategoryName: 'All Recipes',
      recipeCollection: [
        {
          title: 'Gingerbread glasshouse',
          datePosted: 'Dec 13, 2020',
          ingredients: '',
          directions: '',
          coverImageURL:
            'https://scontent.fyxd1-1.fna.fbcdn.net/v/t1.0-9/131579655_233056648360991_362023480047218538_n.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_ohc=UK9XaNftQocAX-A_MOF&_nc_oc=AQmAERXPkUriB0tBBbKw_P4AqamrndMK2e5s-2qYi0pQUADMVNoplKUCdpSc6otk9DXYvmwGPvTqABz5Jy6QgxjU&_nc_ht=scontent.fyxd1-1.fna&oh=db68c139be3a4bd1970556cf434f2fae&oe=6000897A',
        },
        {
          title: 'Christmas spiced tiramisu',
          datePosted: 'Dec 12, 2020',
          ingredients: '',
          directions: '',
          coverImageURL:
            'https://natashaskitchen.com/wp-content/uploads/2019/11/Tiramisu-Cake-5.jpg',
        },
        {
          title: 'Raspberry macarons',
          datePosted: 'Dec 4, 2020',
          ingredients: '',
          directions: '',
          coverImageURL:
            'https://scontent.fyxd1-1.fna.fbcdn.net/v/t1.0-9/129554105_227006315632691_2239758475719811480_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=C-I0P0LHrUYAX-jYZsm&_nc_ht=scontent.fyxd1-1.fna&oh=08b91d7b6072b2303be6fca7e70fc1e6&oe=6002ECFC',
        },
        {
          title: 'Tiramisu crepe cake',
          datePosted: 'Jul 30, 2020',
          ingredients: '',
          directions: '',
          coverImageURL:
            'https://images.squarespace-cdn.com/content/v1/5f1d18f813fdc32b339945a1/1596025790585-LT4Z4GLN8SMG9A56VFWZ/ke17ZwdGBToddI8pDm48kNaIoZBl4GuBdA1PqzBoOZZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZsOm9WmmO-ecjWABbJXrc5lyoG2cJNVWAy5Qudc1Df52anKKElMM0s3nuMZPJoZ7A/fav.jpg?format=300w',
        },
        {
          title: 'Jiggly Japanese Cotton Cheesecake',
          datePosted: 'Jul 26, 2020',
          ingredients: '',
          directions: '',
          coverImageURL:
            'https://images.squarespace-cdn.com/content/v1/5f1d18f813fdc32b339945a1/1595763874511-YHRSSLJRXJAP9IN25K6G/ke17ZwdGBToddI8pDm48kNaIoZBl4GuBdA1PqzBoOZZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZsOm9WmmO-ecjWABbJXrc5lyoG2cJNVWAy5Qudc1Df52anKKElMM0s3nuMZPJoZ7A/2020-05-22+07.59.38+1.jpg?format=300w',
        },
        {
          title: 'Mochi butter brownie filled with mochi',
          datePosted: 'Jul 26, 2020',
          ingredients: '',
          directions: '',
          coverImageURL:
            'https://images.squarespace-cdn.com/content/v1/5f1d18f813fdc32b339945a1/1595760632861-DXGVUOB2QLTI9VDERUX4/ke17ZwdGBToddI8pDm48kNaIoZBl4GuBdA1PqzBoOZZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZsOm9WmmO-ecjWABbJXrc5lyoG2cJNVWAy5Qudc1Df52anKKElMM0s3nuMZPJoZ7A/2020-05-31+10.35.09+1.jpg?format=300w',
        },
      ],
    },
  ];
  return (
    <div className='my-2'>
      <ul className='pl-0 list-unstyled d-flex flex-wrap'>
        {recipeCategoryList.map((recipeCategory, index) => {
          return <RecipeCategory key={index} recipeCategory={recipeCategory} />;
        })}
      </ul>
    </div>
  );
};

export default RecipeCategoryList;
