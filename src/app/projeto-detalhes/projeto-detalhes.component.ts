import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

interface Projeto {
  id: string;
  titulo: string;
  categoria: string;
  local: string;
  area: string;
  ano: string;
  imagem: string;
  descricao: string;
  caracteristicas: string[];
}

@Component({
  selector: 'app-projeto-detalhes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projeto-detalhes.component.html',
  styleUrl: './projeto-detalhes.component.scss'
})
export class ProjetoDetalhesComponent implements OnInit {
  projeto: Projeto = {
    id: 'loft-minimalista',
    titulo: 'Loft Minimalista',
    categoria: 'Residencial',
    local: 'Belo Horizonte, MG',
    area: '180m²',
    ano: '2023',
    imagem: '/assets/images/space.jpg',
    descricao: 'Loft com design minimalista e funcional, utilizando materiais naturais e tons neutros para criar um ambiente acolhedor e sofisticado. O conceito open space foi aplicado para maximizar a sensação de amplitude e integração dos ambientes.',
    caracteristicas: ['Pé direito duplo', 'Cozinha integrada', 'Mezanino', 'Iluminação natural', 'Mobiliário exclusivo']
  };

  projetos: Projeto[] = [
    {
      id: 'residência-moderna',
      titulo: 'Residência Moderna',
      categoria: 'Residencial',
      local: 'São Paulo, SP',
      area: '350m²',
      ano: '2023',
      imagem: '/assets/images/monastery-.jpg',
      descricao: 'Residência contemporânea com linhas minimalistas, amplos espaços e integração com a natureza. Projetada para oferecer conforto e funcionalidade, com atenção aos detalhes e acabamentos de alta qualidade.',
      caracteristicas: ['Automação residencial', 'Energia solar', 'Jardim vertical', 'Home theater', 'Piscina com borda infinita']
    },
    {
      id: 'escritório-corporativo',
      titulo: 'Escritório Corporativo',
      categoria: 'Corporativo',
      local: 'Rio de Janeiro, RJ',
      area: '520m²',
      ano: '2022',
      imagem: '/assets/images/monastery-.jpg',
      descricao: 'Ambiente corporativo moderno e funcional, projetado para estimular a criatividade e produtividade. Espaços flexíveis que se adaptam às diferentes necessidades da empresa.',
      caracteristicas: ['Salas modulares', 'Áreas de descompressão', 'Auditório multifuncional', 'Tecnologia integrada', 'Design biofílico']
    },
    {
      id: 'loft-minimalista',
      titulo: 'Loft Minimalista',
      categoria: 'Residencial',
      local: 'Belo Horizonte, MG',
      area: '180m²',
      ano: '2023',
      imagem: '/assets/images/space.jpg',
      descricao: 'Loft com design minimalista e funcional, utilizando materiais naturais e tons neutros para criar um ambiente acolhedor e sofisticado. O conceito open space foi aplicado para maximizar a sensação de amplitude e integração dos ambientes.',
      caracteristicas: ['Pé direito duplo', 'Cozinha integrada', 'Mezanino', 'Iluminação natural', 'Mobiliário exclusivo']
    },
    {
      id: 'casa-de-praia',
      titulo: 'Casa de Praia',
      categoria: 'Residencial',
      local: 'Florianópolis, SC',
      area: '420m²',
      ano: '2023',
      imagem: '/assets/images/stairs.jpg',
      descricao: 'Residência à beira-mar com amplos espaços e vista panorâmica para o oceano. Design contemporâneo que incorpora elementos naturais e privilegia a integração com o ambiente externo.',
      caracteristicas: ['Deck com vista para o mar', 'Amplas janelas', 'Materiais sustentáveis', 'Área gourmet externa', 'Paisagismo nativo']
    },
    {
      id: 'restaurante-contemporâneo',
      titulo: 'Restaurante Contemporâneo',
      categoria: 'Comercial',
      local: 'Curitiba, PR',
      area: '280m²',
      ano: '2022',
      imagem: '/assets/images/monastery-.jpg',
      descricao: 'Espaço gastronômico sofisticado com ambientação aconchegante. O design interior combina materiais rústicos e contemporâneos, criando um ambiente acolhedor e refinado para experiências culinárias memoráveis.',
      caracteristicas: ['Cozinha show', 'Adega climatizada', 'Iluminação cênica', 'Acústica controlada', 'Mobiliário personalizado']
    },
    {
      id: 'clínica-de-bem-estar',
      titulo: 'Clínica de Bem-estar',
      categoria: 'Comercial',
      local: 'Brasília, DF',
      area: '320m²',
      ano: '2023',
      imagem: '/assets/images/space.jpg',
      descricao: 'Ambiente terapêutico que harmoniza tecnologia e bem-estar, projetado para proporcionar tranquilidade e conforto aos pacientes. Espaços fluidos com elementos naturais que estimulam o relaxamento e a renovação.',
      caracteristicas: ['Salas de terapia acusticamente isoladas', 'Jardim zen', 'Cromoterapia', 'Materiais antibacterianos', 'Ventilação natural']
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Obter o ID do projeto da URL
    this.route.paramMap.subscribe(params => {
      const projetoId = params.get('id');
      if (projetoId) {
        // Buscar o projeto correspondente na lista de projetos
        const projetoEncontrado = this.projetos.find(p => p.id === projetoId);
        if (projetoEncontrado) {
          this.projeto = projetoEncontrado;
        }
      }
    });
  }
  
  voltarParaProjetos(): void {
    this.router.navigate(['/']);
  }
}
