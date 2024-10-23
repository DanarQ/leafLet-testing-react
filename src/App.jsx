// jangan lupa untuk meng import leaftlet css dan import Mapcontainer, marker, Tilelayer nya
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
// div icon come from liflet
import { Icon, divIcon } from "leaflet";

function App() {
  // tata letak marker nya ini berbentuk props
  const markers = [
    {
      geocode: [-0.05895395753495922, 109.35229393924475],
      popup: "Universitas Pontianak",
    },
    {
      geocode: [-0.06020082916679981, 109.34500512876129],
      popup: "Universitas Tanjungpura",
    },
    {
      geocode: [-0.038472009835724255, 109.34053477115252],
      popup: "Universitas IAIN",
    },
  ];
  // buat customIcon untuk marker
  const customIcon = new Icon({
    iconUrl: "/src/assets/marker.png",
    iconSize: [38, 38], // size icon nya standard size
  });
  // sebenar nya ini dugnakan untuk performa liflet nya
  const createCustomIcon = (cluster) => {
    return new divIcon({
      html: `<div class ="cluster-icon">${cluster.getChildCount()}</div>`,
      iconSize: [33, 33, true],
    });
  };
  return (
    <>
      {/* ini untuk menampilkan map nya */}
      <MapContainer
        center={[-0.03187197198825267, 109.34283937155634]}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></TileLayer>
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomIcon}
        >
          {markers.map((marker) => (
            //ini kita mengambil props variabel marker dan untuk posisi marker nya
            <Marker position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popup}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
}

export default App;
