import { Component } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-call-page',
  templateUrl: './call-page.component.html',
  styleUrls: ['./call-page.component.css']
})
export class CallPageComponent {

  startWebcam() {
    const video = document.getElementById('webcam') as HTMLVideoElement;

    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(stream => {
      video.srcObject = stream;
      video.play();
    });
  }

}
