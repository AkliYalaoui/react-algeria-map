# react-algeria-map

A react component that displays an interactive map of Algeria including all 58 wilayas.\
[Check a demo of the component On stackblitz](https://stackblitz.com/edit/react-ts-8vv5gq?file=App.tsx)

## Installation

This component is available via npm, simply run the following command :

```bash
npm install --save react-algeria-map
```

## Usage

The component is very easy to use, first import it then call it as a regular react component :

```jsx
import { Map } from "react-algeria-map";

<Map
  color="#55E6C1"
  HoverColor="#58B19F"
  stroke="#fff"
  hoverStroke="#218c74"
  height="400px"
  width="400px"
  data={data}
  onWilayaClick={(wilaya, data) => console.log(wilaya, data)}
/>;
```
## Props
| Prop          | Type                                                     | Description                                                                                                                                                              |
|---------------|----------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| color         | string                                                   | Set the color of the wilayas in the map                                                                                                                                  |
| HoverColor    | string                                                   | Set the color of the hovered wilaya                                                                                                                                      |
| stroke        | string                                                   | Set the color of the borders of the wilayas                                                                                                                              |
| hoverStroke   | string                                                   | Set the color of the borders of the hovered wilaya                                                                                                                       |
| height        | string                                                   | Set the occupied height by the map                                                                                                                                       |
| width         | string                                                   | Set the occupied width by the map                                                                                                                                        |
| data          | object                                                   | Sets the data to show in hover or click actions on each wilaya. <br>The keys are fixed and are the wilayas, the values of the keys <br>can be anything you want to show. |
| onWilayaClick | function(key:string,value: string\|number\|boolean):void | The callback function to execute when the wilaya is being clicked                                                                                                        |
## data prop

The data prop is just an object where each key is the name of the wilaya and its value is what's displayed when the wilaya being hovered or clicked. So keys are fixed and you are free to set the values for whatever you want.

```jsx
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
```
