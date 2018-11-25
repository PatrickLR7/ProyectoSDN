import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasPorTemaComponent } from './tablas-por-tema.component';

describe('TablasPorTemaComponent', () => {
  let component: TablasPorTemaComponent;
  let fixture: ComponentFixture<TablasPorTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablasPorTemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablasPorTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
