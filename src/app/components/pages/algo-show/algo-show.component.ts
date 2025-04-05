import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlgoService } from '../../../services/algo.service';
import { Algo } from '../../../models/algo';
import { IconComponent } from '../../atoms/icon/icon.component';
import { TitleComponent } from '../../atoms/title/title.component';
import { SubtitleComponent } from '../../atoms/subtitle/subtitle.component';
import { CkeditorComponent } from '../../atoms/ckeditor/ckeditor.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { UserAnswerService } from '../../../services/user-answer.service';
import { UserAnswer } from '../../../models/user-answer';
import {AppToastService} from "../../../services/app-toast.service";
import { NgbAccordionBody, NgbAccordionButton, NgbAccordionCollapse, NgbAccordionDirective, NgbAccordionItem } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-algo-show',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    TitleComponent,
    SubtitleComponent,
    CkeditorComponent,
    ButtonComponent,
    NgbAccordionBody,
    NgbAccordionButton,
    NgbAccordionItem,
    NgbAccordionDirective,
    NgbAccordionCollapse
  ],
  templateUrl: './algo-show.component.html',
  styleUrl: './algo-show.component.scss'
})
export class AlgoShowComponent implements OnInit {
  algo?: Algo;
  userAnswer: string = '';
  user!: User;

  constructor(
    private route: ActivatedRoute,
    private algoService: AlgoService,
    private userService: UserService,
    private userAnswerService: UserAnswerService,
    private router: Router,
    private toastservice: AppToastService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser()();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.algoService.getAlgoById(id).subscribe({
        next: (data) => {
          this.algo = data;
        },
        error: (err) => console.error('Erreur chargement algo:', err)
      });
    }
  }

  get isAdmin(): boolean {
    return this.user.roles?.includes('ADMIN');
  }

  goToEditAlgo(): void {
    if (this.algo) {
      this.router.navigate(['/editAlgo'], {
        queryParams: { isEdit: true, id: this.algo.id }
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

  onUserAnswerChange(newData: string): void {
    this.userAnswer = newData;
  }

  submitUserAnswer(): void {
    if (!this.algo || !this.userAnswer.trim()) return;

    const answerPayload: UserAnswer = {
      content: this.userAnswer,
      isRight: false,
      userId: this.user.id,
      algoId: this.algo.id
    };

    this.userAnswerService.addUserAnswer(answerPayload).subscribe({
      next: (res) => {
        this.toastservice.showSuccess('Bravo', 'Votre réponse a bien été enregistrée');
        this.router.navigate(['/algo']);
      },
      error: (err) => {
        console.error('❌ Erreur lors de l’envoi de la réponse', err);
        this.toastservice.showDanger('Erreur', "Votre réponse n'a pas pu être enregistrée");
      }
    });
  }
}
