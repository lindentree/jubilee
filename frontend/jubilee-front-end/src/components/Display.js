import React from 'react';
import styles from '../styles.module.css';
import Youtube from '../images/youtube.png';
import Recommendation from './Recommendation';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '20%',
    left: '30%',
    width: '40%',
    border: '0',
    backgroundColor: 'transparent'
  }
};

Modal.defaultStyles.overlay.backgroundColor = 'transparent';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({
      showModal: true
    });
  }

  handleCloseModal() {
    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <div className={styles.displayContainer}>
       {this.props.filtersong.map(item =>{
         return (
           <div className={styles.row}
            onMouseEnter={this.handleOpenModal}
            onMouseLeave={this.handleCloseModal}
            onClick={this.handleCloseModal}
           >
            <div className={styles.rowTitle}>{item["Song"]}</div>
            <div className={styles.rowSubTitle}> ~ By  {item["Artist"]}</div>
            <div className = {styles.rowAudio}>
              <a href={item["Link"]} target="blank">Watch it on
              <img className={styles.youtubeIcon} src={Youtube}></img>
              </a>
            </div>
            <div className={styles.LyricsHead}>Lyrics</div>
            <div className={styles.rowLyrics}>{item["Lyrics"]}</div>


              <Modal
                isOpen={this.state.showModal}
                onRequestClose={this.handleCloseModal}
                shouldCloseOnOverlayClick={true}
                style={customStyles}
              >
                <Recommendation/>
              </Modal>


           </div>
         );
       })}
      </div>

    )
  }
}

export default Display;