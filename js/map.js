document.addEventListener("DOMContentLoaded", function() {
  // Inicializar el mapa centrado
  const map = L.map('map').setView([-1.9788701, -78.7290002], 7);

  // Cargar la capa de OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Función para crear el contenido del marcador
  function buildContent(property) {
    const content = document.createElement("div");
    content.classList.add("property");
    content.innerHTML = `
      <div class="icon">
        <img src="img/favicon.png" alt="" title="${property.lugar}">
      </div>
      <div class="details">
          <div class="price" style="color:#0068ff; font-weight: bold; text-align:center">${property.lugar}</div>
          <div class="address">${property.address}</div>
          <div class="features">
            <div>
              <a href="https://api.whatsapp.com/send?phone=593${property.phone}&text=Hola,+necesito+que+me+ayude+con+información" target="_blank">
                <i class="fa fa-phone phone" style="color:#0068ff"></i>
                <span>${property.phone}</span>
              </a>
            </div>
            <div>
              <a href="https://www.google.com/maps/dir/?api=1&destination=${property.position.lat}%2C${property.position.lng}" target="_blank">
                <i class="fa fa-ruler size" style="color:#0068ff"></i>
                <span>${property.direction}</span>
              </a>
            </div>
          </div>
      </div>
    `;
    return content;
  }

  // Agregar marcadores al mapa
  function addMarkers(properties) {
    properties.forEach((property) => {
      const marker = L.marker([property.position.lat, property.position.lng]).addTo(map);
      const popupContent = buildContent(property).outerHTML;
      marker.bindPopup(popupContent);
    });
  }

  // Propiedades de agencias
  const properties = [
    {
    address: "Ramón Pinto y Venezuela",
    type: "home",
    lugar: "Sportmancar Loja Matriz",
    phone: "0984935777",
    direction: "Como LLegar",
    position: {
      lat: -4.0081341,
      lng: -79.2075736,
    },
  },
  {
    address: "Av. Manuel Agustín Aguirre y Av. Los Paltas",
    type: "home",
    lugar: "Sportmancar Loja Sucursal",
    phone: "0984935777",
    direction: "Como LLegar",
    position: {
      lat: -4.021160,
      lng: -79.216946,
    },
  },
  {
    address: "Clemente Baquerizo, Av.General Barona y Eloy Alfaro",
    type: "home",
    lugar: "Sportmancar Babahoyo",
    phone: "0963987884",
    direction: "Como LLegar",
    position: {
    lat: -1.798658,
    lng: -79.533118,
    },
  },
  {
    address: "Av. Bernardo Valdivieso entre José Miguel Rosillo y Sucre",
    type: "home",
    lugar: "Sportmancar Cariamanga",
    phone: "0986555107",
    direction: "Como LLegar",
    position: {
    lat: -4.323676881712292,
    lng: -79.55304626787986,
    },
  },
  {
    address: "Av. Machala y Carchi",
    type: "home",
    lugar: "Sportmancar El Guabo",
    phone: "0981375049",
    direction: "Como LLegar",
    position: {
    lat: -3.245559106316005,
    lng: -79.83330202168072,
    },
  },
  {
    address: "Jorge Mosquera y Loja (junto al cajero de la JEP)",
    type: "home",
    lugar: "Sportmancar El Pangui",
    phone: "2310377 - 0981082373",
    direction: "Como LLegar",
    position: {
    lat: -3.628581975175943,
    lng: -78.58874609737549,
    },
  },
  {
    address: "Bálsamos 208 B5 y calle 6ta, esquina",
    type: "home",
    lugar: "Sportmancar Guayaquil",
    phone: "0963987883",
    direction: "Como LLegar",
    position: {
    lat: -2.175401,
    lng: -79.907631,
    },
  },
  {
    address: "Febrés Cordero, Portete 3854 y calle 14va",
    type: "home",
    lugar: "Sportmancar Guayaquil",
    phone: "0984935777",
    direction: "Como LLegar",
    position: {
    lat: -2.202587,
    lng: -79.913602,
    },
  },
  {
    address: "Calle Piñas e/ Av. República y Machala",
    type: "home",
    lugar: "Sportmancar Huaquillas",
    phone: "0999318416",
    direction: "Como LLegar",
    position: {
    lat: -3.4834198665355918,
    lng: -80.22757466190187,
    },
  },
  {
    address: "Km 1 vía a Guayaquil frente al terminal terrestre de Jipijapa",
    type: "home",
    lugar: "Sportmancar Jipijapa",
    phone: "0995284713",
    direction: "Como LLegar",
    position: {
    lat: -1.3590048994805808,
    lng: -80.5903500380203,
    },
  },
  {
    address: "Eloy Alfaro, Calle 8ava. entre 16 y 17",
    type: "home",
    lugar: "Sportmancar La Libertad",
    phone: "042780685 - 0979375801",
    direction: "Como LLegar",
    position: {
    lat: -2.225596499079058,
    lng: -80.91281950446015,
    },
  },
  {
    address: "10 de Agosto y Emiliano Correa diagonal al Mercado Central",
    type: "home",
    lugar: "Sportmancar Macará",
    phone: "0993785021",
    direction: "Como LLegar",
    position: {
    lat: -4.379719131284128,
    lng: -79.94335981520537,
    },
  },
  {
    address: "Cuenca 108 y Circunvalación Norte (Diagonal al Colegio UNE)",
    type: "home",
    lugar: "Sportmancar Machala Matriz",
    phone: "072981036",
    direction: "Como LLegar",
    position: {
    lat: -3.267782983544802,
    lng: -79.94609963121336,
    },
  },
  {
    address: "Marcel Laneado e/t palmeras y vela diagonal al Gran Aki",
    type: "home",
    lugar: "Sportmancar Machala Sucursal",
    phone: "0963919099",
    direction: "Como LLegar",
    position: {
    lat: -3.2512699452594838,
    lng: -79.95781138428177,
    },
  },
  {
    address: "Flavio reyes y calle 20",
    type: "home",
    lugar: "Sportmancar Manta",
    phone: "2623173 - 095664194",
    direction: "Como LLegar",
    position: {
    lat: -0.94487076106666,
    lng: -80.73216446336981,
    },
  },
  {
    address: "Welmer Quezada Neira y Sn",
    type: "home",
    lugar: "Sportmancar Portovelo",
    phone: "0969390576",
    direction: "Como LLegar",
    position: {
    lat: -3.719488934438374,
    lng: -79.62088808195344,
    },
  },
  {
    address: "Av. América y Ramón Fernández",
    type: "home",
    lugar: "Sportmancar Portoviejo",
    phone: "0958964158",
    direction: "Como LLegar",
    position: {
    lat: -1.0516362989615085,
    lng: -80.45719757682113,
    },
  },
  {
    address: "Calle 10 de Agosto y Unión Puyango (Frente al Estadio Municipal)",
    type: "home",
    lugar: "Sportmancar Puyango",
    phone: "0980376221",
    direction: "Como LLegar",
    position: {
    lat: -4.014250728750409,
    lng: -80.01798521706085,
    },
  },
  {
    address: "San Camilo Av. Guayaquil y Eloy Alfaro frente al Banco Pichincha",
    type: "home",
    lugar: "Sportmancar Quevedo",
    phone: "0963987885",
    direction: "Como LLegar",
    position: {
    lat: -1.0220002852689696,
    lng: -79.45888857714195,
    },
  },
  {
    address: "Atascoso Norte mz1 y Walter Andrade",
    type: "home",
    lugar: "Sportmancar Quevedo",
    phone: "0963987885",
    direction: "Como LLegar",
    position: {
    lat: -1.0220002852689696,
    lng: -79.45888857714195,
    },
  },
  {
    address: "San Camilo, calle 3ra y La H",
    type: "home",
    lugar: "Sportmancar Quevedo",
    phone: "0963987885",
    direction: "Como LLegar",
    position: {
    lat: -1.0220002852689696,
    lng: -79.45888857714195,
    },
  },
  {
    address: "Calle Primera y Av. Río Guayas",
    type: "home",
    lugar: "Sportmancar Samborondón",
    phone: "096398788",
    direction: "Como LLegar",
    position: {
    lat: -2.145846,
    lng: -79.864928,
    },
  },
  {
    address: "Sixto Durán Ballen y 1ro de Agosto",
    type: "home",
    lugar: "Sportmancar Santa Rosa",
    phone: "0991282759",
    direction: "Como LLegar",
    position: {
    lat: -3.450645922329874,
    lng: -79.9633472061516,
    },
  },
  {
    address: "Av. Chone Calle Juan Jose Flores y Vicente Rocafuerte.",
    type: "home",
    lugar: "Sportmancar Santo Domingo",
    phone: "0998150836",
    direction: "Como LLegar",
    position: {
    lat: -0.2553657172379195,
    lng: -79.18397859802616,
    },
  },
  {
    address: "Avenida Quito, Km 1 1/2 dentro de la Plaza Kasama",
    type: "home",
    lugar: "Sportmancar Santo Domingo",
    phone: "0998150836",
    direction: "Como LLegar",
    position: {
    lat: -0.248235,
    lng: -79.143292,
    },
  },
  {
    address: "Av. Francisco de Orellana y 9 de Octubre (Sector el Malecón junto a la cruz roja)",
    type: "home",
    lugar: "Sportmancar Tena",
    phone: "0993799739",
    direction: "Como LLegar",
    position: {
    lat: -0.9923860997467457,
    lng: -77.8147716623778,
    },
  },
  {
    address: "Martin Ayuy y Jorge Mosquera",
    type: "home",
    lugar: "Sportmancar Yantzaza",
    phone: "0980750295",
    direction: "Como LLegar",
    position: {
    lat: -3.8307550295923125,
    lng: -78.76167424464414,
    },
  },
  {
    address: "Av Mayaicu y Ernesto Farez",
    type: "home",
    lugar: "Sportmancar Zamora",
    phone: "0981428065",
    direction: "Como LLegar",
    position: {
    lat: -3.8307550295923125,
    lng: -78.76167424464414,
    },
  },
  {
    address: "Av. José Lizarzaburu y Saint Amand Montrond",
    type: "home",
    lugar: "Sportmancar Riobamba",
    phone: "0984935777",
    direction: "Como LLegar",
    position: {
    lat: -1.655651,
    lng: -78.665644,
    },
  },
  {
    address: "Av. Leopoldo Freire y La Paz",
    type: "home",
    lugar: "Sportmancar Riobamba",
    phone: "0984935777",
    direction: "Como LLegar",
    position: {
    lat: -1.679903,
    lng: -78.641237,
    },
  },
  {
    address: "Terminal terrestre De Santa Elena",
    type: "home",
    lugar: "Sportmancar Santa Elena",
    phone: "0984935777",
    direction: "Como LLegar",
    position: {
    lat: -2.2163199,
    lng: -80.8689777,
    },
  },
  {
    address: "Solanda, José Argudo S24-73 y Av. Solanda",
    type: "home",
    lugar: "Sportmancar Quito 1",
    phone: "0984935777",
    direction: "Como LLegar",
    position: {
    lat: -0.273590,
    lng: -78.541676,
    },
  },
  {
    address: "La Concepción, Av. La Prensa 57-146 y P. Valverde",
    type: "home",
    lugar: "Sportmancar Quito 2",
    phone: "0984935777",
    direction: "Como LLegar",
    position: {
    lat: -0.132305,
    lng: -78.493814,
    },
  },
  {
    address: "Tumbaco, Av. Interoceánica km 14 y Eloy Alfaro",
    type: "home",
    lugar: "Sportmancar Quito 3",
    phone: "0984935777",
    direction: "Como LLegar",
    position: {
    lat: -0.2131831,
    lng: -78.4127468,
    },
  },
  {
    address: "Atahualpa 503 y Quis Quis",
    type: "home",
    lugar: "Sportmancar Ambato",
    phone: "0984935777",
    direction: "Como LLegar",
    position: {
    lat: -1.2524574,
    lng: -78.6519004,
    },
  },
  {
    address: "Chaguarurco, Isauro Rodríguez y Sn",
    type: "home",
    lugar: "Sportmancar Santa Isabel",
    phone: "0984935777",
    direction: "Como LLegar",
    position: {
    lat: -3.2635792,
    lng: -79.346925,
    },
  },
  {
    address: "28 de Mayo y 10 de Noviembre",
    type: "home",
    lugar: "Sportmancar Ventanas",
    phone: "0984935777",
    direction: "Como LLegar",
    position: {
    lat: -1.4445347,
    lng: -79.4665681,
    },
  },
  {
    address: "Eloy Alfaro y 27 de Noviembre",
    type: "home",
    lugar: "Sportmancar Pedernales",
    phone: "0984935777",
    direction: "Como LLegar",
    position: {
    lat: 0.070055,
    lng: -80.05586,
    },
  },
  {
    address: "2 de mayo y Baltazara Terán",
    type: "home",
    lugar: "Sportmancar Latacunga",
    phone: "0984935777",
    direction: "Como LLegar",
    position: {
    lat: -0.938080,
    lng: -78.615693,
    },
  },
  {
    address: "Vía Panamericana entre Pastaza y Ranulfo Saenz",
    type: "home",
    lugar: "Sportmancar Naranjal",
    phone: "0984935777",
    direction: "Como LLegar",
    position: {
    lat: -2.675233,
    lng: -79.616557,
    },
  },
  {
    address: "Andrés Córdova 13-12 y Antonio Flor",
    type: "home",
    lugar: "Sportmancar Girón",
    phone: "0984935777",
    direction: "Como LLegar",
    position: {
    lat: -3.159993,
    lng: -79.146654,
    },
  },
  {
    address: "Moraspungo, 1 de Junio y Sn",
    type: "home",
    lugar: "Sportmancar Pangua",
    phone: "0984935777",
    direction: "Como LLegar",
    position: {
    lat: -1.174084,
    lng: -79.223890,
    },
  },
  ];

  // Agregar los marcadores
  addMarkers(properties);
});
