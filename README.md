# Thinking In React

> By: Irena Liu

Thinking about how the concepts of the React library can be applied to create a UI solution

---

## Mocks

- for the purposes of this study, I am using the following website:
  - https://www.openthepantry.co.nz/
- please find mockups under the mockups folder in this repo

## Component Hierarchy / Pages

The following images are screenshots taken from the actual live website which I do not own. In my static mockup version of this app, I have chosen to focus on the main landing page for this study. In the demo app, you will find that I have moved around some parts slightly.

![Blog landing page (top)](/mockups/home.jpg)
![Blog landing page (bottom)](/mockups/footer.jpg)

### Components

- NavBar (black)
  - Contains the main navigation links and the search bar
- InstagramFollowing (blue)
  - Contains the creator's following count on instagram and a call to action to follow the creator
  - Separated it out as it's own component because I wasn't sure if it would be complicated to get the creator followers count
- RecipeCategoryList (not shown in mocks, would appear on Recipes page)
  - Contains a list of RecipeCategory components
- RecipeCategory (purple)
  - Contains a list of recipes in a specific recipe category
- RecipeOverview (green)
  - Contains a short overview of the recipe with an image, title and date
- BlogIntro (yellow)
  - Contains an introduction to the blog with a picture, title and a description
- MainHeader (mauve)
  - Contains a image that stretches across the width of the site that has a parallax effect
- MainFooter (brown)
  - Contains the brand to go back to the landing page, social media links and a way to navigate to the contact form
- SearchBar (red)
  - Contains a search bar to enter in a text string

### Component Hierarchy

- NavBar
  - SearchBar
- MainHeader
- Blog Intro
  - InstagramFollowing
- RecipeCategoryList
  - RecipeCategory
    - RecipeOverview
- MainFooter

### Pages

- Home
- SearchResults
- Recipe
- Categories
- About
- Contact

## Minimal Representation of State

For this blog site, the only piece of data that would likely need to be stateful is the recipe data that is returned in a recipe search. The state should live in the global app store so that it is easiest to grab the filtered data to render RecipeOverview cards when the user is redirected to the SearchResults page.

It may also be useful to store the collections of recipes in the state depending on how many times the data is being pulled from the API. From what I can see, there are 4 pages that will need the recipeCategoryCollections data.

## Potential Required Packages/Libraries/Components

[React Instagram Embed](https://www.npmjs.com/package/react-instagram-embed)

[Jarallax - To implement parallax with MDBParallaxWrapper](https://www.npmjs.com/package/jarallax)

[MDBParallaxWrapper component](https://mdbootstrap.com/docs/react/css/parallax/)

## References

[Thinking in React Guide](https://reactjs.org/docs/thinking-in-react.html)

[Open The Pantry Food Blog](https://www.openthepantry.co.nz/)

[Open The Pantry Facebook Page (for some images)](https://www.facebook.com/openthepantry)

[Airbnb React/JSX Style Guide](https://airbnb.io/javascript/react/#naming)
