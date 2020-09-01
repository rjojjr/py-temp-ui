import React from 'react';
import ReactLoading from 'react-loading';
import ReactModal from 'react-modal';

const LoadingView = ({ isLoading }) => {
  const customModalStyles = {
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'static',
      background: 'none',
      border: 'none',
      boxShadow: 'none',
    }
  };
  return (
      <div className={"loader"}>
    <ReactModal
      isOpen={isLoading}
      style={customModalStyles}
      ariaHideApp={false}
    >
      <ReactLoading
        className="loadingBubbles"
        type={'spinningBubbles'}
        color={'#343a40'}
        height={'10rem'}
        width={'10rem'}
      />
    </ReactModal>
      </div>
  );
};

export default LoadingView;
