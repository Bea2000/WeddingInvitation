import ReactCurvedText from 'react-curved-text';
import { MapContainer, Marker, Popup,TileLayer } from 'react-leaflet';
import { Icon,LatLngExpression } from 'leaflet';

import church from '../assets/images/church2.png';
import flowers from '../assets/images/flower.png';
import rings from '../assets/images/rings.png';

const MarriageLandingPage = () => {
  const ceremonyPosition = [-33.3702661733977, -70.4565451213695];
  const ceremonyAddress = 'Casona Cañaveral';
  const churchPosition = [-33.39099272111827, -70.58135574832426];
  const icon = new Icon({
    iconUrl: church,
    iconSize: [40, 40],
    iconAnchor: [15, 10],
    popupAnchor: [0, 0],
  })
  const icon2 = new Icon({
    iconUrl: rings,
    iconSize: [40, 40],
    iconAnchor: [10, 30],
    popupAnchor: [0, 0],
  })

  return (
    <div className="bg-gray-100 text-gray-800">
      <div
        className="bg-cover bg-gray-100 bg-center md:h-screen flex flex-col justify-center items-center text-black flex-grow"
      >
      <div className="mt-20">
        <ReactCurvedText
          width={400}
          height={150}
          cx={198}
          cy={204}
          rx={100}
          ry={100}
          startOffset={69}
          reversed={true}
          text="NUESTRO MATRIMONIO"
          textProps={{ 
            style: { 
              fontSize: '16',
              fontFamily: 'creamcake',
            } 
          }}
        />
        </div>
        <div>
          <h1 className="text-5xl font-creamcake bg text-center md:text-left">CAMILA</h1>
          <h1 
            className="text-4xl font-adelia bg text-center"
            style={{ transform: 'translateY(-10px) translateX(8px)' }}
          >
            y
          </h1>
          <h1 className="text-5xl font-creamcake bg text-center md:text-left">TOMÁS</h1>
        </div>
        <img 
          src={flowers}
          alt="Hero"
          className="object-cover absolute -top-5 -left-10 z-0 max-w-xs"
          style={{ transform: 'scaleX(-1)'}}
        />
        <div className="text-center p-8">
          <a
            href="https://forms.gle/cbewXQJtnva8iRAP7 "
            target="_blank"
            rel="noopener noreferrer"
            className="border-[#98ba64] border-solid border-2 text-white px-3 py-1 inline-flex items-center rounded-md"
          >
            <span className='font-creamcake text-center text-black bg'>HAZ CLICK AQUÍ PARA CONFIRMAR TU ASISTENCIA</span>
          </a>
            <div className="text-center p-8">
                <a
                  href="https://www.noviosfalabella.com/public/inicio.do "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-[#98ba64] border-solid border-2 text-white px-3 py-1 inline-flex items-center rounded-md"
                >
                  <span className='font-creamcake text-center text-black'>Link Regalos Novios Falabella</span>
                </a>
            </div>
      </div>
      </div>
      <div className="bg-[#d4d4d4] h-0.5 w-1/2 mx-auto"></div>
      <div className="flex flex-row items-center justify-center">
      <h1 className="text-xl font-creamcake bg text-center mr-5">SÁBADO</h1>
      <h1 className="text-5xl font-creamcake bg text-center text-[#98ba64]">20</h1>
      <h1 className="text-xl font-creamcake bg text-center ml-5 mr-5">ABRIL</h1>
      </div>
      <h1 className="text-xl font-creamcake bg text-center">2024</h1>
      <div className="bg-[#d4d4d4] h-0.5 w-1/2 mx-auto"></div>
      <h1 className="text-2xl font-creamcake bg text-center mt-8 mb-7">OUTFIT: Sin Corbata</h1>
      <div className="">
        <div className="bg-white rounded-lg shadow-2xl p-8 m-3">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <h2 className="text-xl font-medium mb-1 font-creamcake">La misa será a las 12:30 hrs en la</h2>
              <p className="mb-4 font-adelia">Iglesia Jacques Caseau ⛪</p>
            </div>
          <a
            href="https://www.google.com/maps/place/Parroquia+San+Juan+de+Vitacura/@-33.3911047,-70.5839521,17z/data=!3m1!4b1!4m6!3m5!1s0x9662c8d34f3ac269:0x505d8602e23e74dc!8m2!3d-33.3911092!4d-70.5813772!16s%2Fg%2F1vn19qrm?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="border-[#98ba64] border-solid border-2 text-white px-3 py-1 inline-flex items-center rounded-md h-1/2 ml-10 self-center mb-2"
          >
            <span className='font-creamcake text-center text-black bg'>VER MAPA</span>
          </a>
          </div>
          <MapContainer center={churchPosition  as LatLngExpression} zoom={16} scrollWheelZoom={false} style={{ height: '200px' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={churchPosition as LatLngExpression} icon={icon}>
              <Popup>Iglesia Jacques Caseau</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <div className="">
        <div className="bg-white rounded-lg shadow-2xl p-8 m-3">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <h2 className="text-xl font-medium mb-1 font-creamcake">Te esperamos a las 14:30 hrs en</h2>
              <p className="mb-4 font-adelia">{ceremonyAddress}</p>
            </div>
          <a
            href="https://www.google.com/maps/place/Casona+Ca%C3%B1averal/@-33.3704185,-70.4595599,17z/data=!3m1!4b1!4m6!3m5!1s0x9662cb604095318b:0xb90460127059f422!8m2!3d-33.370423!4d-70.456985!16s%2Fg%2F11c6qcvwfv?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="border-[#98ba64] border-solid border-2 text-white px-3 py-1 inline-flex items-center rounded-md h-1/2 ml-10 self-center mb-2"
          >
            <span className='font-creamcake text-center text-black bg'>VER MAPA</span>
          </a>
          </div>
          <MapContainer center={ceremonyPosition  as LatLngExpression} zoom={16} scrollWheelZoom={false} style={{ height: '200px' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={ceremonyPosition as LatLngExpression} icon={icon2}>
              <Popup>Casona Cañaveral</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default MarriageLandingPage;
