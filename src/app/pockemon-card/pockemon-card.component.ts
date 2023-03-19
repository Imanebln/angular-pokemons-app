import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from './pockemon.model';
@Component({
  selector: 'app-pockemon-card',
  templateUrl: './pockemon-card.component.html',
  styleUrls: ['./pockemon-card.component.css'],
})
export class PockemonCardComponent implements OnInit {
  @Input() pokemon: Pokemon | undefined;
  @Input() isDeleteLoading = false;

  @Output() changeValue = new EventEmitter<any>();
  @Output() capture = new EventEmitter<Pokemon>();
  @Output() onDelete = new EventEmitter<Pokemon>();

  id: number | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.pokemon?.id;
    this.id = this.route.snapshot.params['id'];
  }

  onCapture() {
    this.capture.emit(this.pokemon);
  }
  onNameChange(name: any) {
    this.changeValue.emit({
      value: name,
      key: 'name',
      pokemon: this.pokemon,
    });
  }

  onAttackChange(value: any) {
    this.changeValue.emit({ value, key: 'attack', pokemon: this.pokemon });
  }

  onDefenseChange(value: any) {
    this.changeValue.emit({ value, key: 'defense', pokemon: this.pokemon });
  }

  onDeleteClick() {
    this.onDelete.emit(this.pokemon);
  }
}
