import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerTeilnehmer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Teilnehmer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Vorname?: string | null;
  readonly Nachname?: string | null;
  readonly Geburtsdatum?: string | null;
  readonly conventions?: (ConventionTeilnehmer | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeilnehmer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Teilnehmer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Vorname?: string | null;
  readonly Nachname?: string | null;
  readonly Geburtsdatum?: string | null;
  readonly conventions: AsyncCollection<ConventionTeilnehmer>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Teilnehmer = LazyLoading extends LazyLoadingDisabled ? EagerTeilnehmer : LazyTeilnehmer

export declare const Teilnehmer: (new (init: ModelInit<Teilnehmer>) => Teilnehmer) & {
  copyOf(source: Teilnehmer, mutator: (draft: MutableModel<Teilnehmer>) => MutableModel<Teilnehmer> | void): Teilnehmer;
}

type EagerConvention = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Convention, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Location?: string | null;
  readonly Teilnehmerobergrenze?: number | null;
  readonly Mindestalter?: string | null;
  readonly Teilnehmers?: (ConventionTeilnehmer | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConvention = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Convention, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Location?: string | null;
  readonly Teilnehmerobergrenze?: number | null;
  readonly Mindestalter?: string | null;
  readonly Teilnehmers: AsyncCollection<ConventionTeilnehmer>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Convention = LazyLoading extends LazyLoadingDisabled ? EagerConvention : LazyConvention

export declare const Convention: (new (init: ModelInit<Convention>) => Convention) & {
  copyOf(source: Convention, mutator: (draft: MutableModel<Convention>) => MutableModel<Convention> | void): Convention;
}

type EagerConventionTeilnehmer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ConventionTeilnehmer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teilnehmerId?: string | null;
  readonly conventionId?: string | null;
  readonly teilnehmer: Teilnehmer;
  readonly convention: Convention;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConventionTeilnehmer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ConventionTeilnehmer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teilnehmerId?: string | null;
  readonly conventionId?: string | null;
  readonly teilnehmer: AsyncItem<Teilnehmer>;
  readonly convention: AsyncItem<Convention>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ConventionTeilnehmer = LazyLoading extends LazyLoadingDisabled ? EagerConventionTeilnehmer : LazyConventionTeilnehmer

export declare const ConventionTeilnehmer: (new (init: ModelInit<ConventionTeilnehmer>) => ConventionTeilnehmer) & {
  copyOf(source: ConventionTeilnehmer, mutator: (draft: MutableModel<ConventionTeilnehmer>) => MutableModel<ConventionTeilnehmer> | void): ConventionTeilnehmer;
}