import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DateService } from '../services/date.service';

class Paises {
  nome: string;
  iso: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  //Criando o formulário de busca do feriado
  dateForm: FormGroup;

  //Declarando variáveis de escolha
  dia: number[] = [];
  mes: number[] = [];
  ano: number[] = [];
  paises: Paises[]; 

  constructor(  public formbuilder: FormBuilder, 
                public dateService: DateService,
                public route: Router) 
    {
    this.dateForm = this.formbuilder.group({
      day: [null, [Validators.required, Validators.maxLength(2)]],
      month: [null, [Validators.required, Validators.maxLength(2)]],
      year: [null, [Validators.required, Validators.maxLength(4)]],
      country: [null, [Validators.required]]
    });
  }

    //ENVIANDO INFORMACOES PARA O BD ATRAVES DO BOTAO SUBMIT
  submitForm(form){
    console.log(form.value);
    this.dateService.sendDates(form.value).subscribe(
        (res) => {
            console.log(res);
            localStorage.setItem('id', res.date.id);
            this.route.navigate(['/result']);
        },
        (err) => {
            console.log(err);
        }
    );
  }

  ngOnInit() {
    this.contagemDia();
    this.contagemMes();
    this.contagemAno();
    this.paises = [
      {
        nome: 'Antigua e Barbuda',
        iso: 'ag'
      },
      {
        nome:'Argentina',
        iso: 'ar'
    },
    {
        nome:'Bahamas',
        iso: 'br'
    },
    {
        nome:'Barbados',
        iso: 'bb'
    },
    {
        nome:'Belize',
        iso: 'bz'
    },
    {
        nome:'Bolivia',
        iso: 'bo'
    },
    {
        nome:'Brasil',
        iso: 'br'
    },
    {
        nome:'Canadá',
        iso: 'ca'
    },
    {
        nome:'Chile',
        iso: 'cl'
    },
    {
        nome:'Colômbia',
        iso: 'co'
    },
    {
        nome:'Costa Rica',
        iso: 'cr'
    },
    {
        nome:'Cuba',
        iso: 'cu'
    },
    {
        nome:'Dominica',
        iso: 'dm'
    },
    {
        nome:'Equador',
        iso: 'ec'
    },
    {
        nome:'El Salvador',
        iso: 'sv'
    },
    {
        nome:'Estados Unidos',
        iso: 'us'
    },
    {
        nome:'Granada',
        iso: 'gd'
    },
    {
        nome:'Guatemala',
        iso: 'gt'
    },
    {
        nome:'Guiana',
        iso: 'gy'
    },
    {
        nome:'Haiti',
        iso: 'ht'
    },
    {
        nome:'Honduras',
        iso: 'hn'
    },
    {
        nome:'Jamaica',
        iso: 'jm'
    },
    {
        nome:'México',
        iso: 'mx'
    },
    {
        nome:'Nicaragua',
        iso: 'ni'
    },
    {
        nome:'Panamá',
        iso: 'pa'
    },
    {
        nome:'Paraguai',
        iso: 'py'
    },
    {
        nome:'Peru',
        iso: 'pe'
    },
    {
        nome:'República Dominicana',
        iso: 'do'
    },
    {
        nome:'São Cristovão e Neves',
        iso: 'kn'
    },
    {
        nome:'São Vicente e Grandina',
        iso: 'lc'
    },
    {
        nome:'Santa Lúcia',
        iso: 'vc'
    },
    {
        nome:'Suriname',
        iso: 'sr'
    },
    {
        nome:'Trinidade e Tobago',
        iso: 'tt'
    },
    {
        nome:'Uruguai',
        iso: 'uy'
    },
    {
        nome:'Venezuela',
        iso: 've'
    }
    ];
  }

  contagemDia() {
    let i = 1;
    while (i < 32) {
      this.dia[i-1] = i;
      i = i+1;
    }
  }

  contagemMes() {
    let i = 1;
    while (i < 13) {
      this.mes[i-1] = i;
      i = i+1;
    }
  }

  contagemAno() {
    let i = 2017;
    let j = 0;
    while (i > 2016 && i < 2050) {
      this.ano[j] = i;
      i = i+1;
      j = j+1;
    }
  } 
}