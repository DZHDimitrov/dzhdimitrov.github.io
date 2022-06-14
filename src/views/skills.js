import { e } from "../utilities/dom.js";

const skillsTemplate = () => e(
  'section',{className:'skills'},[
    e('h3',{},'Skills'),
    e('div',{className:'skills-container u-fade-in'},[
      e('div',{className:'skills__box'},[
        e('div',{className:'skills__box-text'},[
          e('h6',{},'.NET'),
          e('hr',{className:'o-separator'},[]),
          e('p',{},'Experience in personal projects only with the following technologies:'),
          e('ul',{className:'technology-details'},[
            e('li',{},[
              e('img',{src:'./assets/svgs/csharp.svg'},[]),
              e('span',{},'C#')
            ]),
            e('li',{},[
              e('img',{src:'./assets/svgs/efcore.svg'},[]),
              e('span',{},'EF Core')
            ]),
            e('li',{},[
              e('img',{src:'./assets/svgs/aspnet.svg'},[]),
              e('span',{},'ASP.NET Core')
            ]),
          ])
        ])
      ]),
      e('div',{className:'skills__box'},[
        e('div',{className:'skills__box-text'},[
          e('h6',{},'Databases'),
          e('hr',{className:'o-separator'},[]),
          e('p',{},'Experience in personal projects as well as professional experiece with:'),
          e('ul',{className:'technology-details'},[
            e('li',{},[
              e('img',{src:'./assets/svgs/mssql.svg'},[]),
              e('span',{},'MS SQL')
            ]),
            e('li',{},[
              e('img',{src:'./assets/svgs/mongo.svg'},[]),
              e('span',{},'MongoDb')
            ]),
          ])
        ])
      ]),
      e('div',{className:'skills__box'},[
        e('div',{className:'skills__box-text'},[
          e('h6',{},'Front-end'),
          e('hr',{className:'o-separator'},[]),
          e('p',{},'Experience in personal projects as well as professional experiece with:'),
          e('ul',{className:'technology-details'},[
            e('li',{},[
              e('img',{src:'./assets/svgs/html.svg'},[]),
              e('span',{},'HTML')
            ]),
            e('li',{},[
              e('img',{src:'./assets/svgs/css3.svg'},[]),
              e('span',{},'CSS')
            ]),
            e('li',{},[
              e('img',{src:'./assets/svgs/sass.svg'},[]),
              e('span',{},'Sass')
            ]),
            e('li',{},[
              e('img',{src:'./assets/svgs/js.svg'},[]),
              e('span',{},'Javascript')
            ]),
            e('li',{},[
              e('img',{src:'./assets/svgs/angular.svg'},[]),
              e('span',{},'Angular')
            ]),
          ])
        ])
      ]),
      e('div',{className:'skills__box'},[
        e('div',{className:'skills__box-text'},[
          e('h6',{},'Other'),
          e('hr',{className:'o-separator'},[]),
          e('p',{},'Experience in personal projects as well as professional experiece with:'),
          e('ul',{className:'technology-details'},[
            e('li',{},[
              e('img',{src:'./assets/svgs/nodejs.svg'},[]),
              e('span',{},'Node.js')
            ]),
            e('li',{},[
              e('img',{},[]),
              e('span',{},'Express.js')
            ]),
            e('li',{},[
              e('img',{src:'./assets/svgs/typescript.svg'},[]),
              e('span',{},'Typescript')
            ]),
          ])
        ])
      ])
    ])
  ]
);

export async function skillsPage(render) {
  render(skillsTemplate());
}
