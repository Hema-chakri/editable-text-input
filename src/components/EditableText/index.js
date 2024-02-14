import {Component} from 'react'
import './index.css'

class EditableText extends Component {
  state = {
    saveState: true,
    inputValue: '',
  }

  enterInputValue = event => {
    const {inputValue} = event.target.value
    this.setState(prevState => ({
      saveState: !prevState.saveState,
      inputValue,
    }))
  }

  render() {
    const {saveState, inputValue} = this.state

    return (
      <>
        <div className="app-container">
          <div className="input-container">
            <h1>Editable Text Input</h1>
            {saveState ? (
              <div className="input-details">
                <input type="text" className="input" />
                <button
                  type="button"
                  className="save-btn"
                  onClick={this.enterInputValue}
                >
                  Save
                </button>
              </div>
            ) : (
              <div>
                <p>{inputValue}</p>
                <button type="button" onClick={this.enterInputValue}>
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
