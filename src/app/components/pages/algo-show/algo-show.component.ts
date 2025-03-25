import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlgoService } from '../../../services/algo.service';
import { Algo } from '../../../models/algo';
import { TextComponent } from '../../atoms/text/text.component';
import {IconComponent} from "../../atoms/icon/icon.component";
import {TitleComponent} from "../../atoms/title/title.component";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-algo-show',
  standalone: true,
  imports: [CommonModule, TextComponent, IconComponent, TitleComponent],
  templateUrl: './algo-show.component.html',
  styleUrl: './algo-show.component.scss'
})
export class AlgoShowComponent implements OnInit {
  algo?: Algo;
  safeContent!: SafeHtml;

  constructor(
    private route: ActivatedRoute,
    private algoService: AlgoService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.algoService.getAlgoById(id).subscribe({
        next: (data) => {
          this.algo = data;
          this.safeContent = this.sanitizer.bypassSecurityTrustHtml(data.content);
        },
        error: (err) => console.error('Erreur chargement algo:', err)
      });
    }
  }

  getAlgoLogo(algo?: Algo): string {
    return algo?.type?.[0]?.logo ?? '/assets/icons/algo.svg';
  }

  getAlgoColor(algo?: Algo): string {
    return algo?.type?.[0]?.color ?? '#cccccc';
  }

  getAlgoTitle(algo?: Algo): string {
    return algo ? `Algo ${algo.id} - ${algo.title}` : '';
  }


}
