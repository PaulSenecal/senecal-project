import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "Un univers de chat vient darriver dans le monde hearthstone,"+ 
    "une faille dun monde parallèle vient souvrir sur le monde dAzeroth." +
    "Le monde n’a qu’à bien se tenir face aux créatures du monde félin."+
    "Suite à la faille créée par les chats,"+ 
    "les chats envahissent le monde de Hearthstone avec 2 nouvelles classes le Chouette chat le frei et Bastet sorciere chatoyante,"+
    "et 61 nouvelles cartes de monstres, sorts et d’équipements."+
    "Venez affronter les pires ennemis avec une armée de chats MIAOUW."+
    "Les chats prennent le monopole de la puissance totale du monde."+
    "Venez essayer de les affronter si vous le pouvez afin de sauver Hearthstone d’une armée démoniaque et "+
    "de reconquérir les terres et restaurer la paix au sein de ce monde."+ 
    "L’équilibre entre le bien et le mal à complètement penché en faveur du mal."+ 
    "Le poisson sera votre meilleur ami et seul espoir durant cette aventure.";
  }
}
