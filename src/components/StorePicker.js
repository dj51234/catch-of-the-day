import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  goToStore(e) {
    e.preventDefault();
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`);
    this.context.router.transitionTo(`/store/${storeId}`)
  }

  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter store</h2>
        <input required  type="text" placeholder="Store Name" defaultValue={getFunName()} ref={(input) => this.storeInput = input}/>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}
export default StorePicker;
