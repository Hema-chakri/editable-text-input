import {Component} from 'react'
import './index.css'

class EditableText extends Component {
  state = {
    saveState: true,
    inputValue: '',
    savedData: '',
  }

  handleInput = event => {
    this.setState({inputValue: event.target.value})
  }

  saveData = () => {
    const {inputValue} = this.state
    this.setState({saveState: false, savedData: inputValue})
  }

  editData = () => {
    this.setState({saveState: true})
  }

  render() {
    const {saveState, inputValue, savedData} = this.state

    return (
      <>
        <div className="app-container">
          <div className="input-container">
            <h1>Editable Text Input</h1>
            {saveState ? (
              <div className="input-details">
                <input
                  type="text"
                  className="input"
                  value={inputValue}
                  onChange={this.handleInput}
                />
                <button
                  type="button"
                  className="click-btn"
                  onClick={this.saveData}
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="input-details">
                <p className="saved-data">{savedData}</p>
                <button
                  type="button"
                  className="click-btn"
                  onClick={this.editData}
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default EditableText
