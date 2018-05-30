import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdTableModule } from '@angular/material';

import { TableComponent } from './table.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableComponent
      ],
      providers: [],
      imports: [
        MdTableModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.displayedColumns = ['place', 'name', 'score'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should detect a data source', () => {
  //   component.dataSource = mockDataSource;
  //   expect(component.dataSource).toBeDefined();
  // });
});
