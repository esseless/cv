import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  intro: string;
  skill_1 = [];
  skill_2 = [];

  constructor() {
    // this.intro.push('\u2022  4 years of experience in working in a corporate environment as a full stack developer with strong technical skills in complex website development including web based applications');
    // this.intro.push('\u2022  Experience in system analysis, design, workflow architecture, development, testing and maintenance of web based applications');
    // this.intro.push('\u2022  Experience in developing highly interactive web applications using Angular 2+, HTML5, CSS, Angular JS 1.x, JavaScript, jQuery, JSON, Bootstrap and integrating RESTful APIs');
    // this.intro.push('\u2022  In depth knowledge of web technologies and standards to deliver the best experiences across web including responsive Web UI');
    // this.intro.push('\u2022  Worked with various version control systems - TFS, GIT');
    // this.intro.push('\u2022  Utilize Jasmine, Karma, Gulp and NPM to build and test applications');
    // this.intro.push('\u2022  Expertise in C# with .NET Core and unit testing C# code with NUNIT');
    // this.intro.push('\u2022  Used Jenkins for build Process to Generate Continuous Integration');
    // this.intro.push('\u2022  Worked extensively in Agile Development process');
    // this.intro.push('\u2022  Worked in waterfall and TDD processes');
    // this.intro.push('\u2022  Good understanding of Model View Controller MVC design patterns');
    // this.intro.push('\u2022  Experience with various IDE\'s such as Visual Studio Code, Sublime and Notepad++ on Windows');

    this.intro = 'A software developer with over 4 years of experience in developing interactive web applications';

    this.skill_1.push('\u2022 Web Technologies: HTML/HTML5,CSS3, JavaScript, JQuery, JSON, XML');
    this.skill_1.push('\u2022 JavaScript Libraries: Angular JS, Angular, Bootstrap');
    this.skill_1.push('\u2022 Server Side & framework: C# with .NET & .NET Core, Java');
    this.skill_1.push('\u2022 IDEs: Visual Studio Code, Notepad++, Sublime, Visual Studio, NetBeans');
    this.skill_2.push('\u2022 Version Control: GIT, TFS');
    this.skill_2.push('\u2022 CI/CD: Jenkins');
    this.skill_2.push('\u2022 OS: Windows');
    this.skill_2.push('\u2022 Methodologies: Agile, Waterfall, TDD');
    this.skill_2.push('\u2022 Other tools & Technologies: Bower, NPM, Gulp, Grunt, Angular CLI, JIRA, Cloud Foundry');
  }
}
