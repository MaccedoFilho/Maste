import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  title = 'MasteObras';
  
  constructor() {}
  
  ngOnInit() {
  }
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.setupProjectFilters();
      this.setupScrollEvents();
    }, 200);
  }
  
  private setupProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card[data-category]');
    
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remover classe ativa de todos os botões
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Adicionar classe ativa no botão clicado
        btn.classList.add('active');
        
        // Obter o filtro selecionado
        const filter = btn.getAttribute('data-filter');
        
        // Mostrar todos os projetos ou filtrar por categoria
        if (filter === 'all') {
          projectCards.forEach(card => {
            (card as HTMLElement).style.display = '';
          });
        } else {
          projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (category === filter) {
              (card as HTMLElement).style.display = '';
            } else {
              (card as HTMLElement).style.display = 'none';
            }
          });
        }
      });
    });
  }
  
  private setupScrollEvents() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    });
  }
}