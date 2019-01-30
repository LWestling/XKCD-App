import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComicComponent } from './comic.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ComicComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ComicComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'XKCD-App'`, () => {
    const fixture = TestBed.createComponent(ComicComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('XKCD-App');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ComicComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to XQCD-App!');
  });
});
