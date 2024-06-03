import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlatossugeridosPage } from './platossugeridos.page';

describe('PlatossugeridosPage', () => {
  let component: PlatossugeridosPage;
  let fixture: ComponentFixture<PlatossugeridosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatossugeridosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
