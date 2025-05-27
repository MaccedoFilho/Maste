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
  galeriaImagens?: GaleriaItem[];
}

interface GaleriaItem {
  imagem: string;
  descricao: string;
  titulo: string;
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
    caracteristicas: ['Pé direito duplo', 'Cozinha integrada', 'Mezanino', 'Iluminação natural', 'Mobiliário exclusivo'],
    galeriaImagens: [
      {
        imagem: '/assets/images/space.jpg',
        titulo: 'Sala de estar',
        descricao: 'Espaço integrado com pé direito duplo e iluminação natural abundante'
      },
      {
        imagem: '/assets/images/monastery-.jpg',
        titulo: 'Cozinha gourmet',
        descricao: 'Acabamentos sofisticados e design clean para experiências culinárias memoráveis'
      },
      {
        imagem: '/assets/images/stairs.jpg',
        titulo: 'Escada flutuante',
        descricao: 'Elemento escultural que conecta os ambientes com leveza e sofisticação'
      },
      {
        imagem: '/assets/images/space.jpg',
        titulo: 'Mezanino',
        descricao: 'Ambiente versátil com vista privilegiada para o andar inferior'
      },
      {
        imagem: '/assets/images/monastery-.jpg',
        titulo: 'Suíte master',
        descricao: 'Refúgio minimalista com texturas naturais e iluminação cênica'
      },
      {
        imagem: '/assets/images/stairs.jpg',
        titulo: 'Banheiro',
        descricao: 'Mármore e madeira em harmonia, criando uma atmosfera spa'
      }
    ]
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
      caracteristicas: ['Automação residencial', 'Energia solar', 'Jardim vertical', 'Home theater', 'Piscina com borda infinita'],
      galeriaImagens: [
        {
          imagem: '/assets/images/monastery-.jpg',
          titulo: 'Fachada principal',
          descricao: 'Linhas contemporâneas e integração com o paisagismo exuberante'
        },
        {
          imagem: '/assets/images/space.jpg',
          titulo: 'Living ampliado',
          descricao: 'Integração total com o exterior através de painéis deslizantes'
        },
        {
          imagem: '/assets/images/stairs.jpg',
          titulo: 'Área de lazer',
          descricao: 'Piscina com borda infinita e vista panorâmica para o jardim'
        },
        {
          imagem: '/assets/images/monastery-.jpg',
          titulo: 'Cozinha gourmet',
          descricao: 'Ilha central com bancada em mármore e equipamentos premium'
        },
        {
          imagem: '/assets/images/space.jpg',
          titulo: 'Home theater',
          descricao: 'Ambiente imersivo com tratamento acústico e iluminação cênica'
        },
        {
          imagem: '/assets/images/stairs.jpg',
          titulo: 'Suíte master',
          descricao: 'Cabeceira estofada sob medida e iluminação pensada em cada detalhe'
        }
      ]
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
      caracteristicas: ['Salas modulares', 'Áreas de descompressão', 'Auditório multifuncional', 'Tecnologia integrada', 'Design biofílico'],
      galeriaImagens: [
        {
          imagem: '/assets/images/monastery-.jpg',
          titulo: 'Recepção',
          descricao: 'Ambiente de boas-vindas que reflete a identidade corporativa'
        },
        {
          imagem: '/assets/images/space.jpg',
          titulo: 'Área de trabalho colaborativo',
          descricao: 'Espaço dinâmico que incentiva a troca de ideias e a criatividade'
        },
        {
          imagem: '/assets/images/stairs.jpg',
          titulo: 'Sala de reuniões',
          descricao: 'Tecnologia de ponta para apresentações e videoconferências'
        },
        {
          imagem: '/assets/images/monastery-.jpg',
          titulo: 'Espaço de descompressão',
          descricao: 'Ambiente inspirador para pausas e momentos de descontração'
        },
        {
          imagem: '/assets/images/space.jpg',
          titulo: 'Auditório',
          descricao: 'Versatilidade para eventos, treinamentos e apresentações'
        },
        {
          imagem: '/assets/images/stairs.jpg',
          titulo: 'Estações de trabalho',
          descricao: 'Ergonomia e funcionalidade para o dia a dia produtivo'
        }
      ]
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
      caracteristicas: ['Pé direito duplo', 'Cozinha integrada', 'Mezanino', 'Iluminação natural', 'Mobiliário exclusivo'],
      galeriaImagens: [
        {
          imagem: '/assets/images/space.jpg',
          titulo: 'Sala de estar',
          descricao: 'Espaço integrado com pé direito duplo e iluminação natural abundante'
        },
        {
          imagem: '/assets/images/monastery-.jpg',
          titulo: 'Cozinha gourmet',
          descricao: 'Acabamentos sofisticados e design clean para experiências culinárias memoráveis'
        },
        {
          imagem: '/assets/images/stairs.jpg',
          titulo: 'Escada flutuante',
          descricao: 'Elemento escultural que conecta os ambientes com leveza e sofisticação'
        },
        {
          imagem: '/assets/images/space.jpg',
          titulo: 'Mezanino',
          descricao: 'Ambiente versátil com vista privilegiada para o andar inferior'
        },
        {
          imagem: '/assets/images/monastery-.jpg',
          titulo: 'Suíte master',
          descricao: 'Refúgio minimalista com texturas naturais e iluminação cênica'
        },
        {
          imagem: '/assets/images/stairs.jpg',
          titulo: 'Banheiro',
          descricao: 'Mármore e madeira em harmonia, criando uma atmosfera spa'
        }
      ]
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
      caracteristicas: ['Deck com vista para o mar', 'Amplas janelas', 'Materiais sustentáveis', 'Área gourmet externa', 'Paisagismo nativo'],
      galeriaImagens: [
        {
          imagem: '/assets/images/stairs.jpg',
          titulo: 'Vista frontal',
          descricao: 'Arquitetura contemporânea que dialoga com a paisagem praiana'
        },
        {
          imagem: '/assets/images/space.jpg',
          titulo: 'Sala de estar',
          descricao: 'Amplas aberturas que enquadram a vista do oceano'
        },
        {
          imagem: '/assets/images/monastery-.jpg',
          titulo: 'Deck externo',
          descricao: 'Madeira sustentável e mobiliário que convida ao relaxamento'
        },
        {
          imagem: '/assets/images/stairs.jpg',
          titulo: 'Área gourmet',
          descricao: 'Espaço para momentos de confraternização com vista privilegiada'
        },
        {
          imagem: '/assets/images/space.jpg',
          titulo: 'Suíte master',
          descricao: 'Conforto e sofisticação com visual para o mar'
        },
        {
          imagem: '/assets/images/monastery-.jpg',
          titulo: 'Piscina',
          descricao: 'Borda infinita que se integra visualmente com o horizonte marítimo'
        }
      ]
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
      caracteristicas: ['Cozinha show', 'Adega climatizada', 'Iluminação cênica', 'Acústica controlada', 'Mobiliário personalizado'],
      galeriaImagens: [
        {
          imagem: '/assets/images/monastery-.jpg',
          titulo: 'Entrada',
          descricao: 'Fachada convidativa com iluminação que destaca elementos arquitetônicos'
        },
        {
          imagem: '/assets/images/space.jpg',
          titulo: 'Salão principal',
          descricao: 'Ambiente sofisticado com acústica controlada para conforto dos clientes'
        },
        {
          imagem: '/assets/images/stairs.jpg',
          titulo: 'Cozinha show',
          descricao: 'Integração entre chef e clientes para uma experiência gastronômica completa'
        },
        {
          imagem: '/assets/images/monastery-.jpg',
          titulo: 'Adega',
          descricao: 'Expositor climatizado com seleção premium de vinhos'
        },
        {
          imagem: '/assets/images/space.jpg',
          titulo: 'Bar',
          descricao: 'Ambiente intimista para drinks exclusivos e momentos especiais'
        },
        {
          imagem: '/assets/images/stairs.jpg',
          titulo: 'Área externa',
          descricao: 'Jardim vertical e mobiliário contemporâneo para refeições ao ar livre'
        }
      ]
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
      caracteristicas: ['Salas de terapia acusticamente isoladas', 'Jardim zen', 'Cromoterapia', 'Materiais antibacterianos', 'Ventilação natural'],
      galeriaImagens: [
        {
          imagem: '/assets/images/space.jpg',
          titulo: 'Recepção',
          descricao: 'Ambiente acolhedor que transmite serenidade desde o primeiro contato'
        },
        {
          imagem: '/assets/images/monastery-.jpg',
          titulo: 'Sala de terapia',
          descricao: 'Isolamento acústico e materiais naturais para sessões tranquilas'
        },
        {
          imagem: '/assets/images/stairs.jpg',
          titulo: 'Jardim zen',
          descricao: 'Espaço contemplativo que convida à meditação e relaxamento'
        },
        {
          imagem: '/assets/images/space.jpg',
          titulo: 'Sala de cromoterapia',
          descricao: 'Iluminação terapêutica que contribui para o equilíbrio emocional'
        },
        {
          imagem: '/assets/images/monastery-.jpg',
          titulo: 'Consultório',
          descricao: 'Design que transmite confiança e acolhimento durante as consultas'
        },
        {
          imagem: '/assets/images/stairs.jpg',
          titulo: 'Sala de espera',
          descricao: 'Mobiliário ergonômico e elementos biofílicos para momentos de espera agradáveis'
        }
      ]
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
    
    // Obter o ID do projeto da URL
    this.route.paramMap.subscribe(params => {
      const projetoId = params.get('id');
      if (projetoId) {
        // Buscar o projeto correspondente na lista de projetos
        const projetoEncontrado = this.projetos.find(p => p.id === projetoId);
        if (projetoEncontrado) {
          this.projeto = projetoEncontrado;
          
          setTimeout(() => {
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }, 100);
        }
      }
    });
  }
  
  voltarParaProjetos(): void {
    this.router.navigate(['/']);
  }
}
