// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Teilnehmer, Convention, ConventionTeilnehmer } = initSchema(schema);

export {
  Teilnehmer,
  Convention,
  ConventionTeilnehmer
};