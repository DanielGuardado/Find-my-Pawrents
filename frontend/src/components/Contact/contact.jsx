import React from "react";
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
          <div class="contact-aveWrapper contact-waveAnimation">
            <div class="contact-waveWrapperInner contact-bgTop">
              <div
                class="contact-wave contact-waveTop"
                //   style="background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"
                style={styles.WaveTop}
              ></div>
            </div>
            <div class="contact-waveWrapperInner contact-bgMiddle">
              <div
                class="contact-wave contact-waveMiddle"
                //   style="background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')"
                style={styles.WaveMid}
              ></div>
            </div>
            <div class="contact-waveWrapperInner contact-bgBottom">
              <div
                class="contact-wave contact-waveBottom"
                style={styles.WaveBot}
                //   style="background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')"
              ></div>
            </div>
          <form className="contact-page-form">
              <div className="contact-page-input-container">
                  <div className="contact-page-top-level">
                    <h2 className="contact-header">Contact Us</h2>
                  </div>
              </div>
          </form>
          </div>
        </div>
      </div>
    );
    }

}

export default ContactPage;