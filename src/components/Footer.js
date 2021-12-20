import styled from 'styled-components';

export default function Footer({ showtime, weekday, name }) {
    return(
        <Container>
            <div className="img-rectangle" style={{
                'width': '64px', 
                'height': '89px', 
                'margin':'0',
                'marginLeft':'10px',
                'display': 'flex' 
            }}>
                <img src={showtime.posterURL} alt=""  style={{
                    'width': '48px', 
                    'height': '72px', 
            }}/>
            </div>
            <MovieInformations>
            <p>{showtime.title}</p>
            <p>
                {
                    weekday ?
                    `${weekday} - ${name}` 
                    : ''
                }
            </p>
            </MovieInformations>
        </Container>
    )
};


const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 117px;
    border-top: 1px solid #9EADBA;
    background-color: #DFE6ED;
    padding: 14px 10px;
    display: flex;
    
    p{
      
      margin-left: 14px;
      font-size: 26px;
    }
`

const MovieInformations = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

`