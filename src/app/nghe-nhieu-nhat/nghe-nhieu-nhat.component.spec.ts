import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgheNhieuNhatComponent } from './nghe-nhieu-nhat.component';

describe('NgheNhieuNhatComponent', () => {
  let component: NgheNhieuNhatComponent;
  let fixture: ComponentFixture<NgheNhieuNhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgheNhieuNhatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgheNhieuNhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
