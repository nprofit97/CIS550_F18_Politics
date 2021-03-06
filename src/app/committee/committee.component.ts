import { Component, OnInit } from '@angular/core';
// import * as Backend:any from "../backend.js";
import { Backend } from "../backend";


@Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.css']
})


export class CommitteeComponent implements OnInit {
  committees = ["Agriculture", "Finance", "Schools", "Idk", "Just A Test"];
  subs = ["super", "specific", "subcommittee"];
  //b = require("../backend.js").Backend;
  b = new Backend();
  constructor() { }

  ngOnInit() {
  	// should populate committee dropdown upon page load
  }

  // Runs when user selects a committee
  selectCommittee(committee) {
  	this.getSubs(committee);
  }

  // Gets Subcommittees associated with current committee
  getSubs(committee) {
  	// call backend method
    this.b.get_all_subcomittees_on_committee(committee);
  	// subs = output of SQL query
  }

  // Gets members associated with current subcommittee
  getMembers(subcommittee) {
  	// call backend method
  	// members = output of SQL query
  }

}
