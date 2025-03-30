import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlgoService } from '../../../services/algo.service';
import { Algo } from '../../../models/algo';
import { TextComponent } from '../../atoms/text/text.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { TitleComponent } from '../../atoms/title/title.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SubtitleComponent } from '../../atoms/subtitle/subtitle.component';
import { CkeditorComponent } from '../../atoms/ckeditor/ckeditor.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { UserAnswerService } from '../../../services/user-answer.service';
import { UserAnswer } from '../../../models/user-answer';

@Component({
  selector: 'app-algo-show',
  standalone: true,
  imports: [
    CommonModule,
    TextComponent,
    IconComponent,
    TitleComponent,
    SubtitleComponent,
    CkeditorComponent,
    ButtonComponent
  ],
  templateUrl: './algo-show.component.html',
  styleUrl: './algo-show.component.scss'
})
export class AlgoShowComponent implements OnInit {
  algo?: Algo;
  safeContent!: SafeHtml;
  userAnswer: string = '';
  user!: User;

  constructor(
    private route: ActivatedRoute,
    private algoService: AlgoService,
    private sanitizer: DomSanitizer,
    private userService: UserService,
    private userAnswerService: UserAnswerService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser()();
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
        console.log('✅ Réponse soumise avec succès', res);
      },
      error: (err) => {
        console.error('❌ Erreur lors de l’envoi de la réponse', err);
      }
    });
  }
}
