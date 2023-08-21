import React, {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

const initialHistoryList = []

class History extends Component {
  state = {
    searchInput: '',
    isShow: false,
    historyList: initialHistoryList,
  }

  updateSearchInput = value => {
    this.setState({
      searchInput: value,
    })
  }
  onChangeSearchInput = id => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteHistory = id => {
    const {historyList} = this.state
    const filteredUserDate = historyList.filter(each => each.id !== id)

    this.setState({
      historyList: filteredUserDate,
    })
    console.log(HistoryList.length)
    if (HistoryList.length === 1) {
      this.setState({isShow: true})
    }
  }

  render() {
    const {searchInput, historyList} = this.state
    const searchResults = historyList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <>
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo"
          />
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search history"
              onChange={event => this.updateSearchInput(event.target.value)}
              value={searchInput}
            />
          </div>
        </div>
        <div className="app-container">
          <ul className="history-container">
            {searchResults.length === 0 ? (
              <p className="error">There is no history to show</p>
            ) : (
              searchResults.map(eachHistory => (
                <HistoryItem
                  key={eachHistory.id}
                  historyDetails={eachHistory}
                  deleteHistory={this.deleteHistory}
                />
              ))
            )}
          </ul>
        </div>
      </>
    )
  }
}

export default History
