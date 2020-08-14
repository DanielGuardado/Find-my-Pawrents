import React from "react";
import NavBar from "./../navBar/navBar_container";
import "./contact.scss";
import WaveTop from "./wave-top.png";
import WaveMid from "./wave-mid.png";
import WaveBot from "./wave-bot.png";

const styles = {
    WaveTop: {
        backgroundImage: `url(${WaveTop})`
    },
    WaveMid: {
        backgroundImage: `url(${WaveMid})`
    },
    WaveBot: {
        backgroundImage: `url(${WaveBot})`
    }
}

class ContactPage extends React.Component {

    // constructor(props) {
    // super(props);
    // }

    render() {
    return (
      <div>
        <div className="contact-page-main-container">
          <div class="waveWrapper waveAnimation">
            <div class="waveWrapperInner bgTop">
              <div
                class="wave waveTop"
                //   style="background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"
                style={styles.WaveTop}
              ></div>
            </div>
            <div class="waveWrapperInner bgMiddle">
              <div
                class="wave waveMiddle"
                //   style="background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')"
                style={styles.WaveMid}
              ></div>
            </div>
            <div class="waveWrapperInner bgBottom">
              <div
                class="wave waveBottom"
                style={styles.WaveBot}
                //   style="background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')"
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
    }

}

export default ContactPage;