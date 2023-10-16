import React from 'react';
import { useState } from 'react';
function CreateSellOrder() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const roundedSquareStyle = {
    width: '30rem',
    height: '15rem',
    borderRadius: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  };
  const [imagePreview, setImagePreview] = useState(null);


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imagePreview = e.target.result;
        console.log('รูปภาพที่เลือก:', imagePreview);
  
        // อัพเดทสถานะของ component เพื่อแสดงรูปภาพที่ถูกอัพโหลด
        setImagePreview(imagePreview);
      };
      reader.readAsDataURL(file);
    }
  };
  
  



  const titleStyle = {
    color: 'black',
    fontSize: '1rem',
  };

  const inputStyle = {
    width: '35rem',
    height: '1rem',
    borderRadius: '10px',
    border: '1px solid gray',
    fontSize: '1rem',
    padding: '0.5rem',
    color: 'black',
    backgroundColor: '#D9D9D9',
    outline: 'none',
  };

  const inputStyle2 = {
    width: '20rem',
    height: '1rem',
    borderRadius: '10px',
    border: '1px solid gray',
    fontSize: '1rem',
    padding: '0.5rem',
    color: 'black',
    backgroundColor: '#D9D9D9',
    outline: 'none',
  };

  const inputStyle3 = {
    width: '20rem',
    height: '1rem',
    borderRadius: '10px',
    border: '1px solid gray',
    fontSize: '1rem',
    padding: '0.5rem',
    color: 'black',
    backgroundColor: '#FAB40A',
    outline: 'none',
  };

  const inputStyle4 = {
    width: '20rem',
    height: '1rem',
    borderRadius: '10px',
    border: '1px solid gray',
    fontSize: '1rem',
    padding: '0.5rem',
    color: 'black',
    backgroundColor: '#F87E85',
    outline: 'none',
  };

  const eightInputContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.2rem',
  };

  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '0.2rem',
};

const smallInputStyle = {
  width: '9rem',
  height: '1rem',
  borderRadius: '10px',
  border: '1px solid gray',
  fontSize: '1rem',
  padding: '0.5rem',
  color: 'black',
  backgroundColor: '#D9D9D9', // First color
};

const smallInputStyle1 = {
  width: '9rem',
  height: '1rem',
  borderRadius: '10px',
  border: '1px solid gray',
  fontSize: '1rem',
  padding: '0.5rem',
  color: 'black',
  backgroundColor: 'rgba(250, 180, 10, 0.62)', // First color
};

const smallInputStyle2 = {
  width: '9rem',
  height: '1rem',
  borderRadius: '10px',
  border: '1px solid gray',
  fontSize: '1rem',
  padding: '0.5rem',
  color: 'black',
  backgroundColor: 'rgba(247, 0, 0, 0.63)', // Second color
};

const smallInputStyle3 = {
  width: '9rem',
  height: '1rem',
  borderRadius: '10px',
  border: '1px solid gray',
  fontSize: '1rem',
  padding: '0.5rem',
  color: 'black',
  backgroundColor: 'rgba(247, 0, 0, 0.74)', // Third color
};

const smallInputStyle4 = {
  width: '9rem',
  height: '1rem',
  borderRadius: '10px',
  border: '1px solid gray',
  fontSize: '1rem',
  padding: '0.5rem',
  color: 'black',
  backgroundColor: 'rgba(24, 119, 242, 0.78)', // Fourth color
};

const largeInputStyleFacebook = {
  width: '22rem',
  height: '1.5rem',
  borderRadius: '10px',
  border: '1px solid gray',
  fontSize: '1rem',
  padding: '0.5rem',
  color: 'black',
  backgroundColor: '#17A9FD', // Color for large input 1
};

const largeInputStyleLine = {
  width: '22rem',
  height: '1.5rem',
  borderRadius: '10px',
  border: '1px solid gray',
  fontSize: '1rem',
  padding: '0.5rem',
  color: 'black',
  backgroundColor: '#4CC764', // Color for large input 1
};

const dropdownContainerStyle = {
  width: '9rem',
  height: '3rem',
  borderRadius: '10px',
  border: '1px solid gray',
  fontSize: '1rem',
  padding: '0.5rem',
  color: 'black',
  backgroundColor: '#D9D9D9', // First color
  };

  const greenButtonStyle = {
    width: '20rem',
    height: '3rem',
    backgroundColor: '#05FF00', // Background color is set to #05FF00
    border: '2px solid #05FF00',
    color: 'white', // Text color
    borderRadius: '10px',
    fontSize: '1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '3rem',
    marginRight: '10rem',
    };


  return (
    <div style={containerStyle}>
        <p style={titleStyle}>อัพโหลดรูปภาพ</p>
        <input
        type="file"
        accept=".png, .jpeg, .jpg"
        onChange={handleImageUpload}
      />
      <div style={roundedSquareStyle}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Uploaded"
            style={{
              maxWidth: '30rem',
              maxHeight: '15rem',
              width: 'auto',
              height: 'auto',
            }}
          />
        )}
        </div>
      </div>

      <p style={titleStyle}>ชื่อสินค้า</p>
      <input
          type="text"
          style={{ ...inputStyle}}
        />
        <div style={eightInputContainerStyle}>
        <div style={inputContainerStyle}>
            <p style={titleStyle}>จำนวนฮีโร่</p>
            <input
              type="text"
              style={{ ...smallInputStyle}}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>จำนวนสกิน</p>
            <input
              type="text"
              style={{ ...smallInputStyle}}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>แรงก์</p>
            <input
              type="text"
              style={{ ...smallInputStyle}}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>วินเรท</p>
            <input
              type="text"
              style={{ ...smallInputStyle}}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
        </div>
        <div style={eightInputContainerStyle}>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>ทองหลัง</p>
            <input
              type="text"
              style={{ ...smallInputStyle1}}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>เพชรแดง</p>
            <input
              type="text"
              style={{ ...smallInputStyle2}}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>ลูกแก้วแดง</p>
            <input
              type="text"
              style={{ ...smallInputStyle3}}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>คูปอง</p>
            <input
              type="text"
              style={{ ...smallInputStyle4}}
            />
          </div>
        </div>
        <div style={eightInputContainerStyle}>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>การเชื่อมต่อ</p>
            <select style={dropdownContainerStyle}>
            <option value="0">Garena</option>
              <option value="1">Facebook</option>
              <option value="2">Apple</option>
            </select>
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>Facebook</p>
            <input
              type="text"
              style={{ ...largeInputStyleFacebook}}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>Line</p>
            <input
              type="text"
              style={{ ...largeInputStyleLine}}
            />
          </div>
        </div>
        <div style={eightInputContainerStyle}>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>ID</p>
            <input
              type="text"
              style={{ ...inputStyle2}}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>Password</p>
            <input
              type="text"
              style={{ ...inputStyle2}}
            />
          </div>
        </div>
        <div style={eightInputContainerStyle}>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>ราคาที่จะตั้ง</p>
            <input
              type="text"
              style={{ ...inputStyle3}}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>ราคาประเมิณ</p>
            <input
              type="text"
              style={{ ...inputStyle4}}
            />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem', marginLeft: 'auto' }}>
            <button style={greenButtonStyle}>Submit</button>
        </div>
    </div>
    

  );
}

export default CreateSellOrder;
