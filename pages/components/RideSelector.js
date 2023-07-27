import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Image from 'next/image'
import { CarLists } from './data/carLists'
import { data } from 'autoprefixer'




const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
    console.log({ pickupCoordinates })
    const [rideDuration, setRideDuration] = useState(0)
    useEffect(() => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYWtzaGF5LTExIiwiYSI6ImNsZTFsbHdqbzBpMDYzdm12aWhncTNqbzkifQ.4-f4uzvr5rLamGhpy7dH-w`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setRideDuration(data.routes[0]?.duration/ 13 )
            
        

        })


    }, [pickupCoordinates,dropoffCoordinates])
    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <CarList>
                {CarLists.map((car, index) => (
                    <Car keys={index}>
                        <CarImage src={car.imgUrl} />
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time>5 min away</Time>
                        </CarDetails>
                        <Price>{'₹' + rideDuration * car.multiplier}</Price>

                    </Car>

                ))}


            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`
const CarList = tw.div`
overflow-y-scroll hover:scale-110 transition
`
const CarImage = tw.img`
h-14 mr-5
`
const Car = tw.div`
 flex p-4 px-3
 items-center


`


const CarDetails = tw.div`
flex-1`
const Service = tw.div`
font-medium`
const Time = tw.div`text-xs
text-blue-500`
const Price = tw.div`text-sm`


