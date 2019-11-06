import React from 'react'
import styled from 'styled-components'
import { Card, Icon, Image } from 'semantic-ui-react'
// tagged template strings
const PinsContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const Banner = styled.h1`
    font-family: 'Lobster', cursive;
    font-size: 50px;
    color: red;
    margin: 20px;
`

const Pin = () => {

    const widthAdded = Math.round(Math.random(0, 300))
    const heightAdded = Math.round(Math.random(0, 300))

    return (
        <Card>
        <Image src={`https://source.unsplash.com/${400 + widthAdded}x${400 + heightAdded}/?country`} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    
    )
}

const PinsColumn = ({pins}) => {
    return (
        <div>
            {
                pins.map(p => <Pin />)
            }
        </div>
    )
}

// const PinsContainer = () => {
//     return (
//         <div>
            // <PinsColumn />
            // <PinsColumn />
            // <PinsColumn />
            // <PinsColumn />
            // <PinsColumn />
            // <PinsColumn />
//         </div>
//     )
// }

const HomePage = ({ logout }) => {

    const pins = [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6],
    ]
    return (
        <div>
            <div style={{
                textAlign: 'center'
            }}>
                <Banner>Shania Pins <button onClick={logout}>Logout</button></Banner>
            </div>
            <PinsContainer>
                {
                    pins.map((col, i) => <PinsColumn pins={pins[i]}/>)
                }
            </PinsContainer>
        </div>
    )
}

export default HomePage