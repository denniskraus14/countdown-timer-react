import React from 'react'
import './CountDownTimer.css';


class CountDownTimer extends React.Component{
	constructor(){
		super();
		this.state={
			"resets":0,
			"hours":0,
			"minutes":0,
			"seconds":10
		};
		this.startTimer = this.startTimer.bind(this);
		this.countDown = this.countDown.bind(this);
		this.pauseTimer = this.pauseTimer.bind(this);
		this.pad2 = this.pad2.bind(this);
		this.wait = this.wait.bind(this);
		this.sleep = this.sleep.bind(this);
	}

	startTimer() {
    if (this.timer!==1 && this.state.hours >= 0 && this.state.minutes>=0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
	}

	pauseTimer(){
		clearInterval(this.timer);
	}

	sleep(milliseconds) {
  		const date = Date.now();
  		let currentDate = null;
  		do {
    		currentDate = Date.now();
  		} while (currentDate - date < milliseconds);
}

	wait(){
		this.pauseTimer();
		this.sleep(2000);
		this.startTimer();
	}	
	  
	countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
	  "resets":this.state.resets,
	  "hours":this.state.hours,
	  "minutes":this.state.minutes,
	  "seconds": seconds
    });
    if (seconds===-1) { 
	  this.setState({
	  "resets":this.state.resets+1,
	  "hours":this.state.hours,
	  "minutes":this.state.minutes,
	  "seconds": 10
	});
	this.wait();
    }
  }
  
   pad2(number) {
     return (number < 10 ? '0' : '') + number
   }

  componentDidMount(){}

	render(){
		return(
		<div>
			<button class='block' onClick={this.startTimer}>Start</button>
			<button class = 'block' onClick={this.pauseTimer}>Pause</button>
			<br></br>
			{this.pad2(this.state.hours)}:{this.pad2(this.state.minutes)}:{this.pad2(this.state.seconds)}
			<br></br>
			<div class='inner-div'>
				Resets: {this.state.resets}
				<br></br>
				Total Time (in s): {this.state.resets*10+(10-this.state.seconds)+2*this.state.resets}
			</div>
			<footer><font size="10">This is a React app timer that counts down from 10 seconds, pauses for 2 seconds, and resets.<br></br>
			It keeps track of how many times it has reset as well as total time passed.</font></footer>
		</div>);
	};
}

export default CountDownTimer;