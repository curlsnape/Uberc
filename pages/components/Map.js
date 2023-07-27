
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'
import { useEffect  } from 'react' 


mapboxgl.accessToken = 'pk.eyJ1IjoiYWtzaGF5LTExIiwiYSI6ImNsZTFsbHdqbzBpMDYzdm12aWhncTNqbzkifQ.4-f4uzvr5rLamGhpy7dH-w'
const Map = (props) => {
  console.log(props)
    useEffect(() => {
   
        const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [78.9629,20.5937 ],
        zoom: 3,
        })

       if(props.pickupCoordinates){
        addToMap(map,props.pickupCoordinates)
       }

       if(props.pickupCoordinates && props.dropoffCoordinates){
        map.fitBounds([
        props.dropoffCoordinates,
        props.pickupCoordinates

        ],{
           padding:60

        })
       }

       if(props.dropoffCoordinates){
        addToMap(map,props.dropoffCoordinates)
       }
      
      },[props.pickupCoordinates, props.dropoffCoordinates])
      
 
      const addToMap = (map,coordinates) => {
        const marker1 = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);

      }


      
      
     

  

  return (
    <Wrapper id="map">
      
    </Wrapper>
  )
}

export default Map

const Wrapper = tw.div`

flex-1 h-1/2
`


