import { DestinationStore } from '../../../lib/stores/Store';

export function load({ params }) {
  const id = parseInt(params.id);
  return {destination: DestinationStore.byId(id)}
}