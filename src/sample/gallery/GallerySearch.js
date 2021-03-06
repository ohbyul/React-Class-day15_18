import React, { useState } from 'react';
import styled from 'styled-components';

const ImageForm = styled.form`
    text-align:center; padding : 25px 0;
    div{
        input{
            width : 400px;
            height : 45px;
            box-sizing : border-box;border : 1px solid #999;
            outline : none;
        }
        button {
            width : 120px; height : 45px ; background : #000 ; color : #fff; vertical-align : top ; border:none;
        }
    }
`

const GallerySearch = ({onSearch}) => {

    const [text,setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) return
        onSearch(text)
    }
    return (
        <ImageForm onSubmit ={onSubmit}>
            <div>
                <input type="text" value ={text} onChange ={e => setText(e.target.value)} />
                <button type="submit">검색</button>
            </div>
        </ImageForm>
    );
};

export default GallerySearch;