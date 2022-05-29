import { e } from '../utilities/dom.js';

const educationTemplate = () => e('section',{className:'education'},[
  e('div',{className:'education-wrapper u-fade-in'},[
    e('h5',{},[
      e('span',{},[
        e('i',{className:'fa-solid fa-graduation-cap'})
      ])
    ], 'Education'),
    e('div',{className:'education-timeline'},[
      e('article',{},[
        e('h6',{className:'u-clear-margin'},'Software University'),
        e('p',{},'2020 - 2022'),
        e('p',{className:'u-clear-margin'},'Software Engineering')
      ]),
      e('article',{},[
        e('h6',{className:'u-clear-margin'},'University of Economics Varna'),
        e('p',{},'2013 - 2017'),
        e('p',{className:'u-clear-margin'},'International Economic Relations')
      ]),
      e('article',{},[
        e('h6',{className:'u-clear-margin'},'GRE - Rakovski, Burgas'),
        e('p',{},'2008 - 2013'),
        e('p',{className:'u-clear-margin'},'Foreign Languages')
      ]),
    ])
  ])
])

export async function educationPage(render) {
    render(educationTemplate());
}
