import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'vezbanje3';
  newMemberName: string = '';
  members: string[] = [];
  errorMessage: string = '';
  numberOfTeams: number | "" = "";
  teams: string[][] = [];

  onInput(member: string) {
    this.newMemberName = member;
  }

  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = "Ime ne moze biti prazno!"
      return;
    } else {
      this.members.push(this.newMemberName);
      console.log(this.members);
      this.newMemberName = '';
      this.errorMessage = '';
    }
  }

  generateTeams() {

    if (!this.numberOfTeams || this.numberOfTeams <= 0) {

      this.errorMessage = 'Nevalidan unos timova'
      return;
    }

    if(this.members.length<this.numberOfTeams)
    {
      this.errorMessage = 'Nema dovoljno clanova za timove'
      return;
    }

    this.errorMessage = '';

    const allMembers = [...this.members];



    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length)
        //daje nasumican broj izmedju 0 i
        //najveceg elementa u nizu
        // console.log(randomIndex)
        const member = allMembers.splice(randomIndex, 1)[0]; //splice vraca niz a ovo [0] je prvi element tog niza
        if (!member) break;

        if (this.teams[i]) //ako postoji
        {
          this.teams[i].push(member)
        }
        else {
          this.teams[i] = [member]
        }
      }
    }
    console.log(this.teams);
    this.members = [];
    this.numberOfTeams = "";
  }
}
