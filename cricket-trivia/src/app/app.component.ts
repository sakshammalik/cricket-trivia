import { Component, OnInit } from '@angular/core';
import { QUESTIONSANDANSWERS } from '../data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public readonly questionsAndAnswers = QUESTIONSANDANSWERS;
  public readonly options = ['a', 'b', 'c', 'd'];

  public form: FormGroup;

  public tempAnswers = {};

  public correctAnswers = 0;
  public incorrectAnswers = 0;

  public chartData = [
    {
      label: 'Correct',
      data: [this.correctAnswers]
    },
    {
      label: 'Incorrect',
      data: [this.incorrectAnswers]
    }
  ];

  constructor(
    private formBuilder: FormBuilder
  ) {}

  public ngOnInit() {
    this.createForm();
    this.form.controls.answers.valueChanges.subscribe(
      (value) => {
        this.questionsAndAnswers.forEach((question, index) => {
          let answerFound = question.all_answers.find((ans) => ans === value);
          if (answerFound) {
            this.tempAnswers[question.id] = value;
          }
        });

      });

  }

  public submit() {
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
    this.questionsAndAnswers.forEach((question) => {
      if (this.tempAnswers[question.id]) {
        if (this.tempAnswers[question.id] === question.correct_answer) {
          this.correctAnswers++;
        } else {
          this.incorrectAnswers++;
        }
      }
    });
    this.chartData = [
      {
        label: 'Correct',
        data: [this.correctAnswers]
      },
      {
        label: 'Incorrect',
        data: [this.incorrectAnswers]
      }
    ];
  }

  public reset() {
    this.tempAnswers = {};
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
    this.form.reset();
  }

  private createForm() {
    this.form = this.formBuilder.group({
      answers: [{}, [Validators.required]]
    });
  }
}
