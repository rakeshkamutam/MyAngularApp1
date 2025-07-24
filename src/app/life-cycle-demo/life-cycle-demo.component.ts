import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-demo',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-demo.component.html',
  styleUrl: './life-cycle-demo.component.css'
})
export class LifecycleDemoComponent implements 
  OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

   @Input() name: string = '';
  //name = 'Angular Lifecycle Hooks Demo';

  constructor() {
    console.log('Constructor called 🚀');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges triggered 🧾', changes);
  }

  ngOnInit() {
    console.log('ngOnInit initialized ✅');
  }

  ngDoCheck() {
    console.log('ngDoCheck - custom change detection 🔁');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit - content projected 🌐');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked - content checked 🧪');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit - view ready 👁️');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked - view checked 🧹');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy - cleanup done 🧼');
  }
}
