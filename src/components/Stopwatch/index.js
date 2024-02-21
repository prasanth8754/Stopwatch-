import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0, isStarted: false}

  onClickStart = () => {
    this.setState({isStarted: true})
    this.intervalId = setInterval(() => {
      const {seconds} = this.state
      if (seconds < 59) {
        this.setState(prevState => ({seconds: prevState.seconds + 1}))
      } else {
        this.setState(prevState => ({
          minutes: prevState.minutes + 1,
          seconds: 0,
        }))
      }
    }, 1000)
  }

  onClickStop = () => {
    const {isStarted} = this.state

    if (isStarted) {
      this.setState({isStarted: false})
      clearInterval(this.intervalId)
    }
  }

  onClickRestart = () => {
    clearInterval(this.intervalId)
    this.setState({minutes: 0, seconds: 0, isStarted: false})
  }

  render() {
    const {minutes, seconds} = this.state
    const minutesText = minutes < 10 ? `0${minutes}` : minutes
    const secondsText = seconds < 10 ? `0${seconds}` : seconds

    return (
      <div className="bg-cont">
        <h1>Stopwatch</h1>
        <div className="container">
          <div className="img-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>
          <h1>{`${minutesText}:${secondsText}`}</h1>
          <div className="btn-cont">
            <button className="btn-1" type="button" onClick={this.onClickStart}>
              Start
            </button>
            <button className="btn-2" type="button" onClick={this.onClickStop}>
              Stop
            </button>
            <button
              className="btn-3"
              type="button"
              onClick={this.onClickRestart}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
