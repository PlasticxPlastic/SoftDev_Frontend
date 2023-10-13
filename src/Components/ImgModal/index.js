import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '50%',
    transform: 'translate(-50%, -50%)',
    minHeight: "60%",
    minWidth: "60%",
    height:"auto",
    width: "auto",
    maxWidth:"75%",
    maxHeight:"75%"
  }
};
const customButton = {
  content:{
    position: "relative",
    cursor: "pointer",
    backgroundColor: "rgb(215, 205, 215)",
    margin: "10px",
    borderRadius: "2vh",
    width: "150px;",
    height: "150px",
  }
}


export default function ImgModal({src}) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.

  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} style ={customButton}>
        <img src ={src}
        height="max-content"
        width="100%"
        alt="MODAL"
        
        />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Pop-up Picture"
      >

       <img src ={src}
        height="100%"
        width="100%"
       />
        
    
        {/* <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}
      </Modal>
    </div>
  );
}