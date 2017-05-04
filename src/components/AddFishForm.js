import React from 'react';

class AddFishForm extends React.Component {
  createFish(e) {
    e.preventDefault();
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value
    };
    this.props.addFish(fish);
    this.fishForm.reset();
  }

  render() {
    return (
      <form ref={(value) => this.fishForm = value} className="fish-edit" onSubmit={(e) => this.createFish(e)}>
        <input ref={(value) => this.name = value} type="text" placeholder="Fish Name"/>
        <input ref={(value) => this.price = value} type="text" placeholder="Fish Price"/>
        <select ref={(value) => this.status = value}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea ref={(value) => this.desc = value} placeholder="Fish Description"></textarea>
        <input ref={(value) => this.image = value} type="text" placeholder="Fish Image"/>
        <button type="submit">+ Add Fish</button>
      </form>
    )
  }
}

AddFishForm.propTypes = {
  addFish: React.PropTypes.func.isRequired
}

export default AddFishForm;
