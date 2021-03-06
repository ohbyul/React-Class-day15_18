import React from 'react';
import styled from 'styled-components';

const ImageBox = styled.article`
    margin-bottom : 30px; box-shadow : 3px 3px 5px #dcdcdc ; border: 1px solid #efefef;
    background:white;
    img{ width : 400px}
    h3{font-size : 30px ; color:tomato; margin-bottom : 20px; padding : 0 15px}
    ul{
        margin-bottom : 20px; padding : 0 15px;
        li{
            margin-bottom : 5px;
        }
    }
    p {
        margin-bottom: 25px;
        span {
            display:inline-block;
            background:#efefef;
            margin-right : 10px;
            border-radius : 15px;
        }
    }
`

const GalleryItem = ({item}) => {
    const {webformatURL , likes , downloads , views , user,tags} = item
    const tagList = tags.split(',')

    return (
        <div>
            <ImageBox>
                <img src={webformatURL} alt="" /> 
                <h3>{user}</h3>
                <ul>
                    <li>조회수 : {views}</li>
                    <li>다운로드 : {downloads}</li>
                    <li>좋아요 : {likes}</li>
                </ul>
                <p>
                    {
                        tagList.map( tag => <span>#{tag}</span>)
                    }
                </p>
            </ImageBox>
        </div>
    );
};

export default GalleryItem;