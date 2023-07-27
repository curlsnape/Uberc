import { useState } from "react"
import tw from "tailwind-styled-components"
import Link from 'next/link'
const Search = () => {
  const [ pickup, setPickup ] = useState("");
  const [ dropoff, setDropoff ] = useState("");
  console.log(pickup,dropoff)

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/">
          <BackButton src="https://img.icons8.com/ios-filled/1x/left.png" />
        </Link>
      </ButtonContainer>

      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/office/1x/100-percents.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/1x/square-full.png" />
        </FromToIcons>
        <InputBoxes>
          <Input placeholder='Enter pickup location'
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />


          <Input placeholder='where to?'
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />

        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/ios/256/plus-math.png " />

      </InputContainer>

      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/ffffff/star--v1.png" />
        Saved Places


      </SavedPlaces>
        <Link href={{
        pathname:"/confirm",
        query: {
          pickup:pickup,
          dropoff:dropoff
        }
      }}> 
 
        <SubButton>

          Confirm locations

        </SubButton>

      </Link>


      {/*ButtonContainer*/}
      {/*InputContainer*/}
      {/*SavedPlaces*/}
      {/*ConfirmLocation*/}
    </Wrapper>
  )
}



export default Search

const Wrapper = tw.div`
bg-gray-200 h-screen
`
const ButtonContainer = tw.div`
bg-white px-4
`

const BackButton = tw.img`
h-10 cursor - pointer


`
const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`
const FromToIcons = tw.div`
w-10  flex flex-col items-center mr-2

`
const Circle = tw.img`
h-2.5
`

const Line = tw.img`
h-10
`
const Square = tw.img`
h-3
`
const InputBoxes = tw.div`
flex flex-col flex-1 

`

const Input = tw.input`
h-10 bg-gray-200
my-2 rounded-2 p-2 outline-none border-none
`

const PlusIcon = tw.img`bg-gray-200 w-10 h-10
rounded-full ml-3 mr-1
`
const SavedPlaces = tw.div`
flex bg-white items-center px-4 py-2
`
const StarIcon = tw.img`
bg-gray-400 rounded-full h-10 w-10 p-2 mr-2
`

const SubButton = tw.div`
 bg-black text-white text-center mt-2 mx-3 px-4 py-3 text-2xl cursor-pointer rounded-lg
`
