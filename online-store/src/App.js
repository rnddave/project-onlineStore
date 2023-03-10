

const App = () => {

  // we want an array to hold the categories
  const categories = [
    {
      id: 1,
      title: 'Cookbooks'
    },
    {
      id: 2,
      title: 'Food'
    },
    {
      id: 3,
      title: 'Drinks'
    },
    {
      id: 4,
      title: 'Cookware'
    },
    {
      id: 5,
      title: 'Tableware'
    }
  ]

  return (
    //now we need to map the categories to the page
    <div className="categories-container">
      {categories.map(({title}) => (
        <div className="category-container">
          <div classname='background-image' />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;


