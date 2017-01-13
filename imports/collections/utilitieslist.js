import { Mongo } from 'meteor/mongo';

UtilitiesList = new Mongo.Collection('utilities');

modules.export = UtilitiesList;