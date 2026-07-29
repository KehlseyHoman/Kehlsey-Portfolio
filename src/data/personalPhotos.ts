import dillonLake from '../assets/personal/dillon-lake.jpg';
import dogMillie from '../assets/personal/dog-millie.jpg';
import dogMilo from '../assets/personal/dog-milo.jpg';
import redWingsGame from '../assets/personal/redwings-game.jpg';

export interface PersonalPhoto {
  src: string;
  alt: string;
  objectPosition?: string; // defaults to 'center' if omitted
}

export const personalPhotos: PersonalPhoto[] = [
  { src: dillonLake, alt: 'Kehlsey and her husband sitting on the rocky shore of a mountain lake in Colorado' },
  { src: dogMillie, alt: 'Millie, our lab-collie mix, wearing a floral bandana', objectPosition: '50% 18%' },
  { src: dogMilo, alt: 'Milo, our Australian Shepherd, mid-smile outside in the yard', objectPosition: '50% 25%' },
  { src: redWingsGame, alt: 'View down onto the ice at a Detroit Red Wings hockey game' }
];
