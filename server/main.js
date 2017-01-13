import { Meteor } from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const Profiles = new Mongo.Collection('profiles');

Meteor.startup(() => {
  const profiles = Profiles.find().fetch();

  if (profiles.length === 0){
    Profiles.insert({
      name: 'middle school',
      he1: 1,
      he2: .25
    })
    Profiles.insert({
      name: 'high school',
      he1: .5,
      he2: .75
    })
  }
});
