import { e } from '../utilities/dom.js';

const interestsTemplate = () => e(
  'section',{className:'interests'},[
    e('div',{className:'interests-wrapper u-fade-in'},[
      e('h5',{},[
        e('span',{},[
          e('i',{})
        ])
      ],'Interests'),
      e('p',{},'I like spending most of my time on watching videos, reading books, building projects associated with self-developement in software. I am also a traveller, curious to see and learn about different cultures. During the rest of my spare time I usually train or enjoy playing computer games.'),
      e('div',{className:'interests-container'},[
        e('div',{className:'interests-box'},[
          e('i',{className:'fa-solid fa-book-open-reader'})
        ]),
        e('div',{className:'interests-box'},[
          e('i',{className:'fa-solid fa-plane'})
        ]),
        e('div',{className:'interests-box'},[
          e('i',{className:'fa-solid fa-volleyball'})
        ]),
        e('div',{className:'interests-box'},[
          e('i',{className:'fa-solid fa-gamepad'})
        ]),
      ])
    ])
  ]
)

export function interestsPage(render) {
    render(interestsTemplate());
}
