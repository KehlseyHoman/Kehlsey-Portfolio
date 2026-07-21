import dillonLake from '../assets/personal/dillon-lake.jpg';
import dogMillie from '../assets/personal/dog-millie.jpg';
import dogMilo from '../assets/personal/dog-milo.jpg';
import redWingsGame from '../assets/personal/redwings-game.jpg';
import detroitSkyline from '../assets/personal/detroit-skyline.jpg';
import puertoRico2 from '../assets/personal/puerto-rico-2.jpg';

export interface PersonalPhoto {
  src: string;
  alt: string;
  objectPosition?: string; // defaults to 'center' if omitted
}

export const personalPhotos: PersonalPhoto[] = [
  { src: dillonLake, alt: 'Kehlsey and her husband sitting on the rocky shore of a mountain lake in Colorado' },
  { src: dogMillie, alt: 'Millie, our lab-collie mix, wearing a floral bandana', objectPosition: '50% 18%' },
  { src: dogMilo, alt: 'Milo, our Australian Shepherd, mid-smile outside in the yard', objectPosition: '50% 25%' },
  { src: redWingsGame, alt: 'View down onto the ice at a Detroit Red Wings hockey game' },
  { src: detroitSkyline, alt: 'Kehlsey and her husband dressed up with the Detroit skyline in the background' },
  { src: puertoRico2, alt: 'Kehlsey and her husband on another lookout point in Puerto Rico' },
];
