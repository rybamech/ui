import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockDropdownComponent } from './block-dropdown.component';

describe('BlockDropdownComponent', () => {
  let component: BlockDropdownComponent;
  let fixture: ComponentFixture<BlockDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
