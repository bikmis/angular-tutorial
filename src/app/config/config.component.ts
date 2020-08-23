import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { Config } from './config';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  userUrl: string = null;
  textFile: string = null;
  config: Config = <Config>{};

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.showConfig_1();
    this.showConfig_2();
  }

  showConfig_1() {
    this.configService.getConfig().subscribe((data) => {
      this.userUrl = data['userUrl'];
      this.textFile = data['textFile'];
    })
  };

  showConfig_2(){
    this.configService.getConfig().subscribe((data: Config) =>{
      this.config = data;
    });
  }; 


}
