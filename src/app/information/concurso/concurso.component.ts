import { Component } from '@angular/core';

@Component({
  selector: 'app-concurso',
  templateUrl: './concurso.component.html',
  styleUrl: './concurso.component.css'
})
export class ConcursoComponent {
  concurso = [
    {
      'urlImg': 'https://cdn.pixabay.com/photo/2017/01/28/11/43/cup-2015198_1280.png',
      'titulo': 'Reconocimiento y Premios',
      'description': 'Tu arduo trabajo no pasará desapercibido! Participa en nuestros concursos y compite por emocionantes premios y reconocimientos. Desde reconocimientos por logros individuales hasta oportunidades de empleo y pasantías, tenemos recompensas esperando a los mejores talentos de la programación'
    },
    {
      'urlImg': 'https://ih1.redbubble.net/image.593083655.0412/flat,750x,075,f-pad,750x1000,f8f8f8.u11.webp',
      'titulo': 'Oportunidades de Aprendizaje',
      'description': 'Aprovecha la oportunidad de expandir tus habilidades técnicas y tu conocimiento en áreas de vanguardia. Con talleres, conferencias y recursos educativos, te ofrecemos las herramientas necesarias para mejorar tu comprensión de la programación y mantenerte al día con las últimas tendencias tecnológicas'
    },
    {
      'urlImg': 'https://ih1.redbubble.net/image.593083655.0412/flat,750x,075,f-pad,750x1000,f8f8f8.u11.webp',
      'titulo': 'Comunidad de Mentores',
      'description': 'Únete a una comunidad de programadores apasionados que están listos para compartir su experiencia y conocimientos contigo. Desde consejos sobre cómo abordar problemas específicos hasta tutoriales prácticos, nuestra red de mentores está aquí para ayudarte a crecer como programador y competir con confianza'
    },
    {
      'urlImg': 'https://ih1.redbubble.net/image.593083655.0412/flat,750x,075,f-pad,750x1000,f8f8f8.u11.webp',
      'titulo': 'Competencias Desafiantes',
      'description': 'Sumérgete en desafíos de codificación que pondrán a prueba tus habilidades en algoritmos, estructuras de datos y resolución de problemas. Desde problemas matemáticos hasta desafíos de lógica, prepárate para enfrentarte a problemas complejos y encontrar soluciones innovadoras'
    },
  ]
}
