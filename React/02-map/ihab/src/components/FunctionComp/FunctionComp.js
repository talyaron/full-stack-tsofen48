updateInput(key, value)
{
    this.setState({
       [key]: value
    });

};

addItem()
 {
    const newItem={
        id: 1+ Math.random(),
        value: this.state.newItem.slice()
    
    };

    //copy of list item
    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
        list,
        newItem:""
    
    });
}

deleteItem(id)
{
const list = [...this.state.list];

const updatedList = list.filter(item => item.id !== id);

this.setState({list: updatedList});
};
