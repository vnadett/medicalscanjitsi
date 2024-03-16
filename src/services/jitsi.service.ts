import { Injectable } from '@angular/core';

declare var JitsiMeetExternalAPI: any;
@Injectable({
  providedIn: 'root'
})
export class JitsiService {
  private options: any;
  private api: any;
  constructor() { }

  init(username: string, roomName: string) {
    let node = document.getElementById('meeting')!;
    node.innerHTML = '';

    this.options = {
      parent: node,
      roomName: roomName,
      userInfo: {
        displayName: username,
      },
    };

    this.api = new JitsiMeetExternalAPI('meet.jit.si', this.options);
  }
}
