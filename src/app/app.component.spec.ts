import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have title 'angular-ui'`, () => {
    expect(component.title).toEqual('angular-ui');
  });

  it('should render title in h1 tag', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-ui');
  });
});
