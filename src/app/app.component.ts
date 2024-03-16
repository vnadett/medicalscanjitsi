import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {JitsiService} from "../services/jitsi.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private jitsiService: JitsiService, private formBuilder: FormBuilder) {
  }

  public form = this.formBuilder.group({
    userName: ['', Validators.required],
    roomName: ['', Validators.required]
  })

  submit() {
    if (this.form.invalid) return;

    let obj = this.form.getRawValue();

    this.jitsiService.init(obj.userName!, obj.roomName!);

    document.getElementById('form')!.style.display = 'none';
  }
}
