import React, { useState } from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const TopImage = styled.div`
    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
    }
`;

const BottomImages = styled.div`
    display: flex;
    justify-content: center;
    gap: 300px;
    margin-top: 20px;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
    }
`;

const OptionsContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;

const OptionButton = styled.button`
    padding: 10px;
    margin: 5px;
    cursor: pointer;
    border: none;
    background: none;
    text-decoration: none;
    position: relative;

    &.active::after {
        content: '';
        display: block;
        height: 2px;
        width: 100%;
        background-color: #676767;
        position: absolute;
        bottom: 0;
        left: 0;
    }
`;

const SelectedOptionInfo = styled.div`
    margin-top: 20px;
    width: 1000px;
    height: 250px;
    border: 1px solid #ccc;
    background-color: #f0f0f0;
    padding: 20px;
    box-sizing: border-box;
`;

const Profile = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <ProfileContainer>
            <TopImage>
                <img src="https://media.discordapp.net/attachments/1072640218223616051/1162320754453512212/Profile_1.png?ex=653b828e&is=65290d8e&hm=876c85614aad7c1a790e7828ca92daa96a8fd6800f748128f74611804560136a&=&width=178&height=192" alt="Icognito Man" />
                <p>Icognito Man</p>
            </TopImage>
            <BottomImages>
                <ImageContainer>
                    <img src= "https://media.discordapp.net/attachments/1072640218223616051/1162320754742939658/Profile_2.png?ex=653b828e&is=65290d8e&hm=2d08d1b991f77f30981391bdc11fa3f0db80b3828867926fd8e65e473dde6840&=&width=178&height=202" alt="ซื้อขาย 900 ครั้ง" />
                    <p>ซื้อขาย 900 ครั้ง</p>
                </ImageContainer>
                <ImageContainer>
                    <img src="https://media.discordapp.net/attachments/1072640218223616051/1162320754742939658/Profile_2.png?ex=653b828e&is=65290d8e&hm=2d08d1b991f77f30981391bdc11fa3f0db80b3828867926fd8e65e473dde6840&=&width=178&height=202" alt="คะแนนผู้ใช้" />
                </ImageContainer>
                <ImageContainer>
                    <img src="https://media.discordapp.net/attachments/1072640218223616051/1162320754742939658/Profile_2.png?ex=653b828e&is=65290d8e&hm=2d08d1b991f77f30981391bdc11fa3f0db80b3828867926fd8e65e473dde6840&=&width=178&height=202" alt="Boost 900 ครั้ง" />
                    <p>Boost 900 ครั้ง</p>
                </ImageContainer>
            </BottomImages>
            <OptionsContainer>
                <OptionButton
                    className={`option-button ${selectedOption === 'selling' ? 'active' : ''}`}
                    onClick={() => handleOptionClick('selling')}
                >
                    กำลังขาย
                </OptionButton>
                <OptionButton
                    className={`option-button ${selectedOption === 'boosting' ? 'active' : ''}`}
                    onClick={() => handleOptionClick('boosting')}
                >
                    Boosting
                </OptionButton>
                <OptionButton
                    className={`option-button ${selectedOption === 'trading' ? 'active' : ''}`}
                    onClick={() => handleOptionClick('trading')}
                >
                    กำลังทำการซื้อขาย
                </OptionButton>
            </OptionsContainer>
            {selectedOption && (
                <SelectedOptionInfo>
                    {selectedOption === 'selling' && <p>ข้อมูลกำลังขาย</p>}
                    {selectedOption === 'boosting' && <p>ข้อมูล Boosting</p>}
                    {selectedOption === 'trading' && <p>ข้อมูลกำลังทำการซื้อขาย</p>}
                </SelectedOptionInfo>
            )}
        </ProfileContainer>
    );
};

export default Profile;
