import { Component, OnInit } from '@angular/core';
import { dotnet } from './dotnet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-dotnet';
  private wasmCalcEngine: any = {}

  public async ngOnInit() {
    console.log('App init');

    const { getAssemblyExports, getConfig } = await dotnet.withDiagnosticTracing(false).create();

    const config = getConfig();
    this.wasmCalcEngine = await getAssemblyExports(config.mainAssemblyName);
    console.log('>>>> Wasm Calc Engine loaded');
    console.log(this.wasmCalcEngine);
  }

  }

