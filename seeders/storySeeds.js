'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stories', [{
        title: "Story 1",
        body: "The door opened again, and the cold *** suddenly gusted through the room, rustling the *** on the desk, swirling my hair around my ***. The girl who came in merely *** to the desk, placed a note in the wire basket, and *** again. But Edward Cullen’s *** stiffened, and he turned slowly to *** at me – his face was absurdly *** – with piercing, noun-filled eyes. For an instant, I felt a thrill of genuine ***, raising the hair on my ***. The look only lasted a second, but it chilled me more than the freezing ***.",
        category: "Twilight",
         createdAt: new Date(),
        updatedAt: new Date()
     }, {
        title: "Story 1",
        body: `*** means fame and fortune.

        Losing means *** death. I guess
        
        I wouldn’t mind dying, but dying
        
        means losing the ones I ***.
        
        
        
        The lights flicker on. KATNISS bats her eyes at the sudden
        
        ***, trying to adjust her *** to the bright lights,
        
        slightly startled. She is naked, except for a ***.
        
         CINNA circles her, examining her
        
        *** like a piece of ***.
        `,
        category: "Hunger Games",
        createdAt: new Date(),
        updatedAt: new Date()       
     },
    
   {
    title: "Wolves",
    body: `His father *** off his *** and handed them to Jory Cassel, the captain of his household guard. He took hold of Ice with both *** and said, "In the name of Robert of the House Baratheon, the *** of his Name, King of the Andals and the Rhoynar and the First Men, *** of the Seven Kingdoms and Protector of the Realm, by the word of Eddard of the House Stark, Lord of *** l and Warden of the North, I do sentence you to *** ." He lifted the great sword high above his head.

    Bran's *** brother Jon Snow moved closer. "Keep the *** well in hand," he whispered. "And don't look away. Father will know if you do."
    
    `,
    category: "Game of Thrones",
    createdAt: new Date(),
    updatedAt: new Date()       
 }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stories', null, {});
  }
};
