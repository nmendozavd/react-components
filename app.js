// TODO


//Component > APP
// Component called Grocery List (Functional Stateless Component - just like a template and need only to render html)
var GroceryList = (props) => (
  <ul>
    <h2>My Grocery List</h2>
    {props.groceries.map(item => 
    <GroceryListItem food={item} />
    )}
  </ul>
)


// Component > TodoList
// Class GroceryListItem component (class based component)
class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      done: false
    };

  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render () {
  // passing in arguments props when creating an instance of component and adding click function to first item in list
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
  
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.food}</li>
    );
  }
}

// create list for groceries
var list = ['Broccoli', 'Tomatoes', 'Ceviche'];

// Render a React Component > pass in list to object groceries for mapping in component GroceryList
ReactDOM.render(<GroceryList groceries={list}/>, document.getElementById('app'));

