import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'MasteObras';
  private swiper: Swiper | null = null;
  
  constructor() {}
  
  ngOnInit() {
  }
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.initSwiper();
      this.setupProjectFilters();
      this.setupScrollEvents();
    }, 200);
  }
  
  ngOnDestroy() {
    if (this.swiper) {
      this.swiper.destroy(true, true);
    }
  }
  
  private initSwiper() {
    Swiper.use([Navigation, Autoplay]);
    
    this.swiper = new Swiper('.projects-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 800,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      }
    });
  }
  
  private setupProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectSlides = document.querySelectorAll('.swiper-slide[data-category]');
    
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Adicionar classe ativa no botão clicado
        btn.classList.add('active');
        
        // Obter o filtro selecionado
        const filter = btn.getAttribute('data-filter');
        
        // Mostrar todos os projetos ou filtrar por categoria
        if (filter === 'all') {
          projectSlides.forEach(slide => {
            (slide as HTMLElement).style.display = '';
          });
        } else {
          projectSlides.forEach(slide => {
            const category = slide.getAttribute('data-category');
            if (category === filter) {
              (slide as HTMLElement).style.display = '';
            } else {
              (slide as HTMLElement).style.display = 'none';
            }
          });
        }
        
        if (this.swiper) {
          setTimeout(() => {
            this.swiper?.update();
          }, 100);
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