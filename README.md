# Thinking In React

> By: Irena Liu

Thinking about how the concepts of the React library can be applied to create a UI solution

---

## Mocks

- for the purposes of this study, I am using the following website:
  - https://www.openthepantry.co.nz/
- please find mockups under the mockups folder in this repo

## Component Hierarchy / Pages

![Blog landing page (top)](/mockups/home.jpg)
![Blog landing page (bottom)](/mockups/footer.jpg)

### Components

- NavBar (black)
  - Contains the main navigation links and the search bar
- InstagramFollowing (blue)
  - Contains the creator's following count on instagram and a call to action to follow the creator
- RecipeCategoryList (not shown in mocks, would appear on Recipes page)
  - Contains a list of RecipeCategory components
- RecipeCategory (magenta)
  - Contains a list of recipes in a specific recipe category
- RecipeOverview (green)
  - Contains a short overview of the recipe with an image, title and date
- BlogIntro (yellow)
  - Contains an introduction to the blog with a picture, title and a description
- MainHeader (mauve)
  - Contains a video that stretches across the width of the site
- MainFooter (brown)
  - Contains the brand to go back to the landing page, social media links and a way to navigate to the contact form
- SearchBar (red)
  - Contains a search bar to enter in a text string

### Component Hierarchy

- NavBar
  - SearchBar
- MainHeader
- RecipeCategoryList
  - RecipeCategory
    - RecipeOverview
- Blog Intro
- MainFooter

### Pages

- Home
- SearchResults
- Recipe
- Categories
- About
- Contact

## Minimal Representation of State

## Potential Required Packages/Libraries/Components

[React Instagram Embed](https://www.npmjs.com/package/react-instagram-embed)

## References

[Thinking in React Guide](https://reactjs.org/docs/thinking-in-react.html)

[Open The Pantry Food Blog](https://www.openthepantry.co.nz/)

[Airbnb React/JSX Style Guide](https://airbnb.io/javascript/react/#naming)
