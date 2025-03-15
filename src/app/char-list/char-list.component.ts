import { Component } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent {
  showDropdown = false;
  showMissionModal = false;
  newMission = { title: '', phone: '' };
  missions: any[] = [];

  constructor(private chatService: ChatService) {
    this.missions = this.chatService.getMissions();
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  openMissionModal() {
    this.showMissionModal = true;
    this.showDropdown = false;
  }

  saveMission() {
    if(this.newMission.title && this.newMission.phone) {
      this.chatService.addMission({...this.newMission});
      this.newMission = { title: '', phone: '' };
      this.showMissionModal = false;
    }
  }
}

