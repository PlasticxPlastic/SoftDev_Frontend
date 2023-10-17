import React, { useState } from "react";
import "./booster.css";

function CreateBoosterForm() {
    const [Name, setName] = useState("");
    const [SurName, setSurName] = useState("");
    const [Birth, setBirth] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [Address, setAddress] = useState("");
    const [Province, setProvince] = useState("");
    const [Post, setPost] = useState("");
    const [Facebook, setFacebook] = useState("");
    const [Line, setLine] = useState("");
    const [idCardImage, setIdCardImage] = useState(null);
    const [faceImage, setFaceImage] = useState(null);
    const [promotionImage, setPromotionImage] = useState(null);


    const [Rank, setRank] = useState("Bronze"); // Set the default value
    const [Price, setPrice] = useState("Bronze 5$"); // Set the default value
    const [HighestRank, setHighestRank] = useState("Bronze"); // Set the default value
    const [WinRate, setWinRate] = useState("0-10"); // Set the default value

    const handleConfirmClick = () => {
        // Handle the confirm button click event
        // You can use the state values (orderName, numberOfHero, numberOfSkin, rank, winrate) here.
    };

    const [imagePreview, setImagePreview] = useState(null);

    const handleImageUpload = (e, imageType) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const imagePreview = e.target.result;
            console.log('รูปภาพที่เลือก:', imagePreview);
      
            if (imageType === 'idCard') {
                setIdCardImage(imagePreview); // อัพเดทสถานะของรูปบัตรประชาชน
            } else if (imageType === 'face') {
                setFaceImage(imagePreview); // อัพเดทสถานะของรูปหน้าตรง
            } else if (imageType === 'promotion') {
                setPromotionImage(imagePreview); // อัพเดทสถานะของรูปโปรโมท
            }
          };
          reader.readAsDataURL(file);
        }
      };
      

    return (
        <div className="booster-form">
        <label className="label-center">รูปบัตรประชาชน</label>
        <div className="image-upload">
            <p>อัพโหลดรูปภาพ</p>
            <input
                type="file"
                accept=".png, .jpeg, .jpg"
                onChange={(e) => handleImageUpload(e, 'idCard')} // เรียกใช้ handleImageUpload สำหรับรูปบัตรประชาชน
            />
            <div className="image-upload-box">
                {idCardImage && <img src={idCardImage} alt="รูปบัตรประชาชน" className="uploaded-image" />}
            </div>
        </div>

        <label className="label-center">รูปหน้าตรง</label>
        <div className="image-upload">
            <p>อัพโหลดรูปภาพ</p>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, 'face')} // เรียกใช้ handleImageUpload สำหรับรูปหน้าตรง
            />
            <div className="image-upload-box">
                {faceImage && <img src={faceImage} alt="รูปหน้าตรง" className="uploaded-image" />}
            </div>
        </div>

        <label className="label-center">รูปโปรโมท</label>
        <div className="image-upload">
            <p>อัพโหลดรูปภาพ</p>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, 'promotion')} // เรียกใช้ handleImageUpload สำหรับรูปโปรโมท
            />
            <div className="image-upload-box">
                {promotionImage && <img src={promotionImage} alt="รูปโปรโมท" className="uploaded-image" />}
            </div>
        </div>
            <div className="info">
                {/* Order information */}
                <div className="detail-info">
                    <label>ชื่อ</label>
                    <div className="input-container">
                        <input
                            type="text"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="detail-info">
                    <label>นามสกุล</label>
                    <div className="input-container">
                        <input
                            type="text"
                            value={SurName}
                            onChange={(e) => setSurName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="detail-info">
                    <label>วัน/เดือน/ปีเกิด</label>
                    <div className="input-container">
                        <input
                            type="text"
                            value={Birth}
                            onChange={(e) => setBirth(e.target.value)}
                        />
                    </div>
                </div>
                <div className="detail-info">
                    <label>Email</label>
                    <div className="input-container">
                        <input
                            type="text"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="detail-info">
                    <label>หมายเลขโทรศัพท์</label>
                    <div className="input-container">
                        <input
                            type="text"
                            value={Phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>
                <div className="detail-info">
                    <label>ที่อยู่</label>
                    <div className="input-container">
                        <input
                            type="text"
                            value={Address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </div>
                <div className="detail-info">
                    <label>จังหวัด</label>
                    <div className="input-container">
                        <input
                            type="text"
                            value={Province}
                            onChange={(e) => setProvince(e.target.value)}
                        />
                    </div>
                </div>
                <div className="detail-info">
                    <label>รหัสไปรษณีย์</label>
                    <div className="input-container">
                        <input
                            type="text"
                            value={Post}
                            onChange={(e) => setPost(e.target.value)}
                        />
                    </div>
                </div>
                <div className="detail-info">
                    <label>Facebook</label>
                    <div className="input-container">
                        <input
                            type="text"
                            value={Facebook}
                            onChange={(e) => setFacebook(e.target.value)}
                        />
                    </div>
                </div>
                <div className="detail-info">
                    <label>Line</label>
                    <div className="input-container">
                        <input
                            type="text"
                            value={Line}
                            onChange={(e) => setLine(e.target.value)}
                        />
                    </div>
                </div>


                <div className="rank-details">
                    {/* Align dropdowns and text box in a single line */}
                    <div className="detail">
                        <label>แรงค์ที่รับ</label>
                        <div className="input-container">
                            <select
                                value={Rank}
                                onChange={(e) => setRank(e.target.value)}
                            >
                                {/* Populate the dropdown with the desired options */}
                                <option value="Bronze">Bronze</option>
                                <option value="Silver">Silver</option>
                                <option value="Gold">Gold</option>
                                <option value="Platinum">Platinum</option>
                                <option value="Diamond">Diamond</option>
                                <option value="Commander">Commander</option>
                                <option value="Conqueror">Conqueror</option>
                                <option value="Glorious Ruler">Glorious Ruler</option>
                            </select>
                        </div>
                    </div>
                    <div className="detail">
                        <label>ราคา/ดาว(แต่ละแรงค์)</label>
                        <div className="input-container">
                            <select
                                value={Price}
                                onChange={(e) => setPrice(e.target.value)}
                            >
                                {/* Populate the dropdown with the desired options */}
                                <option value="Bronze 5$">Bronze 5$</option>
                                <option value="Silver 20$">Silver 20$</option>
                                <option value="Gold 50$">Gold 50$</option>
                                <option value="Platinum 150$">Platinum 150$</option>
                                <option value="Diamond 300$">Diamond 300$</option>
                                <option value="Commander 500$">Commander 500$</option>
                                <option value="Conqueror 1000$">Conqueror 1000$</option>
                                <option value="Glorious Ruler 5000$">Glorious Ruler 5000$</option>
                            </select>
                        </div>
                    </div>
                    <div className="detail">
                        <label>แรงค์สูงสุดที่ได้รับ</label>
                        <div className="input-container">
                            <select
                                value={HighestRank}
                                onChange={(e) => setHighestRank(e.target.value)}
                            >
                                {/* Populate the dropdown with the desired options */}
                                <option value="Bronze">Bronze</option>
                                <option value="Silver">Silver</option>
                                <option value="Gold">Gold</option>
                                <option value="Platinum">Platinum</option>
                                <option value="Diamond">Diamond</option>
                                <option value="Commander">Commander</option>
                                <option value="Conqueror">Conqueror</option>
                                <option value="Glorious Ruler">Glorious Ruler</option>
                            </select>
                        </div>
                    </div>
                    <div className="detail">
                        <label>วินเรท</label>
                        <div className="input-container">
                            <select
                                value={WinRate}
                                onChange={(e) => setWinRate(e.target.value)}
                            >
                                {/* Populate the dropdown with the desired options */}
                                <option value="0-10">0-10</option>
                                <option value="11-20">11-20</option>
                                <option value="21-30">21-30</option>
                                <option value="31-40">31-40</option>
                                <option value="41-50">41-50</option>
                                <option value="51-60">51-60</option>
                                <option value="61-70">61-70</option>
                                <option value="71-80">71-80</option>
                                <option value="81-90">81-90</option>
                                <option value="91-100">91-100</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="button-center">
                    <button className="confirm-button" onClick={handleConfirmClick}>
                        ยืนยัน
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateBoosterForm; 
