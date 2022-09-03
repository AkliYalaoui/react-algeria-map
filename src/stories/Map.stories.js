import React from "react";
import { storiesOf } from "@storybook/react";

import { Map } from "../components/Map";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  const data = {
    Adrar: 0,
    Alger: 15,
    Annaba: 22,
    "Aïn Defla": 43,
    "Aïn Témouchent": 45,
    Batna: 4,
    Biskra: 6,
    Blida: 8,
    "Bordj Badji Mokhtar": 49,
    "Bordj Bou Arreridj": 33,
    Bouira: 9,
    Boumerdès: 34,
    Béchar: 7,
    Béjaïa: 5,
    "Béni Abbès": 51,
    Chlef: 1,
    Constantine: 24,
    Djanet: 55,
    Djelfa: 16,
    "El Bayadh": 31,
    "El Meghaier": 56,
    "El Menia": 57,
    "El Oued": 38,
    "El Tarf": 35,
    Ghardaïa: 46,
    Guelma: 23,
    Illizi: 32,
    "In Guezzam": 53,
    "In Salah": 52,
    Jijel: 17,
    Khenchela: 39,
    Laghouat: 2,
    "M'Sila": 27,
    Mascara: 28,
    Mila: 42,
    Mostaganem: 26,
    Médéa: 25,
    Naâma: 44,
    Oran: 30,
    Ouargla: 29,
    "Ouled Djellal": 50,
    "Oum El Bouaghi": 3,
    Relizane: 47,
    Saïda: 19,
    "Sidi Bel Abbès": 21,
    Skikda: 20,
    "Souk Ahras": 40,
    Sétif: 18,
    Tamanrasset: 10,
    Tiaret: 13,
    Timimoun: 48,
    Tindouf: 36,
    Tipaza: 41,
    Tissemsilt: 37,
    "Tizi Ouzou": 14,
    Tlemcen: 12,
    Touggourt: 54,
    Tébessa: 11,
  };
  return (
    <Map
      color="#55E6C1"
      HoverColor="#58B19F"
      stroke="#fff"
      hoverStroke="#218c74"
      height="400px"
      width="400px"
      data={data}
      onWilayaClick={(wilaya, data) => console.log(wilaya, data)}
    />
  );
});
