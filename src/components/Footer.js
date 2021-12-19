import styled from 'styled-components';

export default function Footer(){
    return(
        <Container>
            <div className="img-rectangle" style={{
                'width': '64px', 
                'height': '89px', 
                'margin':'0',
                'margin-left':'10px',
                'display': 'flex' 
            }}>
                <img src="" alt=""  style={{
                    'width': '48px', 
                    'height': '72px', 
            }}/>
            </div>
            <p>Movie Title</p>
        </Container>
    )
};

const Container = styled.div`
    width: 100vw;
    height: 117px;
    position: absolute;
    bottom: 0px; left: 0;
    background-color: aliceblue;
    display: flex;
    align-items: center; 
    
    
    p{
        font-family: Roboto;
        font-size: 26px;
        margin-left: 14px;
        font-weight: 400;
        
    }

`


